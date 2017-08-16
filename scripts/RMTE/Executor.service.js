var ISO_DATE_FORMAT = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{1,3})?Z$/,
    CONSTRUCTOR_NAME = 'Constructor',
    execData,
    serviceInputMap,
    serviceResult,
    jsResult,
    snapshot,
    serviceData = tw.local.data,
    serviceSelector = tw.local.serviceSelector,
    remoteConstructor;

if (!serviceSelector) {
    throw new Error('ServiceSelector input is required');
}

if (!serviceSelector.name) {
    throw new Error('ServiceSelector.name is required');
}

snapshot = getSelectedSnapshot();

if (serviceData) {
    try {
        execData = JSON.parse(serviceData, restoreDates);
    } catch (err) {
        throw new Error('There was an issue parsing the JSON provided - ' + serviceData);
    }
    
    serviceInputMap = new tw.object.Map();
    
    // loop through all the keys in the input data JSON we just parsed
    for (var prop in execData) {
        putVariable(execData[prop], prop);
    }
}

serviceResult = execute(serviceInputMap);

if (serviceResult.err) {
    tw.local.errStr = serviceResult.err;
} else if (serviceResult.res) {
    jsResult = parseServiceResult(serviceResult.res);
    
    tw.local.outputStr = JSON.stringify(jsResult);
} else {
    tw.local.outputStr = '{}';
}


// private

function execute(serviceInput) {
    if (!snapshot) {
        return tw.system.executeServiceByName(serviceSelector.name, serviceInput);
    }
    
    var service = snapshot.findServiceByName(serviceSelector.name);
    
    if (!service) {
        throw new Error('Could not find service matching selector: ' + BPMJSON.convertTwToJS(serviceSelector));
    }
    
    var results; // tuple - { err, res }
    
    try {
        results = service.execute(serviceInput);
    } catch (err) {
        return { err: err.toString() }
    }
    
    return { res: results };
}

function putVariable(bndr, prop) {
    if (bndr === undefined || bndr === null) return;
    
    if (bndr instanceof Date) {
        
        // need to convert JS date to TWDate for top level bindings (twMap only takes TW objects)
        var twDate = new TWDate();
        
        // twDate.getTime() uses seconds, no milliseconds
        twDate.setTime(bndr.getTime() / 1000);
        twDate.setMilliseconds(bndr.getMilliseconds());
        
        serviceInputMap.put(prop, twDate);
        
        return;
    }
    
    // bind primitive values
    if (typeof bndr !== 'object') {
        serviceInputMap.put(prop, bndr);
        return;
    }
    
    // complex and lists
    
    if (!bndr.type || !bndr.data) {
        throw new Error('Complex inputs must be wrapped into the correct structure - please see the docs - prop=' + prop);
    }
    
    // don't do anything else if the prop has no data
    if (!bndr.data) return;
    
    var data = bndr.data,
        type = bndr.type,
        isList = data instanceof Array,
        varbl = getConstructor()(type, isList);
    
    if (isList) {
        for (var i = 0, x = data.length; i < x; i++) {
            varbl[i] = data[i];
        }
    } else {
        for (var key in data) {
            varbl[key] = data[key];
        }
    }
    
    serviceInputMap.put(prop, varbl);
}

// go through the result Map from a service call and map out all the outputs
// into an object so we can easily turn it inso JSON
function parseServiceResult(resultMap) {
    var out = {},
        keys = resultMap.keyArray();
    
    for (var i = 0, x = keys.length; i < x; i++) {
        var val = resultMap.get(keys[i]);
        
        out[keys[i]] = (typeof val !== 'object') ? val : BPMJSON.convertTwToJS(val);
    }
    
    return out;
}

// used with JSON.parse - dates by default do not get restored to a native Date object
// from a normal parse
function restoreDates(key, value) {
    if (typeof value === "string" && ISO_DATE_FORMAT.test(value)) {
        return new Date(value);
    }
    
    return value;
}

// falsey returns mean to use the current snapshot
function getSelectedSnapshot() {
    if (!serviceSelector.appAcronym) {
        return;
    }
    
    var app = tw.system.model.findProcessAppByAcronym(serviceSelector.appAcronym);
    
    if (!app) {
        throw new Error('Process App with acronym "' + serviceSelector.appAcronym + '" was not found');
    }
    
    var snapshot;
    
    if (serviceSelector.snapshotId) {
        snapshot = app.findSnapshotByID(serviceSelector.snapshotId);
    } else if (serviceSelector.snapshotAcronym) {
        snapshot = app.findSnapshotByAcronym(serviceSelector.snapshotAcronym);
    } else if (serviceSelector.snapshotName) {
        snapshot = app.findSnapshotByName(serviceSelector.snapshotName);
    } else {
        var params = new tw.object.listOf.SQLParameter();
        var sql, i = 0;
        
        if (serviceSelector.branchName) {
            sql = 'select tip_snapshot_id from lsw_branch b where name = ? and project_id in (select project_id from lsw_project where short_name = ?)';
            params[i] = new tw.object.SQLParameter();
            params[i].value = serviceSelector.branchName;
            i++;
        } else {
            sql = 'select tip_snapshot_id from lsw_branch b where b.IS_DEFAULT = \'T\' and project_id in (select project_id from lsw_project where short_name = ?)';
        }
        
        params[i] = new tw.object.SQLParameter();
        params[i].value = serviceSelector.appAcronym;
        
        var inp = new tw.object.Map();
        inp.put('sql', sql);
        inp.put('parameters', params);
        
        var results = tw.system.executeServiceByName('SQL Execute Statement (SQLResult)', inp);
        var snapshotId = results.get('results')[0].rows[0].TIP_SNAPSHOT_ID;
        
        snapshot = app.findSnapshotByID('2064.' + snapshotId);
    }
    
    return snapshot;
}

function getConstructor() {
    var service;
    
    if (remoteConstructor) return remoteConstructor;
    
    if (!snapshot) {
        return remoteConstructor = function (type, isList) {
            var inp = new tw.object.Map();
            inp.put('type', type);
            inp.put('isList', !!isList);
            
            return tw.system.executeServiceByName(CONSTRUCTOR_NAME, inp).get('object');
        };
    }
    
    service = snapshot.findServiceByName(CONSTRUCTOR_NAME);
    
    if (!service) {
        throw new Error('Could not find constructor service ("' + CONSTRUCTOR_NAME + '")');
    }
    
    return remoteConstructor = function (type, isList) {
        var inp = new tw.object.Map();
        inp.put('type', type);
        inp.put('isList', !!isList);
        
        var isActive = snapshot.isActive;
        
        if (!isActive) {
            snapshot.activate();
        }
        
        try {
            return service.execute(inp).get('object');
        } catch (err) {
            return { err: err.toString() }
        } finally {
            if (!isActive) {
                snapshot.deactivate();
            }
        }
    };
}

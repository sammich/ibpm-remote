rlog = (function () {
    var BUILD_NUM = 11,
        VERSION = '0.6.3',
        LOG_NAME = 'BtpLogger',
        hasInit = false
    ;

    // version check
    if (typeof rlog !== 'undefined' && rlog.__buildnum) {
        log.info(LOG_NAME + ' version check - found existing rlog (' + rlog.__version + ' - ' + rlog.__buildnum + '). Current version (' + VERSION + ' - ' + BUILD_NUM + ')');

        if (!rlog.__buildnum) {
            log.info(LOG_NAME + ' version check - existing version does not have buildNum, assume it is older');
        } else if (rlog.__buildnum >= VERSION) {
            log.info(LOG_NAME + ' version check - existing version is current or newer - not replacing');
            return rlog;
        } else {
            log.info(LOG_NAME + ' version check - existing version is older - please check your toolkits are aligned.');
        }
    }

    var logger,
        moduleExports = {},
        projectAcronymCache = {}, // key=snapshotId, value=acronym

        LOG_CONFIG_PATH = './properties/log4j-AppServer.xml',
        LOG_WATCH_SECONDS = 300;

    // see http://logging.apache.org/log4j/1.2/faq.html#a3.6

    addPropVal(moduleExports, 'debug', function (/*[...loggable elements]*/) {
        if (!logger.isDebugEnabled()) return;

        baseLog('debug', arguments);
    });

    addPropVal(moduleExports, 'info', function (/*[...loggable elements]*/) {
        if (!logger.isInfoEnabled()) return;

        baseLog('info', arguments);
    });

    ['warn', 'error'].map(function (level) {
        addPropVal(moduleExports, level, function (/*[...loggable elements]*/) {
            baseLog(level, arguments);
        });
    });

    function baseLog(level, messageArgs) {

        // first argument should be the service name, but just in case it's not a string, we'll
        // assume that all args are loggable elements
        var firstArgString = typeof messageArgs[0] === 'string';

        return log(level,
            firstArgString ? messageArgs[0] : 'UnknownService',
            constructMessage(messageArgs, firstArgString),
            level === 'error'
        );
    }

    // rand is just a simple marker to determine whether one JS context is the same as another
    var __rand = Math.round(Math.random() * 100000000);
    addPropVal(moduleExports, '__rand',  __rand);
    addPropVal(moduleExports, '__reinit', init);
    addPropVal(moduleExports, '__logger', logger);
    addPropVal(moduleExports, '__version', VERSION);
    addPropVal(moduleExports, '__buildnum', BUILD_NUM);
    addPropVal(moduleExports, 'id', getUid);

    addPropVal(moduleExports, 'debugEnabled', debugEnabled);
    addPropVal(moduleExports, 'infoEnabled', infoEnabled);

    init();

    return moduleExports;

    //

    function debugEnabled() {
        return logger.isDebugEnabled();
    }

    function infoEnabled() {
        return logger.isInfoEnabled();
    }

    function constructMessage(messageArgs, skipFirst) {
        if (!messageArgs || !messageArgs.length || (messageArgs.length === 1 && skipFirst)) {
            return 'No message provided';
        }

        var v, typof,
            message = '',
            i = skipFirst ? 1 : 0,
            x = messageArgs.length;

        for (; i < x; i++) {
            v = messageArgs[i];
            typof = typeof v;

            if (typof !== 'object') {
                message += v + ', ';
                continue;
            }

            if (v === null || typof === 'undefined') {
                message += v + ', ';
                continue;
            }

            if (v.toXMLString) {
                message += v.toXMLString() + ', ';
                continue;
            }

            if (v.toNativeDate) {
                v = v.toNativeDate();
            }

            message += JSON.stringify(v) + ', ';
        }

        return message;
    }

    function init() {
        Packages.org.apache.log4j.xml.DOMConfigurator.configureAndWatch(LOG_CONFIG_PATH, LOG_WATCH_SECONDS * 1000);
        logger = Packages.org.apache.log4j.Logger.getLogger(LOG_NAME);

        /*
        It turns out, that JS server files are init'd before 'tw' is. The code below fails due to a 'tw' not defined
        error.

        var projectDetails = getCurrentProjectSnapshot(),
            projectStr = projectDetails.acronym + '/' + (projectDetails.snapshotName || projectDetails.snapshotId);

        logger.info('BPM Logger initialised with configuration from: "' + LOG_CONFIG_PATH +
                    '" watching for changes every ' + LOG_WATCH_SECONDS + ' seconds for project/Snapshot: ' + projectStr);
        */

        var reInitStr = '';
        if (hasInit) {
            reInitStr = 're-';
        }

        logger.info('BPM Logger (' + VERSION + ' - ' + BUILD_NUM + ') ' + reInitStr + 'initialised with configuration from: "' + LOG_CONFIG_PATH +
            '" watching for changes every ' + LOG_WATCH_SECONDS + ' seconds. Startup ID: ' + __rand);

        hasInit = true;
    }

    function getUid() {
        return Packages.java.util.UUID.randomUUID() + '';
    }

    function getErrorDetails() {
        var errorMessage,
            errorLocation,
            stacktrace;

        if (tw.system.error) {
            var errorMessageNodes = tw.system.error.xpath('/error/message');
            if (errorMessageNodes.length >= 1) {
                errorMessage = errorMessageNodes[0].getText();
            }

            var locationNodes = tw.system.error.xpath('/error/location');
            if (locationNodes.length >= 1) {
                errorLocation = locationNodes[0].getText();
            }

            var stacktraceNodes = tw.system.error.xpath('/error/stackTrace[not(@type)]');
            if (stacktraceNodes.length >= 1) {
                stacktrace = stacktraceNodes[0].getText();
            }
        }

        return {
            message: errorMessage || '(error message not found)',
            location: errorLocation || 'Unknown',
            stacktrace: stacktrace || '(stacktrace not found)'
        }
    }

    function log(logLevel, serviceName, message, logError) {
        var projectDetails = getCurrentProjectSnapshot(),

            // possibly in all cases, 'UnknownUser' might be the DE Admin/BPD executor
            // it's been left as unknown due it being the safer fallback
            username = tw.system.user_loginName || 'UnknownUser',
            taskId = tw.system.task_id || '',
            instanceId = tw.system.currentProcessInstanceID || '';

        logLevel = logLevel || 'info';

        // prepare output message

        var outputMessage = username +
            ' [' + projectDetails.acronym + '/' + (projectDetails.snapshotName || projectDetails.snapshotId) + ']';

        outputMessage += ' [' + instanceId + ':' + taskId + ']';
        outputMessage += ' [' + serviceName + ']';

        if (message) {
            outputMessage += ' - ' + message;
        }

        if (logError) {
            var errorDetails = getErrorDetails();

            outputMessage += '\nError at: ' + errorDetails.location;
            outputMessage += '\nError message: ' + errorDetails.message;
            outputMessage += '\n' + errorDetails.stacktrace;
        }

        logger[logLevel](outputMessage);

        return outputMessage;
    }

    function getCurrentProjectSnapshot() {
        var project = {};

        var sysModel = tw.system.model;
        if (sysModel) {
            if (sysModel.processAppSnapshot) {
                project.snapshotId = sysModel.processAppSnapshot.id || undefined;
                project.snapshotName = sysModel.processAppSnapshot.name || undefined;
            }

            if (project.snapshotId) {
                project.acronym = lookupAcronymForSnapshot(project.snapshotId) || undefined;
            }
        }

        return project;
    }

    function lookupAcronymForSnapshot(snapshotId) {
        var acronym = projectAcronymCache[snapshotId];

        if (acronym) return acronym;

        // the lookup to `model.processApp` actually hits the DB every call
        // so its super super slow, 2 orders of magnitude slower
        acronym = tw.system.model.processApp.acronym || 'UNKNOWN_SNAPSHOT_' + snapshotId;

        projectAcronymCache[snapshotId] = acronym;

        return acronym;
    }

    // convenience

    function addPropVal(obj, key, val) {
        Object.defineProperty(obj, key, {
            value: val
        });
    }
})();

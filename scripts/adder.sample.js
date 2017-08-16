const executor = require('../').api.remote.executor;

(async function check() {
    const result = await executor({
        name: 'Add Two Numbers',
        appAcronym: 'RMTE'
    }, {
        a: 1,
        b: 2
    })
    
    console.log('1 + 2 = ' + result.total);
})();


(async function check() {
    try {
        const result = await executor({
            name: 'Has Own Type',
            appAcronym: 'SCSB'
        }, {
            a: {
                type: 'SamType',
                data: {
                    Untitled1: 'asd'
                }
            }
        })
    
        console.log('SamType', result.a);
    } catch (e) {
        console.error(e)
    }
})()
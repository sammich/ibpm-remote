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
})()

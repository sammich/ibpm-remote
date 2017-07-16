const start = require('../service/start')

module.exports = exec

const EVALUATOR_SERVICE_ID = '1.234cfbc6-4755-4aff-905d-dada28c02a76'

/**
 * Use the 'Remote' Process Application's API to execute a service and return it's output.
 *
 * @param {Function} evalFunc - define the target service
 * @param {Object} [options]
 * @param {boolean} [options.preserve] - do not strip metadata from the return data
 * @returns {Promise<Object>} - the results of the service called
 * @throws Function must be provided
 */
async function exec(evalFunc, options = {}) {
    if (!evalFunc || !(evalFunc instanceof Function)) {
        throw new Error('Function must be provided')
    }
    
    let results
    
    try {
        results = await start(EVALUATOR_SERVICE_ID, {
            evalStr: '(' + evalFunc.toString() + ')()'
        })
    } catch (err) {
        return Promise.reject(isBpmError(err) || err)
    }
    
    results = results.retVal
    
    if (!results) {
        return results
    }
    
    if (!options.preserve) {
        return cleanUpBpmObject(results)
    }
    
    return results
}

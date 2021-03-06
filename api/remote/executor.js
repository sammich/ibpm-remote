const start = require('../service/start'),
    { isBpmError } = require('../../utils/bpm')

module.exports = exec

const EXECUTOR_SERVICE_ID = process.env.EXECUTOR_SERVICE_ID || '1.6daf7ba7-34cf-4405-bd8c-9a8986eac8d9'

const dateFormat = /^\d{4}-\d{2}-\d{2}(T|\ )?\d{2}:\d{2}:\d{2}(.\d{3})?Z$/
function dateRestore(key, value) {
    if (typeof value === "string" && dateFormat.test(value)) {
        return new Date(value);
    }
    
    return value;
}

/**
 * Use the 'Remote' Process Application's API to execute a service and return it's output.
 *
 * @param {ServiceSelector} serviceSelector - define the target service
 * @param {Object} [inputs] - the inputs the selected service.
 * @returns {Promise<Object>} - the results of the service called
 * @throws Service Selector must be provided
 */
async function exec(serviceSelector, inputs) {
    if (!serviceSelector) {
        throw new Error('Service Selector must be provided')
    }
    
    if (!serviceSelector.name) {
        throw new Error('Service Selector name must be provided')
    }
    
    let results
    
    try {
        results = await start(EXECUTOR_SERVICE_ID, {
            apiKey: process.env.REMOTE_EXECUTOR_API_KEY || process.env.REMOTE_API_KEY || 'abc123',
            service: serviceSelector,
            jsonInput: inputs && JSON.stringify(inputs)
        }, undefined, true)
    } catch (err) {
        return Promise.reject(isBpmError(err) || err)
    }
    
    if (results.errStr) {
        return Promise.reject(results.errStr)
    }
    
    try {
        return JSON.parse(results.jsonResult, dateRestore)
    } catch (err) {
        return Promise.reject('Error attempting to parse JSON result - ' + err.toString())
    }
}

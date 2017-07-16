const start = require('../service/start')

module.exports = exec

const EXECUTOR_SERVICE_ID = '1.6daf7ba7-34cf-4405-bd8c-9a8986eac8d9'

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
    
    const results = await start(EXECUTOR_SERVICE_ID, {
        service: serviceSelector,
        jsonInput: inputs && JSON.stringify(inputs)
    })
    
    if (results.errStr) {
        throw new Error('Service Error: ' + results.errStr)
    }
    
    try {
        return JSON.parse(results.jsonResult)
    } catch (err) {
        console.error('Error parsing result JSON', err);
    }
}

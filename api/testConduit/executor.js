const start = require('../service/start')

module.exports = exec

async function exec(serviceId, serviceSelector, inputs) {
    if (!serviceId) {
        throw new Error('Service ID must be provided')
    }
    
    if (!serviceSelector) {
        throw new Error('Service Selector must be provided')
    }
    
    try {
        let results = await start(serviceId, {
            service: serviceSelector,
            jsonInput: inputs && JSON.stringify(inputs)
        })
        
        try {
            return JSON.parse(results.jsonResult)
        } catch (err) {
            console.error('Error parsing result JSON', err);
        };
    } catch (err) {
        if (err.Data && err.Data.errorMessage) {
            throw new Error('Service error: ' + err.Data.errorMessage)
        }
        
        throw err
    }
}

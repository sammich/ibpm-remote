const post = require('../../utils/rest').post,
    joinParts = require('../../utils/join-keys'),
    ProcessInstance = require('../../shared/types/ProcessInstance')

module.exports = exec

/**
 * Deletes a BPD instance
 *
 * @param {string} instanceId
 * @param {object|boolean} [parts]
 * @param {boolean} [parts.diagram]
 * @param {boolean} [parts.header]
 * @param {boolean} [parts.data]
 * @param {boolean} [parts.executionTree]
 * @param {boolean} [returnRaw]
 * @returns {Promise<Object>}
 */
async function exec(instanceId, parts, returnRaw) {
    if (!instanceId) {
        throw new Error('Instance ID must be provided')
    }
    
    const result = await post(`/process/${instanceId}?action=delete`, {
        params: {
            parts: parts === true ? 'all' : joinParts(parts, '|', 'none')
        }
    })
    
    if (!result || !result.data) {
        throw new Error('No data received from deleting instance')
    }
    
    return returnRaw ? result.data : new ProcessInstance(result.data)
}

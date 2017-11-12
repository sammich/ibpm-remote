const { put } = require('../../utils/rest'),
    joinParts = require('../../utils/join-keys'),
    Task = require('../../shared/types/Task')

module.exports = exec

/**
 *
 *
 * @param {string}  taskId
 * @param {object|boolean}  [parts]
 * @param {boolean} [parts.actions]
 * @param {boolean} [parts.data]
 * @param {boolean} [returnRaw]
 * @returns {Promise<*>}
 */
async function exec(taskId, parts, returnRaw) {
    if (!taskId) {
        throw new Error('Task ID must be provided')
    }
    
    const result = await put(`/task/${taskId}`, {
        params: {
            parts: parts === true ? 'all' : joinParts(parts, '|', 'none')
        }
    })
    
    if (!result || !result.data) {
        throw new Error('No data received / Invalid task ID')
    }
    
    return returnRaw ? result.data : new ProcessInstance(result.data)
}

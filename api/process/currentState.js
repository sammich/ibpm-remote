const post = require('../../utils/rest').get,
    joinParts = require('../../utils/join-keys')

module.exports = exec

/**
 * Starts a new BPD instance
 * @param {string} instanceId - the process instance ID to get the current state for
 * @param {object} options
 * @param {string} [options.taskLimit] - The maximum number of tasks to be returned
 * @param {string} [options.taskOffset] - Specifies the index (origin 0) of the first task instance to be returned from the result set
 * @param {object} [parts] - leave undefined for all items
 * @param {boolean} [parts.diagram]
 * @param {boolean} [parts.header]
 * @param {boolean} [parts.data]
 * @param {boolean} [parts.executionTree]
 * @param {boolean} [parts.actions]
 * @param {boolean} [parts.summary]
 * @param {boolean} [parts.relationships]
 * @returns {Promise<*>}
 */
async function exec(instanceId, options = {}, parts) {
    if (!instanceId) {
        throw new Error('Instance ID must be provided')
    }
    
    const result = await post(`/process/${instanceId}`, {
        params: {
            parts: joinParts(parts)
        },
        data: {
            taskLimit: options.taskLimit,
            taskOffset: options.taskOffset,
        }
    })
    
    return result && result.data
}

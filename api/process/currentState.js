const post = require('../../utils/rest').get,
    joinParts = require('../../utils/join-keys')

const path = '/process/' // + instanceId

module.exports = exec

/**
 * Starts a new BPD instance
 * @param {string} instanceId - the process instance ID to get the current state for
 * @param {object} options
 * @param {string} [options.taskLimit] - The maximum number of tasks to be returned
 * @param {string} [options.taskOffset] - Specifies the index (origin 0) of the first task instance to be returned from the result set
 * @param {object} [options.parts] - leave undefined for all items
 * @param {boolean} [options.parts.diagram]
 * @param {boolean} [options.parts.header]
 * @param {boolean} [options.parts.data]
 * @param {boolean} [options.parts.executionTree]
 * @param {boolean} [options.parts.actions]
 * @param {boolean} [options.parts.summary]
 * @param {boolean} [options.parts.relationships]
 * @returns {Promise<*>}
 */
async function exec(instanceId, options = {}) {
    let result,
        parts = joinParts(options.parts)
    
    result = await post(path + '/' + instanceId, {
        params: {
            parts
        },
        data: {
            taskLimit: options.taskLimit,
            taskOffset: options.taskOffset,
        }
    })
    
    return result.data
}


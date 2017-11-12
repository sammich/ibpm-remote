const { put } = require('../../utils/rest'),
    joinParts = require('../../utils/join-keys'),
    ProcessInstance = require('../../shared/types/ProcessInstance')

module.exports = exec

/**
 * Runs a service until a natural stop (either a coach, postpone, or the end)
 *
 * @param {string}  taskId
 * @param {object}  [options]
 * @param {string}  [options.params]
 * @param {object|boolean}  [parts]
 * @param {boolean} [parts.actions]
 * @param {boolean} [parts.data]
 * @returns {Promise<*>}
 */
async function exec(taskId, options = {}, parts) {
    if (!taskId) {
        throw new Error('Task ID must be provided')
    }
    
    let params = ''
    
    if (options.params) {
        params = `&params=${JSON.stringify(options.params)}`
    }
    
    const result = await put(`/task/${taskId}?action=finish${params}`, {
        params: {
            parts: parts === true ? 'all' : joinParts(parts, '|', 'none')
        }
    })
    
    return result && result.data
}

const { put } = require('../../utils/rest')

module.exports = exec

/**
 * asd
 *
 * @param {string} taskId
 * @returns {Promise<undefined>}
 */
async function exec(taskId) {
    if (!taskId) {
        throw new Error('Task ID must be provided')
    }

    return await put(`/task/${taskId}?action=assign&toUser=${process.env.BPM_ADMIN_USER}`)
}

const post = require('../../utils/rest').post,
    joinParts = require('../../utils/join-keys')

const path = '/process?action=start'

module.exports = exec

/**
 * Starts a new BPD instance
 *
 * @param {object} options
 * @param {string} options.bpdId - Business process definition ID. You can use the `v1/exposed/process` API to retrieve the list of business process definitions (BPDs) that are available to the user.
 * @param {string} [options.snapshotId] - Snapshot ID for a particular process. Begins with `2064.xxx....`
 * @param {string} [options.branchId] - The branch ID. Begins with `2063.xxx...`
 * @param {string} [options.processAppId] - The process app ID begins with `2066.xxx`. You can find the process app ID by selecting Other > Retrieve Process Applications.
 * @param {object} [options.params] - An object containing inputs to start the process
 * @param {string} [options.mode] - A string indicating whether the process should be started in run or debug mode
 * @param {object} [options.parts] - leave undefined for all items
 * @param {boolean} [options.parts.diagram]
 * @param {boolean} [options.parts.header]
 * @param {boolean} [options.parts.data]
 * @param {boolean} [options.parts.executionTree]
 * @returns {Promise<ProcessInstanceState>}
 */
async function exec(options) {
    if (!options) throw new Error('options argument must be defined')
    
    let result,
        parts = joinParts(options.parts)
    
    result = await post(path, {
        params: {
            parts
        },
        data: {
            bpdId: options.bpdId,
            snapshotId: options.snapshotId,
            branchId: options.branchId,
            processAppId: options.processAppId,
            params: options.params ? JSON.stringify(options.params) : undefined,
            mode: options.mode
        }
    })
    
    return result && result.data
}

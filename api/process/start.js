const post = require('../../utils/rest').post,
    joinParts = require('../../utils/join-keys')

const path = '/process?action=start'

module.exports = exec

/**
 * Starts a new BPD instance
 *
 * @param {string} bpdId - Business process definition ID. You can use the `v1/exposed/process` API to retrieve the list of business process definitions (BPDs) that are available to the user.
 * @param {object} [options]
 * @param {string} [options.snapshotId] - Snapshot ID for a particular process. Begins with `2064.xxx....`
 * @param {string} [options.branchId] - The branch ID. Begins with `2063.xxx...`
 * @param {string} [options.processAppId] - The process app ID begins with `2066.xxx`. You can find the process app ID by selecting Other > Retrieve Process Applications.
 * @param {object} [options.params] - An object containing inputs to start the process
 * @param {string} [options.mode] - A string indicating whether the process should be started in run or debug mode
 * @param {object} [parts] - leave undefined for all items
 * @param {boolean} [parts.diagram]
 * @param {boolean} [parts.header]
 * @param {boolean} [parts.data]
 * @param {boolean} [parts.executionTree]
 * @returns {Promise<Object>}
 */
async function exec(bpdId, options = {}, parts) {
    if (!bpdId) {
        throw new Error('BPD ID must be provided')
    }
    
    const result = await post(path, {
        params: {
            parts: joinParts(parts)
        },
        data: {
            bpdId: bpdId,
            snapshotId: options.snapshotId,
            branchId: options.branchId,
            processAppId: options.processAppId,
            params: options.params && JSON.stringify(options.params),
            mode: options.mode
        }
    })
    
    return result && result.data
}

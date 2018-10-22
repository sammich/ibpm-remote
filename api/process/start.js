const post = require('../../utils/rest').post,
    joinParts = require('../../utils/join-keys'),
    ProcessInstance = require('../../shared/types/ProcessInstance')

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
 * @param {object} [parts]
 * @param {boolean} [parts.diagram]
 * @param {boolean} [parts.header]
 * @param {boolean} [parts.data]
 * @param {boolean} [parts.executionTree]
 * @param {boolean} [returnRaw]
 * @returns {Promise<Object>}
 */
async function exec(bpdId, options = {}, parts, returnRaw) {
    if (!bpdId) {
        throw new Error('BPD ID must be provided')
    }

    const result = await post(path, {
        params: {
            parts: parts === true ? 'all' : joinParts(parts, '|', 'none')
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
    
    if (!result || !result.data) {
        throw new Error('No data received from starting instance')
    }
    
    return returnRaw || !parts ? result.data : new ProcessInstance(result.data)
}

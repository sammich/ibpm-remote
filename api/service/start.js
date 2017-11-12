const post = require('../../utils/rest').post,
    joinParts = require('../../utils/join-keys'),
    { isBpmError } = require('../../utils/bpm')

module.exports = exec

/**
 * Runs a service until a natural stop (either a coach, postpone, or the end)
 *
 * @param {string}  serviceId - A service model ID or a string of the form <project-acronym>@<service-name>
 * @param {*}       inputs - plain object of data to pass through to the service
 * @param {object}  [options]
 * @param {string}  [options.snapshotId] - Snapshot ID for a particular process. Begins with \"2064.xxx....\"
 * @param {boolean} [options.createTask] - Indicates whether a corresponding task should be created when starting the service.
 * @param {string}  [options.callerModelId] - The ID of an task or process model that can be associated with the new service instance. If a callerModelId is not specified, the new service instance will not be associated with an existing caller model. For secured Ajax services, this setting is also used to check whether the current user is authorized to start the Ajax service, by checking whether the caller model relies on the Ajax service.
 * @param {string}  [options.callerModelBranchId] - The ID of the branch that determines the exact version of a given callerModelId. If a callerModelBranchId is specified, this does implicitly indicate that a Tip is to be used, and the callerModelSnapshotId may not be specified in this case. If a callerModelId is specified, then either a callerModelBranchId or a callerModelSnapshotId is required.
 * @param {string}  [options.callerModelSnapshotId] - The ID of the snapshot that determines the exact version of a given callerModelId. If a callerModelSnapshotId is specified, this does implicitly indicate that a Tip is not to be used, and the callerModelBranchId may not be specified in this case. If a callerModelId is specified, then either a callerModelSnapshotId or a callerModelBranchId is required.
 * @param {string}  [options.callerProcessId] - The ID of an existing process that can be associated with the new service instance. If a process ID is not specified, the new service instance will not be associated with an existing process. For secured Ajax services, this setting is also used to check whether the current user is authorized to start the Ajax service, by checking whether the process model relies on the Ajax service.
 * @param {string}  [options.callerTaskId] - The ID of an existing task that can be associated with the new service instance. If a task ID is not specified, the new service instance will not be associated with an existing task. For secured Ajax services, this setting is also used to check whether the current user is authorized to start the Ajax service, by checking whether the task model relies on the Ajax service.
 * @param {object|boolean}  [parts]
 * @param {boolean} [parts.data]
 * @returns {Promise<*>}
 */
async function exec(serviceId, inputs, options = {}, parts) {
    if (!serviceId) {
        throw new Error('Service ID must be provided')
    }
    
    try {
        const result = await post(`/service/${serviceId}?action=start`, {
            params: {
                parts: parts === true ? 'all' : joinParts(parts, '|', 'none')
            },
            data: {
                params: inputs && JSON.stringify(inputs),
                snapshotId: options.snapshotId,
                createTask: options.createTask,
                callerModelId: options.callerModelId,
                callerModelBranchId: options.callerModelBranchId,
                callerModelSnapshotId: options.callerModelSnapshotId,
                callerProcessId: options.callerProcessId,
                callerTaskId: options.callerTaskId
            }
        })
    
        return result && result.data && result.data.data
    } catch (err) {
        return Promise.reject(isBpmError(err) || err)
    }
}

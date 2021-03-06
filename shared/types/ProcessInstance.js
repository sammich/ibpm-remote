const Task = require('./Task'),
    { waitCheck } = require('../../utils'),
    currentState = require('../../api/process/currentState'),
    deleteInstance = require('../../api/process/delete'),
    terminateInstance = require('../../api/process/terminate')

class ProcessInstance {
    constructor(processIdOrRestData) {
        
        // processId can't be zero, anyway
        if (!processIdOrRestData) {
            throw new Error('No processId or data provided')
        }

        if (typeof processIdOrRestData === 'number') {
            this._rawData = {
                piid: processIdOrRestData
            }
            // module user needs to call `load()` after this call path
        } else if (typeof processIdOrRestData === 'object') {
            this._rawData = processIdOrRestData
            this._processRawData()
        } else {
            const err = new Error('Unknown input provided to constructor')
            err.data = processIdOrRestData
            throw err
        }
    }
    
    _processRawData() {
        this._rawData.tasks = this._rawData.tasks.map(rawTask => new Task(rawTask, this))
        
        // order task ID asc
        this._rawData.tasks.sort((a, b) => {
            return a.id - b.id
        })
    }
    
    async load(data) {
        if (!data) {
            this._rawData = await currentState(this.id, undefined, true, true)
        } else {
            this._rawData = data
        }

        this._processRawData()
        return this
    }
    
    async reload() {
        await this.load()
        return this
    }
    
    get id() {
        return this._rawData.piid
    }
    
    get name() {
        return this._rawData.name
    }
    
    get tasks() {
        return this._rawData.tasks
    }
    
    get variables() {
        return this._rawData.variables
    }
    
    get isFailed() {
        return this._rawData.state === 'STATE_FAILED'
    }

    get isActive() {
        return this._rawData.state === 'STATE_RUNNING'
    }

    get isFinished() {
        return this._rawData.state === 'STATE_FINISHED'
    }

    async terminate() {
        try {
            await terminateInstance(this.id, undefined, true)
        } catch (err) {
            console.error('Could not terminate instance', err);
        }

        return this
    }

    async delete(force) {
        if (!this.isFinished && force) {
            await this.terminate()
        }

        try {
            await deleteInstance(this.id, undefined, true)
        } catch (err) {
            console.error('Could not delete instance', err);
        }

        return this
    }

    get currentTasks() {
        return this._rawData.tasks.filter(task => {
            return task._rawData.status !== 'Closed'
        })
    }

    /**
     *
     * @param taskNameFilter - regex or string - same semantics as `getTasksByName`
     * @returns {Promise<void>}
     */
    async waitForTask(taskNameFilter) {
        return await waitCheck(async () => {
            await this.reload()

            const tasks = this.getTasksByName(taskNameFilter)

            if (tasks.length) {
                return tasks
            }
        }, 1000, { // TODO maybe make this configurable globally
            async: true,
            tailCall: true
        })
    }

    /**
     *
     * @param {RegExp|string} nameFilter - Return task names matching the regex object or a string
     *                                     (case insensitive)
     * @returns {Task[]} - any matching tasks
     */
    getTasksByName(nameFilter) {
        if (!nameFilter) return this.tasks
        
        const strMatch = typeof nameFilter === 'string'

        if (!strMatch && !(nameFilter instanceof RegExp)) {
            throw new Error('input must be string or regex')
        }
        
        return this.tasks.filter(task => {
            return strMatch ? nameFilter === task.name : nameFilter.test(task.name)
        })
    }
}

module.exports = ProcessInstance

/* {
    piid: '404',
    processAppAcronym: 'APIRSB',
    dueDate: '2017-07-03T20:17:02Z',
    creationTime: '2017-07-03T12:17:02Z',
    description: '',
    executionState: 'Active',
    state: 'STATE_RUNNING',
    name: 'Process:404',
    processTemplateName: 'Process 1',
    lastModificationTime: '2017-07-03T12:17:03Z',
    richDescription: '',
    caseFolderID: '2126.5d7cb6f4-f318-4fcf-87eb-593a8a156c42',
    caseFolderServerName: 'IBM_BPM_ManagedStore',
    processTemplateID: '25.d2f4f381-8231-4b79-9e91-f930982e7fb0',
    processAppName: 'API Runner Sandbox',
    processAppID: '2066.a4c0e3af-10c7-4c51-a5ea-a00213d51e20',
    snapshotName: null,
    snapshotID: '2064.bf500cd6-8a14-4668-bfee-4a7a799abbb8',
    branchID: '2063.046efa87-3524-416c-8ede-aabe22c6cb00',
    branchName: 'Main',
    snapshotTip: true,
    startingDocumentServerName: null,
    comments: [],
    tasks: [{
        displayName: 'Step: User Task',
        dueTime: '2017-07-03T13:17:02Z'
        assignedTo: 'All Users_T_da7e4d23-78cb-4483-98ed-b9c238308a03.07d9f6af-e33e-40f9-b03e-edee1c123cea',
        assignedToDisplayName: 'All Users',
        assignedToType: 'group',
        activationTime: '2017-07-03T12:17:02Z',
        startTime: '2017-07-03T12:17:02Z',
        atRiskTime: '2017-07-03T13:11:02Z',
        processInstanceName: 'Process:404',
        completionTime: null,
        clientTypes: [Array],
        containmentContextID: '404',
        isAtRisk: true,
        description: '',
        kind: 'KIND_PARTICIPATING',
        lastModificationTime: '2017-07-03T12:17:02Z',
        originator: 'deadmin',
        priority: 30,
        state: 'STATE_READY',
        piid: '404',
        priorityName: 'Normal',
        data: [Object],
        externalActivitySnapshotID: null,
        serviceID: '1.d3c7b467-76bf-4fd8-862f-f70b51b65c5c',
        serviceSnapshotID: '2064.bf500cd6-8a14-4668-bfee-4a7a799abbb8',
        flowObjectID: 'ed3af103-a19b-44dd-8d8c-3132238c4a0a',
        nextTaskId: null,
        collaboration: [Object],
        actions: null,
        tkiid: '304',
        name: 'User Task',
        status: 'Received',
        owner: null,
    }],
    documents: [],
    actionDetails: null,
    data: '"{}"',
    variables: {},
    relationship: [],
    businessData: [],
    executionTree: {
        executionStatus: '1',
        root: {
            name: 'Process 1',
            nodeId: '1',
            createdTaskIDs: null,
            variables: {},
            children: [Array]
        }
    },
    diagram: {
        processAppID: '2066.a4c0e3af-10c7-4c51-a5ea-a00213d51e20',
        milestone: null,
        step: [ [Object], [Object], [Object] ],
        lanes: [ [Object] ],
        orphaned: null
    },
    actions: null,
    starterId: '2048.1'
}
*/

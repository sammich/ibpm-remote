/**
 * @typedef {object} ProcessInstanceState
 * @property {string} executionState
 * @property {string} state
 * @property {string} piid
 * @property {string} dueDate
 * @property {object[]} tasks
 * @property {object} variables
 */
/*

{
    creationTime: '2017-07-03T12:17:02Z',
    description: '',
    richDescription: '',
    executionState: 'Active',
    state: 'STATE_RUNNING',
    lastModificationTime: '2017-07-03T12:17:03Z',
    name: 'Process:404',
    piid: '404',
    caseFolderID: '2126.5d7cb6f4-f318-4fcf-87eb-593a8a156c42',
    caseFolderServerName: 'IBM_BPM_ManagedStore',
    processTemplateID: '25.d2f4f381-8231-4b79-9e91-f930982e7fb0',
    processTemplateName: 'Process 1',
    processAppName: 'API Runner Sandbox',
    processAppAcronym: 'APIRSB',
    processAppID: '2066.a4c0e3af-10c7-4c51-a5ea-a00213d51e20',
    snapshotName: null,
    snapshotID: '2064.bf500cd6-8a14-4668-bfee-4a7a799abbb8',
    branchID: '2063.046efa87-3524-416c-8ede-aabe22c6cb00',
    branchName: 'Main',
    snapshotTip: true,
    startingDocumentServerName: null,
    dueDate: '2017-07-03T20:17:02Z',
    comments: [],
    tasks: [{
        activationTime: '2017-07-03T12:17:02Z',
        atRiskTime: '2017-07-03T13:11:02Z',
        clientTypes: [Array],
        completionTime: null,
        containmentContextID: '404',
        description: '',
        displayName: 'Step: User Task',
        isAtRisk: true,
        kind: 'KIND_PARTICIPATING',
        lastModificationTime: '2017-07-03T12:17:02Z',
        originator: 'deadmin',
        priority: 30,
        startTime: '2017-07-03T12:17:02Z',
        state: 'STATE_READY',
        piid: '404',
        processInstanceName: 'Process:404',
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
        assignedTo: 'All Users_T_da7e4d23-78cb-4483-98ed-b9c238308a03.07d9f6af-e33e-40f9-b03e-edee1c123cea',
        assignedToDisplayName: 'All Users',
        assignedToType: 'group',
        dueTime: '2017-07-03T13:17:02Z'
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

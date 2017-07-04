const bpmGet = require('../utils/rest').get,
    bpmPost = require('../utils/rest').post,
    bpmPut = require('../utils/rest').put

;(async () => {
    const startUrl = '/process?action=start&bpdId=25.d2f4f381-8231-4b79-9e91-f930982e7fb0&branchId=2063.046efa87-3524-416c-8ede-aabe22c6cb00'
    const startResp = await bpmPost(startUrl)
    
    const status = await bpmGet('process/' + startResp.piid)
    const firstTaskId = status.tasks[0].tkiid
    
    const task = await bpmGet('task/' + firstTaskId)
    const taskComplete = await bpmPut('task/' + firstTaskId + '?action=finish')
    console.log(taskComplete);
})()

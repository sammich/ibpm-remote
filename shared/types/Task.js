const { currentState, complete, assignToMe } = require('../../api/task')

class Task {
    constructor(taskIdOrRestData) {
        
        // taskId can't be zero, anyway
        if (!taskIdOrRestData) {
            throw new Error('No taskId or data provided')
        }
        
        if (typeof taskIdOrRestData === 'number') {
            this._rawData = {
                tkiid: taskIdOrRestData
            }
            // module user needs to call `load()` after this call path
        } else if (typeof taskIdOrRestData === 'object') {
            this._rawData = taskIdOrRestData
            this._processRawData()
        } else {
            const err = new Error('Unknown input provided to constructor')
            err.data = taskIdOrRestData
            throw err
        }
    }
    
    _processRawData() {
    
    }
    
    async load() {
        this._rawData = await currentState(this.id, true, true)
        // this._processRawData()
    }
    
    async reload() {
        await this.load()
    }
    
    async complete(params, assignToMeFirst) {
        if (assignToMeFirst) {
            await assignToMe(this.id)
        }

        await complete(this.id, { params })

        return this
    }
    
    get id() {
        return this._rawData.tkiid
    }
    
    get name() {
        return this._rawData.name
    }

    get assignedTo() {
        return this._rawData.assignedTo
    }

    get assignedToDisplayName() {
        return this._rawData.assignedToDisplayName
    }
    
    get finished() {
        return this._rawData.status === 'Closed'
    }
}

module.exports = Task


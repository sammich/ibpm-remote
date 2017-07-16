module.exports.isBpmError = isBpmError
module.exports.cleanUpBpmObject = cleanUpBpmObject

/**
 *
 * @param {Object} err - any object that could be an error
 * @returns {boolean|string} - false returned if not 'an IBM BPM error' message
 */
function isBpmError(err) {
    /*
    { status: 'error',
        Data:
         { status: 'error',
           exceptionType: 'com.ibm.bpm.wle.api.UnexpectedFailureException',
           errorNumber: 'CWTBG0019E',
           errorMessage: 'CWTBG0019E: Unexpected exception during execution. Exception information: \'com.lombardisoftware.component.common.workflow.WorkflowProcessItemException: Runtime error in script ("Process: \'Evaluator\' ProcessItem: \'Less Evil Eval\' Type: \'ITEM\'" 10:-1).fubar\nScript (line 10):\n   8 :     // if data is to be returned, it all must be written into the \'retVal\' var\n   9 :     // it also must be mappable to an ANY type, so any TW-type, and primitives\n<B>  10 :     eval(stringToEval);</B>\n  11 :     \n  12 :     return retVal;\n\n\'.',
           errorMessageParameters: [ 'com.lombardisoftware.component.common.workflow.WorkflowProcessItemException: Runtime error in script ("Process: \'Evaluator\' ProcessItem: \'Less Evil Eval\' Type: \'ITEM\'" 10:-1).fubar\nScript (line 10):\n   8 :     // if data is to be returned, it all must be written into the \'retVal\' var\n   9 :     // it also must be mappable to an ANY type, so any TW-type, and primitives\n<B>  10 :     eval(stringToEval);</B>\n  11 :     \n  12 :     return retVal;\n\n' ],
           programmersDetails: 'com.lombardisoftware.component.common.workflow.WorkflowProcessItemException: Runtime error in script ("Process: \'Evaluator\' ProcessItem: \'Less Evil Eval\' Type: \'ITEM\'" 10:-1).fubar\nScript (line 10):\n   8 :     // if data is to be returned, it all must be written into the \'retVal\' var\n   9 :     // it also must be mappable to an ANY type, so any TW-type, and primitives\n<B>  10 :     eval(stringToEval);</B>\n  11 :     \n  12 :     return retVal;\n\n',
           responses: null,
           errorData: null } }
     */
    if (!err) return false
    
    if (err.status === 'error' && err.Data) {
        const data = err.Data
        if (data.errorMessage) return data.errorMessage
    }
    
    return false
}

/**
 * Strips metadata from BPM objects and collapses TWList types into a normal array.
 *
 * @param {object} obj - the result of calling a BPM endpoint
 * @returns {*} - the original object with all @metadata property removed
 */
function cleanUpBpmObject(obj) {
    if (!obj) return obj
    
    if (typeof obj === 'object') {
        if ('@metadata' in obj && 'items' in obj) {
            return obj.items.map(item => {
                return cleanUpBpmObject(item)
            })
        }
        
        if ('@metadata' in obj) {
            delete obj['@metadata']
        }
        
        const retObj = {}
        for (let prop in obj) {
            retObj[prop] = cleanUpBpmObject(obj[prop])
        }
        
        return retObj
    }
    
    return obj
}
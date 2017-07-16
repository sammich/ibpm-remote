const { isBpmError, cleanUpBpmObject } = require('./bpm')

const exampleBpmError = {
    status: 'error',
    Data: { status: 'error',
        exceptionType: 'com.ibm.bpm.wle.api.UnexpectedFailureException',
        errorNumber: 'CWTBG0019E',
        errorMessage: 'CWTBG0019E: Unexpected exception during execution. Exception information: \'com.lombardisoftware.component.common.workflow.WorkflowProcessItemException: Runtime error in script ("Process: \'Evaluator\' ProcessItem: \'Less Evil Eval\' Type: \'ITEM\'" 10:-1).fubar\nScript (line 10):\n   8 :     // if data is to be returned, it all must be written into the \'retVal\' var\n   9 :     // it also must be mappable to an ANY type, so any TW-type, and primitives\n<B>  10 :     eval(stringToEval);</B>\n  11 :     \n  12 :     return retVal;\n\n\'.',
        errorMessageParameters: [ 'com.lombardisoftware.component.common.workflow.WorkflowProcessItemException: Runtime error in script ("Process: \'Evaluator\' ProcessItem: \'Less Evil Eval\' Type: \'ITEM\'" 10:-1).fubar\nScript (line 10):\n   8 :     // if data is to be returned, it all must be written into the \'retVal\' var\n   9 :     // it also must be mappable to an ANY type, so any TW-type, and primitives\n<B>  10 :     eval(stringToEval);</B>\n  11 :     \n  12 :     return retVal;\n\n' ],
        programmersDetails: 'com.lombardisoftware.component.common.workflow.WorkflowProcessItemException: Runtime error in script ("Process: \'Evaluator\' ProcessItem: \'Less Evil Eval\' Type: \'ITEM\'" 10:-1).fubar\nScript (line 10):\n   8 :     // if data is to be returned, it all must be written into the \'retVal\' var\n   9 :     // it also must be mappable to an ANY type, so any TW-type, and primitives\n<B>  10 :     eval(stringToEval);</B>\n  11 :     \n  12 :     return retVal;\n\n',
        responses: null,
        errorData: null
    }
}

describe(`Is BPM error - isBpmError`, () => {
    it(`returns false with falsey input`, () => {
        expect(isBpmError()).toBe(false)
        expect(isBpmError(null)).toBe(false)
        expect(isBpmError(undefined)).toBe(false)
    })
    
    it(`returns string error message extracted from BPM error`, () => {
        expect(isBpmError(exampleBpmError)).toMatch(/Runtime error/)
    })
    
    it(`returns false for error objects not matching BPM error structure`, () => {
        expect(isBpmError(new Error('some error'))).toBe(false)
        expect(isBpmError({ message: 'some error' })).toBe(false)
    })
})

describe(`cleanUpBpmObject`, () => {
    it(`returns primitive and falsey values unchanged`, () => {
        expect(cleanUpBpmObject()).toBeUndefined()
        expect(cleanUpBpmObject(123)).toBe(123)
        expect(cleanUpBpmObject(true)).toBe(true)
        expect(cleanUpBpmObject(null)).toBe(null)
    })
})
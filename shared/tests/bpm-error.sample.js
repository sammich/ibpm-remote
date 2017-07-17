module.exports = {
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

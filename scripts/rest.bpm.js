request = (function () {
    return function (serviceName, operation, options) {
        var request = new BPMRESTRequest()
        request.externalServiceName = serviceName
        request.operationName = operation
        request.httpHeaders = options.headers
        request.parameters = options.params

        var response
        try {
            response = tw.system.invokeREST(request)
        } catch (err) {
            // TODO logging
            options.error(err)
        }

        if (response.httpStatusCode >= 200 && response.httpStatusCode < 300) {
            options.success(response.content, response)
        } else {
            options.error(undefined, response)
        }
    }
})()

request('ScenarioAPI', 'getScenario', {
    headers: {
        'X-FRANCHISE': '1234'
    },
    params: {
        scenarioId: '1234'
    },
    success: function (data) {

    },
    error: function (error) {

    }
})
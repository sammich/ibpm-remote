module.exports = {
    __setRequestResponses
}

let canned_err, canned_response, canned_body

function __setRequestResponses(err, response, body) {
    canned_err = err
    canned_response = response
    canned_body = body
}

['get', 'post', 'put', 'delete'].forEach(method => {
    module.exports[method] = jest.fn((url, options, callback) => {
        callback(canned_err, canned_response, canned_body)
    })
})

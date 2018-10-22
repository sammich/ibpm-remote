require('dotenv').config()

const request = require('request'),
    queryString = require('query-string'),
    userManager = require('./UserManager')

const host = process.env.BPM_SERVER_HOST || 'localhost',
    port = process.env.BPM_SERVER_APP_PORT || '',
    protocol = process.env.BPM_SERVER_PROTOCOL || 'https',
    rest = process.env.BPM_REST_CONTEXT || '/rest/bpm/wle/v1',

    /* istanbul ignore next */
    restUrl = protocol + '://' + host + (port ? ':' + port : '') + rest

module.exports = {
    get,
    post,
    put,
    del,
    
    __parseJson: parseJson,
}

//

function get(path, options = {}) {
    options.method = 'get'
    
    return call(path, options)
}

function post(path, options = {}) {
    options.method = 'post'

    return call(path, options)
}

function put(path, options = {}) {
    options.method = 'put'
    
    return call(path, options)
}

function del(path, options = {}) {
    options.method = 'delete'
    
    return call(path, options)
}

//

/**
 *
 * @param {string} path - a URL relative to the base REST API path: /rest/bpm/wle/v1 - leading forward-slash is optional
 * @param {object} options
 * @param {string} options.method - the HTTP method
 * @param {string} [options.username] - alternative username
 * @param {string} [options.password] - alternative password
 * @param {object} [options.params] - query string parameters
 * @param {object} [options.data] - body data
 * @returns {Promise}
 */
/* istanbul ignore next */
function call(path, options = {}) {
    path = (path[0] !== '/') ? '/' + path : path
    
    const currentUser = userManager.current,
        method = options.method.toLowerCase() || 'get',
        paramMark = path.indexOf('?') > -1 ? '&' : '?',
        parameters = paramMark + queryString.stringify(options.params),
        url = restUrl + path + parameters

    //console.log('rest', path, options)

    return new Promise((resolve, reject) => {
        request[method](url, {
            auth: {
                user: currentUser.username,
                pass: currentUser.password,
                sendImmediately: false
            },
            form: options.data
        }, (err, response, body) => {
            if (err) {
                console.log(err);
                return reject(err)
            }
            
            //console.log('status', response && response.statusCode)
            //console.log('body', body)

            if (response && response.statusCode) {
                if (response.statusCode >= 400 && response.statusCode < 600) {

                    // IBM BPM responds with a JSON error structure
                    return reject(parseJson(response, body) || response.statusMessage)
                }
            }
            
            resolve(parseJson(response, body))
        })
    })
}

function parseJson(response, body) {
    if (!response || !response.headers) return body
    
    /* istanbul ignore next */
    if (response.headers['content-type'] === 'application/json') {
        try {
            return JSON.parse(body)
        } catch (err) {
            throw err
        }
    }
    
    return body
}

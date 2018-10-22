const pause = require('./pause')

module.exports = waitCheck

/**
 * Runs a function repeatedly with a wait time until it returns a truthy value. That value is
 * returned.
 *
 * @param {function} fn - the checking function - return truthy inside the function to end
 * @param {number} interval - time in ms between calls to `fn`
 * @param {object}  [options]
 * @param {boolean}  [options.async] - `fn` is an async function
 * @param {boolean} [options.tailCall] - set to true if you do not want `fn` to be called
 *                                       immediately without waiting
 * @param {integer} [options.attempts=5] - number of times to run the `fn` check. Will reject if max
 *                                         attempts is reached
 * @returns {Promise<*>} - returns the truthy value from `fn`
 */
async function waitCheck(fn, interval = 1000, options) {
    return new Promise(async (resolve, reject) => {
        let res, attemptsRemain

        options = options || {
            attempts: 5
        }

        attemptsRemain = options.attempts || 5

        if (!options.tailCall) {
            res = options.async ? await fn() : fn()

            if (!!res) {
                return resolve(res)
            }
        }

        do {
            await pause(interval)

            res = options.async ? await fn() : fn()
            attemptsRemain--
        } while (!res && attemptsRemain > 0)

        if (attemptsRemain <= 0) {
            return reject(new Error('Ran out of attempts'))
        }

        resolve(res)
    })
}

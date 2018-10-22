module.exports = pause

/**
 * Async function to stop processing for a specified amount of time
 *
 * @param {number} ms - length of time in milliseconds to pause for
 * @returns {Promise<undefined>}
 */
async function pause(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}

module.exports = joinKeys

/**
 * Takes an object and joins the keys with an optional separator
 *
 * @param {object} partsObject - plain object
 * @param {string} [separator]
 * @param {string} [defaultValue] - if no keys or no object is supplied
 * @returns {string|undefined} - a string of joined keys
 */
function joinKeys(partsObject, separator = '|', defaultValue) {
    return (partsObject && Object.keys(partsObject).length) ? Object.keys(partsObject).join(separator) : defaultValue
}

module.exports.isBpmError = isBpmError
module.exports.cleanUpBpmObject = cleanUpBpmObject

/**
 *
 * @param {Object} err - any object that could be an error
 * @returns {boolean|string} - false returned if not 'an IBM BPM error' message
 */
function isBpmError(err) {
    if (!err) return false
    
    if (err.status === 'error' && err.Data) {
        const data = err.Data
        
        return data.errorMessage
    }
    
    return false
}

/**
 * Strips metadata from BPM objects and collapses TWList types into a normal array property
 *
 * @param {object} obj - the result of calling a BPM endpoint
 * @returns {*} - the original object with all @metadata property removed
 */
function cleanUpBpmObject(obj) {
    if (!obj) return obj
    
    if (typeof obj === 'object') {
    
        /* istanbul ignore next */
        if ('@metadata' in obj) {
            if ('items' in obj) {
                return obj.items.map(item => {
                    return cleanUpBpmObject(item)
                })
            }
    
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
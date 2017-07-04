const joinKeys = require('./join-keys')

describe('join-keys', () => {
    const anObject = {
        key1: 123,
        key2: 123,
    }
    
    it('is a method', () => {
        expect(joinKeys).toBeInstanceOf(Function)
    })
    
    it('uses pipe as the default delimiter', () => {
        expect(joinKeys(anObject)).toBe('key1|key2')
    })
    
    it('can specify alternate delimiter', () => {
        expect(joinKeys(anObject, ',,,')).toBe('key1,,,key2')
    })
    
    it('returns undefined by default if input is undefined or null', () => {
        expect(joinKeys(anObject.notAKey)).toBe(undefined)
        expect(joinKeys(null)).toBe(undefined)
    })
    
    it('returns undefined by default if input object has no keys', () => {
        expect(joinKeys({})).toBe(undefined)
    })
    
    it('can specify default return value if input object is undefined or has no keys', () => {
        expect(joinKeys({}, ',', 'obj has no keys')).toBe('obj has no keys')
    })
})

const { isBpmError, cleanUpBpmObject } = require('./bpm')
const sampleBpmError = require('../shared/tests/bpm-error.sample')
const { raw, clean } = require('../shared/tests/complex-object.sample')

describe(`Is BPM error - isBpmError`, () => {
    it(`returns false with falsey input`, () => {
        expect(isBpmError()).toBe(false)
        expect(isBpmError(null)).toBe(false)
        expect(isBpmError(undefined)).toBe(false)
    })
    
    it(`returns string error message extracted from BPM error`, () => {
        expect(isBpmError(sampleBpmError)).toMatch(/Runtime error/)
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
    
    it('cleans up complex objects', () => {
        expect(cleanUpBpmObject(raw)).toEqual(clean)
    })
})

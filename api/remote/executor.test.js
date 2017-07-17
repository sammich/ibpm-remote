jest.mock('request')

const request = require('request'),
    executor = require('./executor'),
    sampleBpmError = require('../../shared/tests/bpm-error.sample')

describe('executor', () => {
    it('is a function', () => {
        expect(executor).toBeInstanceOf(Function)
    })
    
    it('returns a promise', () => {
        request.__setRequestResponses(null,
            { statusCode: 200 },
            { data: { data: { jsonResult: JSON.stringify({ a: 1 }) } } }
        )
        
        expect(executor({ name: '1'}, {})).toBeInstanceOf(Promise)
    })
    
    it('returns body data inside data property', async () => {
        request.__setRequestResponses(null,
            { statusCode: 200 },
            { data: { data: { jsonResult: JSON.stringify({ a: 1 }) } } }
        )
        
        await expect(executor({ name: '1'})).resolves.toEqual({ a: 1 })
    })
    
    it(`rejects if error is returned from executed code`, async () => {
        request.__setRequestResponses(null,
            { statusCode: 200 },
            { data: { data: { errStr: ':sadface:' } } }
        )
    
        await expect(executor({ name: '1'})).rejects.toEqual(':sadface:')
    })
    
    it(`rejects if there is malformed JSON`, async () => {
        request.__setRequestResponses(null,
        { statusCode: 200 },
        { data: { data: { jsonResult: ':sadface:' } } }
        )
        
        await expect(executor({ name: '1' })).rejects.toContain('Error attempting to parse JSON')
    })
    
    it('rejects if no service selector given', async () => {
        await expect(executor()).rejects.toBeDefined()
    })
    
    it('rejects if no service name given', async () => {
        await expect(executor({})).rejects.toBeDefined()
    })
    
    it('rejects after integration error', async () => {
        request.__setRequestResponses(new Error('error'), {}, {})
        await expect(executor({ name: '1' })).rejects.toBeDefined()
        
        request.__setRequestResponses(null, { statusCode: 400 }, 'err400')
        await expect(executor({ name: '1' })).rejects.toBeDefined()
    
        request.__setRequestResponses(null, {
            statusCode: 400,
            headers: {
                'content-type': 'application/json'
            }
        }, JSON.stringify(sampleBpmError))
        await expect(executor({ name: '1' })).rejects.toEqual(sampleBpmError.Data.errorMessage)
    })
})

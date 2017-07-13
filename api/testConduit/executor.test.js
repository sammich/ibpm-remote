jest.mock('request')

const request = require('request'),
executor = require('./executor')

describe('executor', () => {
    it('is a function', () => {
        expect(executor).toBeInstanceOf(Function)
    })
    
    it('returns a promise', () => {
        expect(executor(1)).toBeInstanceOf(Promise)
    })
    
    it('returns body data inside data property', async () => {
        request.__setRequestResponses(null,
            { statusCode: 200 },
            { data: { data: { jsonResult: JSON.stringify({ a: 1 }) } } }
        )
        
        await expect(executor(1, {})).resolves.toEqual({ a: 1 })
    })
    
    it('rejects if no service ID given', async () => {
        await expect(executor()).rejects.toBeDefined()
    })
    
    it('rejects if no service ID given', async () => {
        await expect(executor('1')).rejects.toBeDefined()
    })
    
    it('rejects after integration error', async () => {
        request.__setRequestResponses(new Error('error'), {}, {})
        await expect(executor(1)).rejects.toBeDefined()
        
        request.__setRequestResponses(null, { statusCode: 400 }, 'err400')
        await expect(executor(1)).rejects.toBeDefined()
    })
})

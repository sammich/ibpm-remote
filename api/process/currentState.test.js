jest.mock('request')

const request = require('request'),
startProcess = require('./currentState')

describe('process.currentState', () => {
    it('is a function', () => {
        expect(startProcess).toBeInstanceOf(Function)
    })
    
    it('returns a promise', () => {
        expect(startProcess({})).toBeInstanceOf(Promise)
    })
    
    it('returns body data inside data property', async () => {
        request.__setRequestResponses(null, { statusCode: 200 }, { data: { foo: 'bar' }, data1: 'foo' })
        await expect(startProcess({})).resolves.toEqual({ foo: 'bar' })
    })
    
    it('rejects after internal error', async () => {
        request.__setRequestResponses(new Error('error'), {}, {})
        await expect(startProcess({})).rejects.toBeDefined()
        
        request.__setRequestResponses(null, { statusCode: 400 }, 'err400')
        await expect(startProcess({})).rejects.toBeDefined()
    })
})

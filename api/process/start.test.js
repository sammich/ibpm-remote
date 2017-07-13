jest.mock('request')

const request = require('request'),
    startProcess = require('./start')

describe('process.start', () => {
    it('is a function', () => {
        expect(startProcess).toBeInstanceOf(Function)
    })
    
    it('returns a promise', () => {
        expect(startProcess(1)).toBeInstanceOf(Promise)
    })
    
    it('returns body data inside data property', async () => {
        request.__setRequestResponses(null, { statusCode: 200 }, { data: { foo: 'bar' }, data1: 'foo' })
        await expect(startProcess(1)).resolves.toEqual({ foo: 'bar' })
    })
    
    it('rejects if no BPD ID given', async () => {
        await expect(startProcess()).rejects.toBeDefined()
    })
    
    it('rejects after integration error', async () => {
        request.__setRequestResponses(new Error('error'), {}, {})
        await expect(startProcess(1)).rejects.toBeDefined()
    
        request.__setRequestResponses(null, { statusCode: 400 }, 'err400')
        await expect(startProcess(1)).rejects.toBeDefined()
    })
})

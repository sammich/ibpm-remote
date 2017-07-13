jest.mock('request')

const request = require('request'),
start = require('./start')

describe('process.currentState', () => {
    it('is a function', () => {
        expect(start).toBeInstanceOf(Function)
    })
    
    it('returns a promise', () => {
        expect(start(1)).toBeInstanceOf(Promise)
    })
    
    it('returns body data inside data property', async () => {
        request.__setRequestResponses(null,
            { statusCode: 200 },
            { data: { data: { foo: 'bar' } }, data1: 'foo' }
        )
        await expect(start(1, {})).resolves.toEqual({ foo: 'bar' })
    })
    
    it('rejects if no service ID given', async () => {
        await expect(start()).rejects.toBeDefined()
    })
    
    it('rejects after integration error', async () => {
        request.__setRequestResponses(new Error('error'), {}, {})
        await expect(start(1)).rejects.toBeDefined()
        
        request.__setRequestResponses(null, { statusCode: 400 }, 'err400')
        await expect(start(1)).rejects.toBeDefined()
    })
})

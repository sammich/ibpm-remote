jest.mock('request')

const request = require('request'),
    currentState = require('./currentState')

describe('process.currentState', () => {
    it('is a function', () => {
        expect(currentState).toBeInstanceOf(Function)
    })
    
    it('returns a promise', () => {
        expect(currentState(1)).toBeInstanceOf(Promise)
    })
    
    it('returns body data inside data property', async () => {
        request.__setRequestResponses(null,
            { statusCode: 200 },
            { data: { foo: 'bar' }, data1: 'foo' }
        )

        expect(currentState(1, {})).resolves.toEqual({ foo: 'bar' })
    })
    
    it('rejects if no process ID given', async () => {
        await expect(currentState()).rejects.toBeDefined()
    })
    
    it('rejects after integration error', async () => {
        request.__setRequestResponses(new Error('error'), {}, {})
        await expect(currentState(1)).rejects.toBeDefined()
        
        request.__setRequestResponses(null, { statusCode: 400 }, 'err400')
        await expect(currentState(1)).rejects.toBeDefined()
    })
})

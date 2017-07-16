jest.mock('request')

const request = require('request'),
    evaluator = require('./evaluator')

describe('evaluator', () => {
    it('is a function', () => {
        expect(evaluator).toBeInstanceOf(Function)
    })
    
    it('returns a promise', () => {
        expect(evaluator(() => {})).toBeInstanceOf(Promise)
    })
    
    it('returns body data inside data property', async () => {
        request.__setRequestResponses(null,
            { statusCode: 200 },
            { data: { data: { retVal: 'foo' } } }
        )
        
        await expect(evaluator(() => {})).resolves.toEqual('foo')
    })
    
    it('rejects if no function given', async () => {
        await expect(evaluator()).rejects.toBeDefined()
        await expect(evaluator(1)).rejects.toBeDefined()
    })
    
    it('rejects after integration error', async () => {
        request.__setRequestResponses(new Error('error'), {}, {})
        await expect(evaluator(() => {})).rejects.toBeDefined()
        
        request.__setRequestResponses(null, { statusCode: 400 }, 'err400')
        await expect(evaluator(() => {})).rejects.toBeDefined()
    })
})

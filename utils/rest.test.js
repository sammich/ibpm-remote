jest.mock('request')

const request = require('request'),
    restClient = require('./rest')

describe('rest client', () => {
    const methods = ['get', 'post', 'put', 'del']
    
    it('implements get, post, put, delete convenience methods', () => {
        methods.forEach(method => {
            expect(restClient[method]).toBeInstanceOf(Function)
        })
    })
    
    it('each method return a promise', () => {
        beforeAll(() => {
            request.__setRequestResponses(null, {}, {})
        })
    
        methods.forEach(method => {
            expect(restClient[method]('')).toBeInstanceOf(Promise)
        })
    })
    
    it('json responses are pased to objects', () => {
        request.__setRequestResponses(null, {
            statusCode: 200
        }, JSON.stringify({ foo: 'bar' }))
        
        methods.forEach(method => {
            return expect(restClient[method]('')).resolves.toEqual(JSON.stringify({ foo: 'bar' }))
        })
    })
    
    it('json responses are pased to objects', () => {
        request.__setRequestResponses(null, {
            statusCode: 200,
            headers: {
                'content-type': 'application/json'
            }
        }, {
            foo: 'bar'
        })
        
        methods.forEach(method => {
            return expect(restClient[method]('')).resolves.toEqual({
                foo: 'bar'
            })
        })
    })
    
    it('request errors are rejected with the error', () => {
        request.__setRequestResponses(new Error('error'), {}, {})
    
        methods.forEach(method => {
            return expect(restClient[method]('')).rejects.toBeInstanceOf(Error)
        })
    })
    
    it('400-series status are rejected', () => {
        request.__setRequestResponses(null, { statusCode: 400 }, 'err400')
        methods.forEach(method => {
            return expect(restClient[method]('')).rejects.toBe('err400')
        })
    
        request.__setRequestResponses(null, { statusCode: 499 }, 'err499')
        methods.forEach(method => {
            return expect(restClient[method]('')).rejects.toBe('err499')
        })
    })
    
    it('400-series errors objects of type app/json are parsed to an object', () => {
        request.__setRequestResponses(null, {
            statusCode: 400,
            headers: {
                'content-type': 'application/json'
            }
        }, {
            foo: 'err'
        })
        
        methods.forEach(method => {
            return expect(restClient[method]('')).rejects.toEqual({
                foo: 'err'
            })
        })
    })
})

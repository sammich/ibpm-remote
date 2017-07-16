jest.unmock('request')

const start = require('./start')

const executorId = '1.6daf7ba7-34cf-4405-bd8c-9a8986eac8d9'

describe('process start', () => {
    it('call service', async () => {
        const resp = await start(executorId, {
            service: {
                name: 'Default System Service'
            }
        })
        
        expect(resp.jsonResult).toBeDefined()
    })
    
    it('call erroring service', async () => {
        const resp = await start(executorId, {
            service: {
                name: 'Test Service Error',
                appAcronym: 'RMTE'
            }
        })
        
        expect(resp.jsonResult).toBeNull()
        expect(resp.errStr).toBeDefined()
    })
})

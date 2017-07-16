jest.unmock('request')

const executor = require('./executor')

async function adder(a, b) {
    const result = await executor({
        name: 'Add Two Numbers',
        appAcronym: 'SCSB'
    }, {
        a,
        b
    })
    
    return result.total
}

describe('executor', () => {
    it('it works', async () => {
        let result = await adder(1, 2)
        
        expect(result).toBeDefined()
        expect(result).toBe(3)
    })
    
    it('adds two negatives', async () => {
        let result = await adder(-1, -2)
        
        expect(result).toBeDefined()
        expect(result).toBe(-3)
    })
    
    it('adds one negative, one positive', async () => {
        let result = await adder(1, -2)
        
        expect(result).toBeDefined()
        expect(result).toBe(-1)
    })
    
    it(`rejects on error output`, async () => {
        await expect(executor({
            service: {
                name: 'Test Service Error',
                appAcronym: 'RMTE'
            }
        })).rejects.toBeDefined()
    })
})

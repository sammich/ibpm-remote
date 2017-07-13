jest.unmock('request')

const executor = require('./executor')

async function adder(a, b) {
    const result = await executor('1.6daf7ba7-34cf-4405-bd8c-9a8986eac8d9', {
        name: 'Add Two Numbers',
        appAcronym: 'SCSB'
    }, {
        a,
        b
    })
    
    return result.total
}

describe('exectutor', () => {
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
})

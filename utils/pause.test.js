describe(`pause util`, () => {
    it('pauses for approximately the number of input ms', () => {
        jest.useFakeTimers()
        
        const pause = require('./pause')
        pause(444)
        
        expect(setTimeout.mock.calls.length).toBe(1);
        expect(setTimeout.mock.calls[0][1]).toBe(444);
    })
    
    it(`resolves after the fixed time`, async () => {
        const pause = require('./pause')
        jest.useRealTimers()
        await expect(pause(444)).resolves.toBeUndefined()
    })
})

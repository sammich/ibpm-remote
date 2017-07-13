jest.useFakeTimers()

describe(`pause util`, () => {
    it('pauses for approximately the number of input ms', () => {
        const pause = require('./pause')
        pause(1234)
        
        expect(setTimeout.mock.calls.length).toBe(1);
        expect(setTimeout.mock.calls[0][1]).toBe(1234);
    })
})

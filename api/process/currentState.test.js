const currentState = require('./currentState')

describe('process.currentState', () => {
    it('does nothing', () => {
        expect(1).toBe(1)
    })
})
/*

;(async () => {
    try {
        let res = await currentState(404)
        
        console.log('Current State of instance', res)
    } catch (err) {
        console.error('Error getting current process', err)
    }
})()
*/

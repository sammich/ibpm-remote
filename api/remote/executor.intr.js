jest.unmock('request')

const executor = require('./executor')

async function adder(a, b) {
    const result = await executor({
        name: 'Add Two Numbers',
        appAcronym: 'RMTETT'
    }, {
        a,
        b
    })
    
    return result.total
}

async function complexInputTest() {
    return await executor({
        name: 'Test Executor Target',
        appAcronym: 'RMTE'
    }, {
        nvp: {
            type: 'NameValuePair',
            data: [{
                name: '1',
                value: '2'
            }, {
                name: '3',
                value: '4'
            }]
        },
        str: 'str',
        date: new Date(2017, 2, 2, 2, 2, 2, 222),
        someInts: {
            type: 'Integer',
            data: [1,2,3]
        },
        theComplex: {
            type: 'TestParentComplex',
            data: {
                deeper: [{
                    nvp: {
                        name: '5',
                        value: '6'
                    },
                    d: new Date(2017, 2, 2, 2, 2, 2, 222)
                }]
            }
        }
    })
}

async function remoteConstructorTest() {
    return await executor({
        name: 'Complex Input',
        appAcronym: 'RMTETT'
    }, {
        obj: {
            type: 'RemoteObject',
            data: {
                str: '1',
            }
        },
        objs: {
            type: 'RemoteObject',
            data: [{
                str: '1',
            }, {
                str: '2'
            }]
        }
    })
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
    
    it(`works`, async () => {
        const result = await complexInputTest()
        
        // restores JSON date strings to dates
        expect(result.date.getTime()).toBe(new Date(2017, 2, 2, 2, 2, 2, 222).getTime())
        expect(result).toEqual({
            nvp: [{
                name: '1',
                value: '2'
            }, {
                name: '3',
                value: '4'
            }],
            str: 'str',
            date: new Date(2017, 2, 2, 2, 2, 2, 222),
            someInts: [1,2,3],
            theComplex: {
                deeper: [{
                    nvp: {
                        name: '5',
                        value: '6'
                    },
                    d: new Date(2017, 2, 2, 2, 2, 2, 222)
                }]
            }
        })
    })
    
    it(`Remote Constructor works`, async () => {
        const result = await remoteConstructorTest()
        
        expect(result.obj).toEqual({
            str: '1',
        })
    
        expect(result.objs).toEqual([{
            str: '1',
        }, {
            str: '2',
        }])
    });
    
    it(`rejects on error output`, async () => {
        await expect(executor({
            service: {
                name: 'Test Service Error',
                appAcronym: 'RMTE'
            }
        })).rejects.toBeDefined()
    })
})

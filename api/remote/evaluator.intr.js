jest.unmock('request')

const evaluator = require('./evaluator')

function test1() {
    retVal = 1 + 2
}

function test2() {
    var a = new tw.object.NameValuePair()
    a.name = 'myName'
    a.value = 'myValue'
    
    retVal = a
}

function test2Throws() {
    throw 'fubar'
}

function test3Complex() {
    var a = new tw.object.TestParentComplex()
    a.integer = 123
    a.deeper = new tw.object.listOf.TestChildComplex()
    a.deeper[0] = new tw.object.TestChildComplex()
    a.deeper[0].myStrings = new tw.object.listOf.String()
    a.deeper[0].myStrings[0] = 'asd';
    a.deeper[0].myDates = new tw.object.listOf.Date()
    
    var d = new Date('2017-07-16T06:41:01.153Z')
    
    a.deeper[0].myDates[0] = d
    a.deeper[0].myInts = new tw.object.listOf.Integer()
    a.deeper[0].myInts[0] = 1
    a.deeper[0].myInts[1] = 2
    a.deeper[0].myInts[2] = 3
    a.deeper[0].myDecimals = new tw.object.listOf.Decimal()
    a.deeper[0].myDecimals[0] = 1.23
    a.deeper[0].myBools = new tw.object.listOf.Boolean()
    a.deeper[0].myBools[0] = true
    
    retVal = a
}

describe('executor', () => {
    it('it works', async () => {
        let result = await evaluator(test1)
        
        expect(result).toEqual(3)
    })
    
    it('unwraps results one level of complex result', async () => {
        let result = await evaluator(test2)
        
        expect(result).toEqual({ name: 'myName', value: 'myValue' })
    })
    
    it('unwraps results multiple level of complex results', async () => {
        let result = await evaluator(test3Complex)
        
        expect(result).toEqual({
            integer: 123,
            "deeper": [
                {
                    "myBools": [
                        true
                    ],
                    "myDates": [
                        '2017-07-16T06:41:01Z'
                    ],
                    "myDecimals": [
                        1.23
                    ],
                    "myInts": [
                        1,
                        2,
                        3
                    ],
                    "myStrings": [
                        "asd"
                    ]
                }
            ]
        })
    })
    
    it('throws error', async () => {
        await expect(evaluator(test2Throws)).rejects.toBeDefined()
    })
    
    it('throws error', async () => {
        await expect(evaluator(test2Throws)).rejects.toBeDefined()
    })
})

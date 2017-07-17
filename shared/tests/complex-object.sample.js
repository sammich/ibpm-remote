module.exports.clean = {
    integer: 123,
    'deeper': [{
        'myBools': [true],
        'myDates': ['2017-07-16T06:41:01Z'],
        'myDecimals': [1.23],
        'myInts': [1, 2, 3],
        'myStrings': ['asd']
    }]
}

module.exports.raw = {
    'deeper': {
        'selected': [],
        'items': [{
            'myInts': {
                'selected': [],
                'items': [1, 2, 3],
                '@metadata': {
                    'objectID': '4959ab0c-52d9-4075-97bb-84492d73b816',
                    'dirty': true,
                    'invalid': false,
                    'shared': false
                }
            },
            'myBools': {
                'selected': [],
                'items': [true],
                '@metadata': {
                    'objectID': '67da4478-a4aa-4e86-b15f-cd6873751d91',
                    'dirty': true,
                    'invalid': false,
                    'shared': false
                }
            },
            'myDecimals': {
                'selected': [],
                'items': [1.23],
                '@metadata': {
                    'objectID': '965f82ff-a8d3-4abe-923f-e1204e7e28d2',
                    'dirty': true,
                    'invalid': false,
                    'shared': false
                }
            },
            'myStrings': {
                'selected': [],
                'items': ['asd'],
                '@metadata': {
                    'objectID': '4773ca91-1ca0-4e29-a2f4-0ea97d2f9285',
                    'dirty': true,
                    'invalid': false,
                    'shared': false
                }
            },
            'myDates': {
                'selected': [],
                'items': ['2017-07-16T06:41:01Z'],
                '@metadata': {
                    'objectID': '8bc6e25b-24da-46ed-9619-9e01e3527704',
                    'dirty': true,
                    'invalid': false,
                    'shared': false
                }
            },
            '@metadata': {
                'objectID': 'bd042f7c-2492-4eb6-863c-bf76d624310c',
                'dirty': true,
                'invalid': false,
                'shared': false,
                'rootVersionContextID': '2064.08395dd3-d37c-484f-bfe4-b4a4352c97aaT',
                'className': 'TestChildComplex'
            }
        }],
        '@metadata': {
            'objectID': '9122610a-5181-4f5e-af93-a27170149c6e',
            'dirty': true,
            'invalid': false,
            'shared': false
        }
    },
    'integer': 123,
    '@metadata': {
        'objectID': '7e5a423a-433a-47fa-869b-570aa9d31bf1',
        'dirty': true,
        'invalid': false,
        'shared': false,
        'rootVersionContextID': '2064.caa1df41-2205-45a6-9670-bf3dee590684T',
        'className': 'TestParentComplex'
    }
}

const soap = require('soap')

const sampointUrl = 'https://vm1:9443/teamworks/webservices/SCSB/SamPoint.tws?WSDL'

soap.createClient(sampointUrl, {
    forceSoap12Headers: true
}, (err, client) => {
    if (err) {
        return console.error(err)
    }
    
    client.adder({
        a: 1,
        b: 2
    }, (err, result) => {
        if (err) {
            return console.error(err)
        }
        
        console.log(result);
    })
    
    client.swap({
        pair: {
            name: 'name',
            value: 'value'
        }
    }, (err, result) => {
        if (err) {
            return console.error(err)
        }
        
        console.log(result);
    })
})

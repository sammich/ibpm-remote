process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

const fs = require('fs'),
    toc = require('markdown-toc'),
    bpmRestCaller = require('../utils/rest').get
    
;(async function init() {
    const apiDocs = await bpmRestCaller('apiDetails')
    
    generate(apiDocs)
})()

let md = ''
function wr(text) {
    text = text || ''
    md += text + '\n'
}

async function generate(apiDocs) {
    apiDocs.categories.map(genGroup)
    
    const pre = '# ' + apiDocs.name + '\n' + apiDocs.description + '\n\n'
    const systems = await bpmRestCaller('systems')
    
    fs.writeFileSync(`./generated/bpm-api-docs-${systems.data.systems[0].version}.json`, JSON.stringify(apiDocs, null, 2))
    fs.writeFileSync(`./generated/bpm-api-docs-${systems.data.systems[0].version}.md`, pre + toc(md).content + '\n\n' + md)
}

//

function genGroup(group) {
    console.log('\n' + group.name)
    
    wr('## ' + group.name)
    wr(group.description)
    group.calls.map(genCall)
}

function genCall(call) {
    wr('### ' + call.name)
    wr()
    wr('>' + call.description)
    wr()
    wr('**Path**')
    wr('\n    ' + call.path)
    wr()
    
    let parts = ''
    if (call.parts) {
        parts = call.parts.map(part => {
            if (typeof part === 'string') {
                return '`'+ part +'`'
            } else {
                return '`'+ part.name +'` (v' + part.version + ')'
            }
        }).join(', ')
    }
    
    wr('|Methods|Secure|Public|Parts|')
    wr('|:--- |:---:|:---:|:--- |')
    wr('|`' + call.method.join('`, `') + '`' +
        '|' + (call.secure ? 'yes' : 'no') +
        '|' + (call.public ? 'yes' : 'no') +
        '|' + parts + '|'
    )
    
    //console.log('\n    ---')
    //console.log('    '+call.method.join('|'), call.path)
    const methods = call.method.join('|')
    console.log('\t\t' + methods + ' '.repeat(12-methods.length), call.name + ' '.repeat(60-call.name.length), call.path.replace('/rest/bpm/wle/v1', ''))
    //parts && console.log('        Parts: ['+call.parts.join('|')+']');
    //call.options && console.log('        Options:')
    
    wr('\n\n**Options**\n')
    wr('|Name|Var|Type|Required?|Description|')
    wr('|:--- | --- |:--- |:---:|:--- |')
    
    call.options && call.options.map(genCallOptions)
    wr()
    wr('---')
    wr()
    
    // unused fields:
    // id
    // wlFunction
}

function genCallOptions(option) {
    option.type = option.type.toLowerCase()
    
    //console.log('        - ' + option.parameter);
    
    let listTypeHtml = ''
    if (option.type === 'list') {
        listTypeHtml += '<ul><li>`'
        listTypeHtml += option.values.join('`</li><li>`')
        listTypeHtml += '`</li></ul>'
    }
    
    wr('|' + option.name +
        '|`' + option.parameter + '`' +
        '|`' + option.type + '`' + listTypeHtml +
        '|' + (option.required ? 'yes' : 'no') +
        '|' + option.description + '|'
    )
    
    // not supported fields, for now
    // id
    // groups
    
    // don't know what this setting means
    // clonable
    
}
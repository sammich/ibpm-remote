const moment = require('moment')
const { post } = require('../../utils/rest')

const path = '/process?action=sendMessage'

module.exports = exec

/**
 * Adds a message to the event manager
 *
 * @param {object} options
 * @param {string} [options.snapshotId] - Snapshot ID for a particular process. Begins with `2064.xxx....`
 * @param {string} [options.branchId] - The branch ID. Begins with `2063.xxx...`
 * @param {string} [options.processAppId] - The process app ID begins with `2066.xxx`. You can find the process app ID by selecting Other > Retrieve Process Applications.
 * @param {object} [options.params] - An object containing inputs to start the process
 * @param {string} [options.mode] - A string indicating whether the process should be started in run or debug mode
 */
async function exec(options) {
    if (!options) {
        throw new Error('Options must be provided')
    }
    
    const snapshot = options.snapshot ? `snapshot="${options.snapshot}"` : ''
        message = `<eventmsg>
  <event processApp="${options.app}" ${snapshot} ucaname="${options.uca}">${options.event}</event>
  <parameters>
${buildPayload(options.data)}
  </parameters>
</eventmsg>`
    
    const response = await post(`/process/${instanceId}?action=delete`, {
        data: { message }
    })
    
    console.log(response);
    
    // TODO check response value for success
    
    if (!result) {
        throw new Error('No data received from send message')
    }
}

function buildPayload(data) {
    return Object.keys(data).map(key => {
        const xmlValue = formatValue(data[key], 8)
        
        return `    <parameter>
      <key>${key}</key>
      <value>${xmlValue}</value>
    </parameter>`
    }).join('\n')
    
    function formatValue(value, indent) {
        if (value instanceof Date) {
            return moment(value).format('YYYY/MM/DD hh:mm:ss.S [GMT]Z')
        }
        
        if (typeof value !== 'object') {
            return value
        }
        
        const padding = ' '.repeat(indent),
            paddingm2 = ' '.repeat(indent - 2)
        
        if (Array.isArray(value)) {
            return `\n${padding}<item>` +
                value.map(item =>
                    formatValue(item, indent + 2)
                ).join(`</item>\n${padding}<item>`) +
                `</item>\n${paddingm2}`
        } else {
            return `\n${padding}` +
                Object.keys(value).map(key =>
                    `<${key}>${formatValue(value[key], indent + 2)}</${key}>`
                ).join(`\n${padding}`) +
                `\b${paddingm2}`
        }
    }
}

twsutil = (function () {
    return {
        exec: exec,

        col: col,
        colbd: colbd,
        cond: cond,
        order: order
    }

    /**
     * Convenience column definition builder.
     *
     * @param {TWSearchColumn} col - what column to condition with
     * @param {TWSearchCondition.Operations} operation
     * @returns {TWSearchColumn}
     */
    function col(type, name) {
        var col = new TWSearchColumn()
        col.type = type
        col.name = name

        return col
    }

    function colbd(name) {
        return col(TWSearchColumn.Types.BusinessData, name)
    }

    /**
     * Convenience condition definition builder.
     *
     * @param {TWSearchColumn} col - what column to condition with
     * @param {TWSearchCondition.Operations} operation
     * @returns {TWSearchCondition}
     */
    function cond(col, operation, val) {
        var cond = new TWSearchCondition()
        cond.column = col
        cond.operator = operation
        cond.value = val

        return cond
    }

    /**
     * Convenience order definition builder.
     *
     * @param {TWSearchColumn} col - what column to order with
     * @param {TWSearchOrdering.Orders|boolean} [dir] - defaults to ascending order. If bool given, true=ascending, otherwise
     *                                           maps the actual TWSearchOrdering object
     * @returns {TWSearchOrdering}
     */
    function order(col, dir) {
        var ord = new TWSearchOrdering()
        ord.column = col

        if (typeof dir === 'boolean') {
            ord.order = dir ? TWSearchOrdering.Orders.Ascending : TWSearchOrdering.Orders.Descending
        } else if (!dir) {
            ord.order = TWSearchOrdering.Orders.Ascending
        } else {
            ord.order = dir
        }

        return ord
    }

    /**
     * Executed for each for in the TWSearch results
     *
     * @callback rowCallback
     * @param {*} columns - array of values in order of search definition
     */

    /**
     * More compact way of using the TWSearch API.
     *
     * Result columns are ordered in this order:
     *  - options.columns
     *  - options.businessData
     *
     * @param options
     * @param [options.columns] - array of TWSearchColumn
     * @param [options.conditions] - array of TWSearchCondition
     * @param [options.orderBy] - array of TWSearchOrdering
     * @param {string[]} options.businessData - strings matching business data columns
     * @param {string} [options.matchProcess] - find tasks matching this process
     * @param {boolean} [options.byTask=true] - results groups by task or process instance
     * @param {rowCallback} rowCallback - is called for every found row
     */
    function exec(options, rowCallback) {
        options = options || {}

        var search = new TWSearch(),

            // cannot assign an array to columns|conditions|orderBy and push on to it
            // must populate array then assign
            columns = options.columns || [],
            conditions = options.conditions || [],
            orderBy = options.orderBy || [],

            processName,
            processStatus = col(TWSearchColumn.Types.ProcessInstance, TWSearchColumn.ProcessInstanceColumns.Status),
            results

        conditions.push(cond(processStatus, TWSearchCondition.Operations.Equals, 'Active'))

        if (options.businessData) {
            options.businessData.forEach(function (col) {
                columns.push(colbd(col))
            })
        }

        if (options.matchProcess) {
            processName = col(TWSearchColumn.Types.Process, TWSearchColumn.ProcessColumns.Name)

            conditions.push(cond(processName, TWSearchCondition.Operations.Equals, options.matchProcess))
        }

        search.organizedBy = options.byTask ? TWSearch.OrganizeByTypes.Task : TWSearch.OrganizeByTypes.ProcessInstance

        search.columns = columns
        search.conditions = conditions
        search.orderBy = orderBy

        results = search.execute()

        if (!results.rows) {
            return
        }

        return results.rows.forEach(function (row) {
            rowCallback(row.values)
        })
    }
})()

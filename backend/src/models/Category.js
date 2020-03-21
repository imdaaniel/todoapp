const functions = require('../helpers/DBHelper')

module.exports = {
    listCategories() {
        return functions.db_query(`
            SELECT
                c.id,
                c.titulo
            FROM
                categoria c
        `)
    },

    async createCategory(titulo) {
        await functions.db_query(`
            INSERT INTO
                categoria
            VALUES
                ('${titulo}')
        `)

        return functions.db_query(`
            SELECT
                MAX(c.id) last_id
            FROM
                categoria c
        `)
    },

    async dropCategory(id) {
        await functions.db_query(`
            DELETE FROM
                todo
            WHERE
                categoria = ${id}
        `)

        return functions.db_query(`
            DELETE FROM
                categoria
            WHERE
                id = ${id}
        `)
    }
}
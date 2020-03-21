const functions = require('../helpers/DBHelper')

module.exports = {
    listTodos() {
        return functions.db_query(`
            SELECT
                t.id,
                t.titulo,
                c.titulo categoria
            FROM
                todo t
            INNER JOIN
                categoria c ON t.categoria = c.id
        `)
    },

    async createTodo(titulo, categoria) {
        await functions.db_query(`
            INSERT INTO
                todo
            VALUES
                ('${titulo}', '${categoria}')
        `)

        return functions.db_query(`
            SELECT
                MAX(t.id) last_id
            FROM
                todo t
        `)
    },

    async dropTodo(id) {
        return functions.db_query(`
            DELETE FROM
                todo
            WHERE
                id = ${id}
        `)
    }
}
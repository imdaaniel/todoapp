module.exports = {
    /**
     * Executa queries no banco de dados
     * @param {string} query A query sql
     */
    db_query(query) {
        return global.conn
            .request()
            .query(query)
    }
}
const Todo = require('../models/Todo')

module.exports = {
    async index(req, res) {
        todos = await Todo.listTodos()

        return res.json(todos.recordset)
    },

    async store(req, res) {
        const { titulo, categoria } = req.body;
        idTodo = await Todo.createTodo(titulo, categoria)

        return res.json(idTodo.recordset)
    },

    async drop(req, res) {
        const { id, } = req.params;
        await Todo.dropTodo(id);

        return res.json({
            message: "Success"
        })
    }
}
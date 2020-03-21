const express = require('express')

const TodoController = require('./controllers/TodoController')
const CategoryController = require('./controllers/CategoryController')

const routes = express.Router()

routes.get('/todos', TodoController.index)
routes.post('/todos', TodoController.store)
routes.delete('/todos/:id', TodoController.drop)

routes.get('/categories', CategoryController.index)
routes.post('/categories', CategoryController.store)
routes.delete('/categories/:id', CategoryController.drop)

module.exports = routes
const express = require('express')
const sql = require('mssql')
const cors = require('cors')

const routes = require('./routes')

const server = express()

const connStr = 'Server=localhost;Database=desafio;User Id=sa;Password=Meifacil@2019'
sql.connect(connStr)
    .then(conn => global.conn = conn)
    .catch(err => console.log(`Ocorreu um erro na conexão com o banco de dados! ${err}`))

server.use(cors())
server.use(express.json())
server.use(routes)

server.listen(888)
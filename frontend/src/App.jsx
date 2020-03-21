import React, { Component } from 'react'
import Axios from 'axios'
import './App.css'

import { Container, Jumbotron, Form, InputGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

import MyButton from './MyButton'
import MyList from './MyList'
import MySelect from './MySelect'

class App extends Component {
  url = `http://${window.location.hostname}:888`
  state = {
    todo_text: '',
    todos: [],
    selected_category: 0,
    category_text: '',
    categories: []
  }
  addTodo = () => {
    let todoTitle = this.state.todo_text.trim()
    let todoCategory = this.state.selected_category

    if (todoTitle.length > 0 && todoCategory > 0) {
      Axios.post(`${this.url}/todos`, {
        titulo: todoTitle,
        categoria: todoCategory
      }).then(response => {
        let dados = response.data
        console.log(dados.reduce(value => value))

        this.loadTodoItems()

        this.setState({
          todo_text: ''
        })
      })
    } else {
      alert('Preencha corretamente os campos do TODO')
    }
  }
  addCategory = () => {
    let categoryTitle = this.state.category_text.trim()

    if (categoryTitle.length > 0) {
      Axios.post(`${this.url}/categories`, {
        titulo: categoryTitle
      }).then(response => {
        let dados = response.data
        console.log(dados.reduce(value => value))

        this.loadCategoryItems()

        this.setState({
          category_text: ''
        })
      })
    } else {
      alert('Preencha corretamente o título da categoria')
    }
  }
  removeTodoItem = (item) => {
    if (global.confirm('Tem certeza que deseja excluir esse item?')) {
      Axios.delete(`${this.url}/todos/${item}`).then(response => this.loadTodoItems())
    }
  }
  removeCategoryItem = (item) => {
    if (global.confirm('Tem certeza que deseja excluir essa categoria?\n(Se houverem todos nela, serão excluídos PERNAMENTEMENTE!)')) {
      Axios.delete(`${this.url}/categories/${item}`).then(response => this.load())
    }
  }
  loadTodoItems = () => {
    Axios.get(`${this.url}/todos`).then(response => {
      let dados = response.data
      this.setState({
        todos: dados
      })
    })
  }
  loadCategoryItems = () => {
    Axios.get(`${this.url}/categories`).then(response => {
      let dados = response.data
      this.setState({
        categories: dados,
        selected_category: (dados.length > 0) ? dados[0].id : 0
      })
    })
  }
  handleTodoChange = e => {
    this.setState({
      todo_text: e.target.value
    })
  }
  handleCategoryChange = e => {
    this.setState({
      category_text: e.target.value
    })
  }
  handleSelectChange = e => {
    this.setState({
      selected_category: e.target.value
    })
  }
  componentDidMount() {
    this.load()
  }
  load() {
    this.loadTodoItems()
    this.loadCategoryItems()
  }
  render() {
    return <>
      <Container>
        <Jumbotron>
          <h1>TODO App</h1>
        </Jumbotron>

        <h3>Categorias</h3>
        <Form>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Ex.: Trabalho"
              value={this.state.category_text}
              maxLength="50"
              onChange={this.handleCategoryChange}
            />
            <MyButton value="Adicionar" onClick={this.addCategory} />
          </InputGroup>
        </Form>

        <MyList entries={this.state.categories} removeItem={this.removeCategoryItem} />
        
        <br />
        <br />
        
        <h3>TODO</h3>
        <Form>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Ex.: Terminar o desafio meifacil"
              value={this.state.todo_text}
              maxLength="50"
              onChange={this.handleTodoChange}
            />
            <MySelect entries={this.state.categories} change={this.handleSelectChange} />
            <MyButton value="Adicionar" onClick={this.addTodo} />
          </InputGroup>
        </Form>

        <MyList entries={this.state.todos} removeItem={this.removeTodoItem} />
      </Container>
    </>
  }
}

export default App
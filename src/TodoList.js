import React, { Component } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
    this.displayTodos = this.displayTodos.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }

  addTodo(todo) {
    this.setState(st => ({ todos: [...st.todos, todo] }));
  }

  removeTodo(id) {
    this.setState(st => ({ todos: st.todos.filter(t => t.id !== id) }));
  }

  updateTodo(id, newData) {
    const newTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, data: newData };
      }
      return todo;
    });
    this.setState({ todos: newTodos });
  }

  displayTodos() {
    return this.state.todos.map(todo => (
      <Todo key={todo.id} todo={todo} removeTodo={this.removeTodo} updateTodo={this.updateTodo} />
    ));
  }

  render() {
    return (
      <div className='TodoList'>
        <h1 className='TodoList-Title'>
          Todo List!
          <span>A Simple React Todo List App.</span>
        </h1>
        <div className='TodoList-Todos'>{this.displayTodos()}</div>
        <TodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default TodoList;

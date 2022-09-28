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
  }

  addTodo(todo) {
    this.setState(st => ({ todos: [...st.todos, todo] }));
  }

  displayTodos() {
    return this.state.todos.map(todo => <Todo key={todo.id} todo={todo} />);
  }

  render() {
    return (
      <div className='TodoList'>
        <h1 className='TodoList-Title'>Todo List!</h1>
        <p>A Simple React Todo List App.</p>
        <hr />
        <div>{this.displayTodos()}</div>
        <TodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default TodoList;

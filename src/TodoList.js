import React, { Component } from 'react';
import TodoForm from './TodoForm';

import './TodoList.css';

class TodoList extends Component {
  render() {
    return (
      <div className='TodoList'>
        <h1 className='TodoList-Title'>Todo List!</h1>
        <p>A Simple React Todo List App.</p>
        <hr />
        <div>todo items</div>
        <TodoForm />
      </div>
    );
  }
}

export default TodoList;

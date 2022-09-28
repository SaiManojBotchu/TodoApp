import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
  }

  handleRemoveTodo() {
    this.props.removeTodo(this.props.todo.id);
  }

  render() {
    const { todo } = this.props;
    return (
      <div className='Todo'>
        <p>{todo.data}</p>
        <div className='Todo-Buttons'>
          {/* <button type='button' onClick=''>
            ed
          </button> */}
          <button type='button' onClick={this.handleRemoveTodo}>
            del
          </button>
        </div>
      </div>
    );
  }
}

export default Todo;

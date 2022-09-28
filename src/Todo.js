import React, { Component } from 'react';

class Todo extends Component {
  render() {
    return <div>{this.props.todo.data}</div>;
  }
}

export default Todo;

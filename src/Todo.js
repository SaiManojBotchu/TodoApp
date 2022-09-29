import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      data: this.props.todo.data
    };
    this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.updateTodo(this.props.todo.id, this.state.data);
    this.setState({ isEditing: false });
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleRemoveTodo() {
    this.props.removeTodo(this.props.todo.id);
  }

  handleUpdate() {
    this.setState(st => ({ isEditing: !st.isEditing }));
  }

  render() {
    const { todo } = this.props;
    let body;
    if (this.state.isEditing) {
      body = (
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='data' value={this.state.data} onChange={this.handleChange} />
          <button type='submit'>Save</button>
        </form>
      );
    } else {
      body = (
        <div>
          <p>{todo.data}</p>
          <div className='Todo-Buttons'>
            <button type='button' onClick={this.handleUpdate}>
              ed
            </button>
            <button type='button' onClick={this.handleRemoveTodo}>
              del
            </button>
          </div>
        </div>
      );
    }
    return <div className='Todo'>{body}</div>;
  }
}

export default Todo;

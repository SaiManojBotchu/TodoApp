import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      data: this.props.todo.data,
      isCompleted: false
    };
    this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.hanldeToggle = this.hanldeToggle.bind(this);
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

  hanldeToggle() {
    this.setState(st => ({ isCompleted: !st.isCompleted }));
  }

  render() {
    const { todo } = this.props;
    let body;
    if (this.state.isEditing) {
      body = (
        <div className='Todo'>
          <form className='Todo-edit-form' onSubmit={this.handleSubmit}>
            <input type='text' name='data' value={this.state.data} onChange={this.handleChange} />
            <button type='submit'>Save</button>
          </form>
        </div>
      );
    } else {
      body = (
        <div className='Todo'>
          <li
            className={this.state.isCompleted ? 'Todo-data completed' : 'Todo-data'}
            onClick={this.hanldeToggle}>
            {todo.data}
          </li>
          <div className='Todo-buttons'>
            <button onClick={this.handleUpdate}>
              <i className='fas fa-pen' />
            </button>
            <button onClick={this.handleRemoveTodo}>
              <i className='fas fa-trash' />
            </button>
          </div>
        </div>
      );
    }
    return body;
  }
}

export default Todo;

import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import './TodoForm.css';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { data: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const newTodo = { ...this.state, id: uuid() };
    this.props.addTodo(newTodo);
    this.setState({ data: '' });
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    return (
      <form className='TodoForm' onSubmit={this.handleSubmit}>
        <label htmlFor='todo'>New Todo</label>
        <br />
        <input
          type='text'
          id='todo'
          name='data'
          placeholder='New Todo'
          value={this.state.data}
          onChange={this.handleChange}
        />
        <button type='submit'>ADD TODO</button>
      </form>
    );
  }
}

export default TodoForm;

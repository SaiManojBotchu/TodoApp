import React, { Component } from 'react';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='todo'>New Todo</label>
        <br />
        <input
          type='text'
          id='todo'
          name='todo'
          placeholder='New Todo'
          value=''
          onChange={this.handleChange}
        />
        <button type='submit'>ADD TODO</button>
      </form>
    );
  }
}

export default TodoForm;

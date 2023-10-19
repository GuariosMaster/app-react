import React, { Component } from 'react';

class TaskAdder extends Component {
    constructor(props) {
      super(props);
      this.state = { text: '' };
    }
  
    handleAdd = () => {
      this.props.onAdd(this.state.text);
      this.setState({ text: '' });
    };
  
    render() {
      return (
        <div>
          <input
            type="text"
            className="form-control"
            value={this.state.text}
            onChange={(e) => this.setState({ text: e.target.value })}
          />
          <button className="btn btn-success" onClick={this.handleAdd}>
            Agregar
          </button>
        </div>
      );
    }
  }

  export default TaskAdder;
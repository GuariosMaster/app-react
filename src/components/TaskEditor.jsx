import React, { Component } from 'react';

class TaskEditor extends Component {
    constructor(props) {
      super(props);
      this.state = { text: props.task.text };
    }
  
    handleUpdate = () => {
      this.props.onUpdate({ ...this.props.task, text: this.state.text });
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
          <button className="btn btn-primary" onClick={this.handleUpdate}>
            Actualizar
          </button>
          <button className="btn btn-secondary" onClick={this.props.onCancel}>
            Cancelar
          </button>
        </div>
      );
    }
  }

  export default TaskEditor;
import React, { Component } from 'react';

class TaskItem extends Component {
    render() {
      const { task, onEdit, onDelete } = this.props;
  
      return (
        <li>
          {task.text}
          <button onClick={() => onEdit(task)}>Editar</button>
          <button onClick={() => onDelete(task.id)}>Eliminar</button>
        </li>
      );
    }
  }

  export default TaskItem;
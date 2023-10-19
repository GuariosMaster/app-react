import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {
    render() {
      const { tasks, onEdit, onDelete } = this.props;
  
      return (
        <ul className="list-group">
          {tasks.map((task) => (
            <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
              {task.text}
              <div>
                <button className="btn btn-primary btn-sm" onClick={() => onEdit(task)}>
                  Editar
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => onDelete(task.id)}>
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      );
    }
}

export default TaskList;
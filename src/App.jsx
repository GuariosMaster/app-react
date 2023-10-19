import React, { Component } from 'react';
import TaskList from './components/TaskList';
import TaskEditor from './components/TaskEditor';
import TaskAdder from './components/TaskAdder';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Aside from './components/Aside';


class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        tasks: [
          { id: 1, text: 'Tarea 1' },
          { id: 2, text: 'Tarea 2' },
        ],
        editingTask: null,
      };
    }
  
    handleEdit = (task) => {
      this.setState({ editingTask: task });
    };
  
    handleUpdate = (updatedTask) => {
      this.setState((prevState) => ({
        tasks: prevState.tasks.map((task) =>
          task.id === updatedTask.id ? updatedTask : task
        ),
        editingTask: null,
      }));
    };
  
    handleDelete = (taskId) => {
      this.setState((prevState) => ({
        tasks: prevState.tasks.filter((task) => task.id !== taskId),
      }));
    };
  
    handleAdd = (text) => {
      const newId = this.state.tasks.length + 1;
      const newTask = { id: newId, text };
      this.setState((prevState) => ({ tasks: [...prevState.tasks, newTask] }));
    };
    

  render() {
    return (
        
        
      <div className="d-flex flex-column justify-content-between" style={{ minHeight: '100vh' }}>
        <div className="app">
            <header className="navbar">
                <NavBar />
            </header>
            <aside className="sidebar">
                <Aside />
            </aside>
            <main className="content">
                <h1 className="text-center mt-5">Administración de Tareas</h1>
                    <div className='col'>

                        <h1>Lista de Tareas</h1>
                        <div>
                            <TaskList
                            tasks={this.state.tasks}
                            onEdit={this.handleEdit}
                            onDelete={this.handleDelete}
                            />
                            {this.state.editingTask && (
                            <TaskEditor
                                task={this.state.editingTask}
                                onUpdate={this.handleUpdate}
                                onCancel={() => this.setState({ editingTask: null })}
                            />
                            )}
                            <TaskAdder onAdd={this.handleAdd} />
                        </div>
                    
                    </div>
            </main>
            <footer className="footer">
                <Footer className="bg-light" />
            </footer>
        </div>
      </div>
    );
  }
}

export default App;
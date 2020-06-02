import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { Todo } from './components/Todo.css';

const tasks = [
  {
    task: 'Respond to emails',
    id: 1,
    completed: false,
  },
  {
    task: 'Install latest OS updates',
    id: 2,
    completed: false,
  },
  {
    task: 'Meal prep for the week',
    id: 3,
    completed: false,
  },
  {
    task: 'Drycleaner pick-up',
    id: 4,
    completed: false,
  },
  {
    task: 'Work on the GSD project',
    id: 5,
    completed: false,
  },
  {
    task: 'Fill up gas tank',
    id: 6,
    completed: false,
  },
  {
    task: 'Work on bike tires',
    id: 7,
    completed: false,
  },
  {
    task: 'Send out work emails',
    id: 8,
    completed: false,
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: tasks,
    }
  };

  addTask = taskName => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  };

  toggleTask = taskId => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === taskId) {
          return {
            ...task,
            completed: !task.completed
          };
        } else {
          return task;
        }
      })
    });
  };

  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h2>Welcome to TaskTrackr!</h2>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList toggleTask={this.toggleTask} tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
// IMPORT REACT DOM
import ReactDOM from 'react-dom';
// IMPORT CLOCK CLASS
import Clock from "./Components/Clock";
// IMPORT TASKLIST CLASS, WHICH AUTOMAGICALLY IMPORTS TASK
import TaskList from "./Components/TaskList";

import NewTaskForm from "./Components/NewTaskForm";

import logo from './logo.svg';
import './App.css';

let starterTasks = [
  {id: 0, title: "Learn React State"},
  {id: 1, title: "Buy more coffee!"},
  {id: 2, title: "Tell everyone how cool INFO 343 is!"}
]

let nextID = starterTasks.length;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {tasks: starterTasks};
  }

handleNewTask(task) {
  task.id = nextID++;
  this.setState({tasks: this.state.tasks.concat(task)})
}

toggleDone(taskID) {
  let newTasks = this.state.tasks.map(task => {
  if(task.id === taskID) {
    task.done = !task.done;
  }
  return task;
  });

  this.setState( {task: newTasks} );
}

purgeCompleted() {
  let purgedTasks = this.state.tasks.filter(task => !task.done);
  this.setState({tasks: purgedTasks});
}

  render() {
    return (
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Clock />
        <div className="container">
          <h2 className="display-4">Tasks!</h2>
          <NewTaskForm onNewTask={(task) => this.handleNewTask(task)} />
          <TaskList 
            tasks = {this.state.tasks} 
            toggleDone={
              (taskID) => this.toggleDone(taskID)
            }
          />
          <button className = "btn btn-primary" onClick = {() => this.purgeCompleted()}>
          PURGE COMPLETED</button>
        </div>
      </div>
    );
  }
}

export default App;
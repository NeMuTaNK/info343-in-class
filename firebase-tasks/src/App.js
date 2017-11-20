import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

import NewTaskForm from "./Components/NewTaskForm";
import TaskList from "./Components/TaskList";
import PurgeButton from "./Components/PurgeButton";

class App extends Component {
  render() {
    let tasksRef = firebase.database().ref("tasks");
    // let awesomeRef = firebase.database().ref("awesomeTasks");
    return (
      <div>
        <div className="jumbotron bg-dark text-white">
          <div className="container">
            <h1 className="display-3">Tasks343</h1>
          </div>
        </div>
        <section>
          <div className="container">
              <NewTaskForm tasksRef = {tasksRef} />
              <TaskList tasksRef = {tasksRef} />
              <PurgeButton tasksRef = {tasksRef} />
          </div>

          {/* <div className="container">
              <NewTaskForm tasksRef = {awesomeRef} />
              <TaskList tasksRef = {awesomeRef} />
              <PurgeButton tasksRef = {awesomeRef} />
          </div> */}
        </section>
      </div>
    );
  }
}

export default App;
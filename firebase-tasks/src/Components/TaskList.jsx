import React from "react";
import Task from "./Task";

export default class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskSnapshot: []
        }
    }

    componentDidMount() {
        this.props.tasksRef.on("value", snapshot => {
            this.setState({ taskSnapshot: snapshot });
        });
    }

    componentWillUnMount() {
        this.props.tasksRef.off("value");
    }

    toggleDone() {

    }

    render() {
        console.log(this.state);
        if (!this.state.taskSnapshot) {
            return <div>Loading... please be patient</div>;
        }

        let tasks = [];
        this.state.taskSnapshot.forEach(taskSnapshot => {
            console.log("THis is the task snapshot ", taskSnapshot);
            console.log(taskSnapshot.key);
            tasks.push(<Task key={taskSnapshot.key} taskSnapshot={taskSnapshot} />)
        });

        return (
            <ul>
                <Task />
            </ul>
        );

    }
}
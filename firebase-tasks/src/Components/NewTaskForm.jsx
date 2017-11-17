import React, {Component} from "react";

export default class NewTaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTaskTitle: ""
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.tasksRef.push({
            title: this.state.newTaskTitle
        });
        this.setState( {newTaskTitle: ""} );
    }

    render() {
        return (
            <form onSubmit = {event => this.handleSubmit(event)}>
                <input type = "text" className = "form-control" value = {this.state.newTaskTitle}
                       placeholder = "What is your task?"
                       onInput = { event => this.setState( {newTaskTitle: event.target.value} )}
                />
            </form>
        )
    }
}
import React from "react";

export default class NewTaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title: ""}
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onNewTask({title: this.state.title});
        this.setState({title: ""});
    }

    render() {
        return (
            <form action="#" onSubmit={(event) => this.handleSubmit(event)}>
                <input type = "text"
                    className = "form-control"
                    value = {this.state.title}
                    onInput = {(event) => this.setState({title: event.target.value})}
                    placeholder = "WHAT IS YOUR TASK."
                />
            </form>
        )
    }
}
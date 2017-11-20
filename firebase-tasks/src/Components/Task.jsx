import React from "react";

export default class Task extends React.Component {
    render() {
        let taskStyles = {
            cursor: "pointer"
        }
        let doneTaskStyles = {...taskStyles, // Taking anything from taskStyles and combine the two CSS props for this
            color: "#AAA",
            textDecoration: "line-through"
        }
    
    
        console.log("Printing this: ", this);
        
        let task = this.props.taskSnapshot.val();
        return (
            <li style = { task.done ? doneTaskStyles : taskStyles }
                onClick = {() => this.props.taskSnapshot.ref.update( {done: !task.done} )}
            >
                {task.title}
            </li>
        );
    }
}
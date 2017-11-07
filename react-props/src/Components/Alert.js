import React from "react";

// Extending React.Component
// Create a class called Alert
// Make this class available to others using Export

export default class Alert extends React.Component {
    render() {
        // If the first part shows up as true, returns the type, else returns false = (success)
        let className = "alert alert-" + 
            (this.props.type || "success"); // error handling
        return (
            <div className = {className}>
                {this.props.message || "No message"}
            </div>
        );
    }
}
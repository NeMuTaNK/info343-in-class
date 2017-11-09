// Only a component knows its own state
// State can be passed to children components
// Until it is passed, it will not know what the state is but knows that it there
// Think inheritance from CS

import React from "react";

export default class Clock extends React.Component {
    constructor(props) {
        // ES6 classes must call supers if they extend to other classes
        super(props); 

        // this.state = 
        // Only allowed in constructor
        this.state = {date: new Date()};
        // this.setState()
    }

    // Life cycle methods
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return ( // props for properties, state for whatever state it is in
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
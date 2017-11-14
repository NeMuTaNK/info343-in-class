import React from "react";

import { Link } from "react-router-dom";

import constants from "./constants";

export default class SignUpView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        }
    }

handleSubmit(event) {
    event.preventDefault();
    console.log(
        "creating a user account with credentials: %s, %s, %s, %s", 
        this.state.firstName,
        this.state.lastName,
        this.state.email,
        this.state.password
    )

    this.setState( {firstName: "", lastName: "", email: "", password: ""} );
}

    render() {
        return (
            <div>
                <h1>Sign Up</h1>

                <form onSubmit = { event => this.handleSubmit(event) }>
                    <div className = "form-group">
                        <label htmlFor = "firstName">First Name</label>
                        <input id = "firstName" type = "text" placeholder = "Enter your first name!" className = "form-control" 
                               value = { this.state.firstName }
                               onInput = { event => this.setState( { firstName: event.target.value } ) }
                        />
                    </div>

                    <div className = "form-group">
                        <label htmlFor = "lastName">Last Name</label>
                        <input id = "firstName" type = "text" placeholder = "Enter your last name!" className = "form-control" 
                               value = { this.state.lastName }
                               onInput = { event => this.setState( { lastName: event.target.value } ) }
                        />
                    </div>

                    <div className = "form-group">
                        <label htmlFor = "email">Email</label>
                        <input id = "firstName" type = "email" placeholder = "Enter your email!" className = "form-control" 
                               value = { this.state.email }
                               onInput = { event => this.setState( { email: event.target.value } ) }
                        />                    
                    </div>

                    <div className = "form-group">
                        <label htmlFor = "password">Password</label>
                        <input id = "firstName" type = "password" placeholder = "Enter your password!" className = "form-control" 
                               value = { this.state.password }
                               onInput = { event => this.setState( { password: event.target.value } ) }
                        />                    
                    </div>

                    <div className = "form-group">
                        <button type = "submit" className = "btn btn-primary">Sign Up!</button>
                    </div>
                </form>

                <p>Already have an account? <Link to = { constants.routes.signin }>Sign In! </Link></p>
                <p><Link to="/channels/:nelsonChannel">Nelson's Channel</Link></p>
            </div>
        );
    }
}
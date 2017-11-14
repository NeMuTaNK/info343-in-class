import React from "react";

import { Link } from "react-router-dom";

import constants from "./constants";


export default class SignInView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }

    }
    
    handleSignIn(event) {
        event.preventDefault();
        console.log(
            "Logging in a user account with credentials: %s, %s", 
            this.state.email,
            this.state.password
        )
        this.setState( { email: "", password: ""} );
}

    render() {
        return (
            <div>
                <h1>Sign In</h1>

            <form onSubmit = { event => this.handleSignIn(event) }>
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
                        <button type = "submit" className = "btn btn-primary">Sign In!</button>
                    </div>
                </form>

                <p>Don't yet have an account? <Link to = { constants.routes.signup }>Sign Up! </Link></p>
                <p><Link to="/channels/:nelsonChannel">Nelson's Channel</Link></p>
            </div>
        );
    }
}
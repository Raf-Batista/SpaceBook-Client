import React, { Component } from 'react'; 

class Login extends Component {
    render() {
        return(
            <div className="login">
                <label className="label">Username</label>
                <input type="text" height="24"/>

                <label className="label">Password</label>
                <input type="text"/>
            </div>
        )
    }
}

export default Login;
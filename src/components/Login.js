import React, { Component } from 'react'; 

class Login extends Component {
    render() {
        return(
            <div className="login mt-3">
                <label className="label">
                    Username
                    <input className="mx-2" type="text" height="24"/>
                </label>
                

                <label className="label">
                    Password
                    <input className="mx-2" type="text"/>
                </label>

                <button className="btn-primary">Login</button>
            </div>
        )
    }
}

export default Login;
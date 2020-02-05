import React, { Component } from 'react'; 

class Login extends Component {
    render() {
        return(
            <div className=" mt-3">
                {/* <label className="label">
                    Username
                    <input className="mx-2" type="text" height="24"/>
                </label>
                

                <label className="label">
                    Password
                    <input className="mx-2" type="text"/>
                </label>

                <button className="btn-primary login-btn">Login</button> */}

               
                <form className="form-inline">
                <div class="form-group mx-sm-3 mb-2">
                    <label for="inputPassword2" className="sr-only">Email</label>
                    <input type="password" class="form-control form-control-sm" id="inputPassword2" placeholder="Email" />
                </div>
                <div class="form-group mx-sm-3 mb-2">
                    <label for="inputPassword2" className="sr-only">Password</label>
                    <input type="password" class="form-control form-control-sm" id="inputPassword2" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary mb-3">Login</button>
                </form>
            </div>
        )
    }
}

export default Login;
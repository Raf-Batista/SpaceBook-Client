import React, {Component} from 'react'; 

class Navbar extends Component {
    render() {
        return(
            <div className="navBarStyle">
                <nav className="navbar ">
                    <a className="navbar-brand homeButton" href="#">SpaceBook</a>  
                </nav>
            </div>
        )
    }
}

export default Navbar;
import React, {Component} from 'react'; 
import Login from './Login';

class Navbar extends Component {
    render() {
        return(
            <div className="Navbar">
                    <div className="navBarStyle">
                        <nav className="navbar ">
                        {/* <span style={{fontSize: '3em', color: 'White'}}> // Rocketship Logo from Font Awesome
                            <i class="fas fa-space-shuttle"></i>
                        </span> */}
                            
                            <a className="navbar-brand home-button" href="#">SpaceBook</a>  
                            <Login/>
                        </nav>
                    </div>
            </div>
        )
    }
}

export default Navbar;
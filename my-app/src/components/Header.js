import React from "react";
import { NavLink } from "react-router-dom";


class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="header-top">
                    <div className="container">
                        <div className="logo">
                            <h1>ASTHINGSBE</h1>
                        </div>
                    </div>
                </div>
                <nav className="navbar">
                    <div className="container">
                        <ul className="navbar-nav">
                            <li><img src="../images/main logo 3.JPG" alt="Logo" /></li>
                            <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
                            <li><NavLink to="About" activeClassName="active">About</NavLink></li>
                            <li><NavLink to="Login" activeClassName="active">Login</NavLink></li>
                            <li><NavLink to="Signin" activeClassName="active">Sign In</NavLink></li>
                            <li id="Contact"><NavLink to="Contact" activeClassName="active">Contact Us</NavLink></li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;

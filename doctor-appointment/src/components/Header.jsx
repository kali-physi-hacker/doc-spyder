import React from 'react'

// External library imports here
import {NavLink} from 'react-router-dom'

// Assets Here
import logo from '../assets/img/logo.png'


const Header = () => {
    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg header-nav">
                <div className="navbar-header">
                    <NavLink to={"#"} id="mobile_btn">
							<span className="bar-icon">
								<span></span>
								<span></span>
								<span></span>
							</span>
                    </NavLink>
                    <NavLink to={'/'} className="navbar-brand logo">
                        <img src={logo} className="img-fluid" alt="Logo" />
                    </NavLink>
                </div>
                <div className="main-menu-wrapper">
                    <div className="menu-header">
                        <NavLink to={"#"} className="menu-logo">
                            <img src={logo} className="img-fluid" alt="Logo" />
                        </NavLink>
                        <NavLink to={"#"} id="menu_close" className="menu-close">
                            <i className="fas fa-times"></i>
                        </NavLink>
                    </div>
                    <ul className="main-nav">
                        <li>
                            <NavLink to={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"#"}>Patients`</NavLink>
                        </li>

                        <li>
                            <NavLink to={"/"} target="_blank">Admin</NavLink>
                        </li>
                        <li className="login-link">
                            <NavLink to={"/"}>Login / Signup</NavLink>
                        </li>
                    </ul>
                </div>
                <ul className="nav header-navbar-rht">
                    <li className="nav-item contact-item">
                        <div className="header-contact-img">
                            <i className="far fa-hospital"></i>
                        </div>
                        <div className="header-contact-detail">
                            <p className="contact-header">Contact</p>
                            <p className="contact-info-header"> +1 315 369 5943</p>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link header-login" href="login.html">login / Signup </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}


export default Header;
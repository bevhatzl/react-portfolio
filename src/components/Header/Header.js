import React from "react";
import {HashRouter, NavLink, Link} from 'react-router-dom';

// import "./style.css";

// Display the nav bar and heading
function Header () {
    return (
        <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
                <div className="container">
                        <a className="navbar-brand js-scroll-trigger" href="/">Beverley Hatzl - Web Developer</a>
                        <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded"
                        type="button" aria-controls="navbarResponsive" data-toggle="collapse" data-target="#navbarResponsive"
                        aria-expanded="false" aria-label="Toggle navigation">Menu{" "}<i className="fas fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                                <ul className="navbar-nav ml-auto">
                                        <li className="nav-item mx-0 mx-lg-1" data-toggle="collapse" data-target="#navbarResponsive"><NavLink  to="/#jumpTop"  activeClassName="selected" className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger not-selected"  exact>Welcome</NavLink></li>
                                        <li className="nav-item mx-0 mx-lg-1" data-toggle="collapse" data-target="#navbarResponsive"><NavLink  to="/portfolio#portfolio"  activeClassName="selected" className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger not-selected"  exact>Portfolio</NavLink></li>
                                        <li className="nav-item mx-0 mx-lg-1" data-toggle="collapse" data-target="#navbarResponsive"><NavLink  to="/about#about"  activeClassName="selected" className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger not-selected"  exact>About</NavLink></li>
                                      
                                </ul>
                        </div>
                </div>
        </nav>
    )
}

export default Header;
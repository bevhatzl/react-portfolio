import React from "react";
import {NavLink} from 'react-router-dom';
// import "./style.css";

// Display the nav bar and heading
function Header () {
    return (
        <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
        <div class="container">
            <a class="navbar-brand js-scroll-trigger" href="#page-top">Beverley Hatzl - Web Developer</a>
            <button
                class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded"
                type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive"
                aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">

            <ul class="navbar-nav ml-auto">
                    <li className="nav-item mx-0 mx-lg-1"><NavLink activeClassName="selected" className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger not-selected" to="/project" exact
                            >Portfolio</NavLink></li>
                    <li className="nav-item mx-0 mx-lg-1"><NavLink activeClassName="selected" className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger not-selected"
                            to="/about" exact>About</NavLink></li>
                    <li class="nav-item mx-0 mx-lg-1"><NavLink activeClassName="selected" class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger not-selected"
                            to="/" exact>Welcome</NavLink></li>
                </ul>


                {/* <ul class="navbar-nav ml-auto">
                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                            href="#portfolio">Portfolio</a></li>
                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                            href="#about">About</a></li>
                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                            href="#">Welcome</a></li>
                </ul> */}
            </div>
        </div>
    </nav>
    )
}

export default Header;
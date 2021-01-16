import React from "react";
import avatar from '../../assets/avatar.jpeg';
// import "./style.css";

// Display the Welcome screen
function Welcome () {
    return (
        <div class="masthead bg-primary text-white text-center">
        <div class="container d-flex align-items-center flex-column">

            <img class="masthead-avatar mb-5" src={avatar} alt="photo of me" />

            <h1 class="masthead-heading text-uppercase mb-0">Welcome!</h1>
   
            <div class="divider-custom divider-light">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                <div class="divider-custom-line"></div>
            </div>
   
            <p class="masthead-subheading font-weight-light mb-0">Hi, I'm Beverley Hatzl. I'm a Junior Web Developer,
                based in Sydney, seeking my first dev job.</p>
        </div>
    </div>
    )
}

export default Welcome;
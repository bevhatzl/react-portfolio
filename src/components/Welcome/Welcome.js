import React from "react";
import avatar from '../../assets/avatar.jpeg';

// Display the Welcome screen
function Welcome () {
    return (
        <div className="masthead bg-primary text-white text-center" id="jumpTop">
            <div className="container d-flex align-items-center flex-column">
                <img className="masthead-avatar mb-5" src={avatar} alt="photo of me" />
                <h1 className="masthead-heading text-uppercase mb-0">Welcome!</h1>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <p className="masthead-subheading mb-0">Hi, I'm Beverley Hatzl. I'm a Web Developer,
                based in Sydney.</p>
            </div>
        </div>
    )
}

export default Welcome;
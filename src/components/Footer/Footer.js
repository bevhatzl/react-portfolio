import React from "react";

// Display contact details
function Footer () {
    return (
        <footer className="footer text-center" id="footer">
        <div className="container">
            <div className="row">            
                <div className="col-lg-4 mb-5 mb-lg-0">
                    <h4 className="text-uppercase mb-4">Location</h4>
                    <p className="lead mb-0">
                        Sydney
                        <br />
                        Australia
                    </p>
                </div>             
                <div className="col-lg-4 mb-5 mb-lg-0">
                    <h4 className="text-uppercase mb-4">Around the Web</h4>
                    <a className="btn btn-outline-light btn-social mx-1" href="https://github.com/bevhatzl"
                        target="_blank"><i className="fab fa-fw fa-github"></i></a>
                    <a className="btn btn-outline-light btn-social mx-1"
                        href="http://www.linkedin.com/in/beverley-hatzl-482348130" target="_blank"><i
                        className="fab fa-fw fa-linkedin-in"></i></a>
                </div>
                <div className="col-lg-4">
                    <h4 className="text-uppercase mb-4">Email Me</h4>
                    <p className="lead mb-0" id="strongEmail">
                        <a href="mailto:beverleyhatzl@gmail.com" target="_blank">beverleyhatzl@gmail.com</a>
                    </p>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer;
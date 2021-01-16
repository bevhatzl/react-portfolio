import React from "react";
// import "./style.css";

// Display contact details
function Footer () {
    return (
        <footer class="footer text-center" id="footer">
        <div class="container">
            <div class="row">
            
                <div class="col-lg-4 mb-5 mb-lg-0">
                    <h4 class="text-uppercase mb-4">Location</h4>
                    <p class="lead mb-0">
                        Sydney
                        <br />
                        Australia
                    </p>
                </div>
             
                <div class="col-lg-4 mb-5 mb-lg-0">
                    <h4 class="text-uppercase mb-4">Around the Web</h4>
                    <a class="btn btn-outline-light btn-social mx-1" href="https://github.com/bevhatzl"
                        target="_blank"><i class="fab fa-fw fa-github"></i></a>
                    <a class="btn btn-outline-light btn-social mx-1"
                        href="http://www.linkedin.com/in/beverley-hatzl-482348130" target="_blank"><i
                            class="fab fa-fw fa-linkedin-in"></i></a>
                </div>
                <div class="col-lg-4">
                    <h4 class="text-uppercase mb-4">Email Me</h4>
                    <p class="lead mb-0">
                        <a href="mailto:beverleyhatzl@gmail.com" target="_blank">beverleyhatzl@gmail.com</a>
                    </p>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer;
import React from "react";
// import "./style.css";

// About Me
function About () {
    return (
        <section className="page-section bg-primary text-white mb-0" id="about">
        <div className="container">
        
            <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
           
            <div className="divider-custom divider-light">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i class="fas fa-star"></i></div>
                <div className="divider-custom-line"></div>
            </div>
          
            <div className="row">
                <div className="col-lg-4 ml-auto">
                    <p className="lead" id="strongFont">
                        I have recently completed the ​Full Stack Coding Boot Camp at University of Sydney. Now I am
                        looking
                        for a Junior position as Backend, but I am also keen to work as Frontend.​ I first started a
                        passion for programming while studying for my Bachelor of Business in the past. Now since
                        January
                        2020 I have started self study to learn Web Development with the aim to become a Junior
                        Developer. Since completing my formal studies I am starting more projects to be completed in my
                        own time.
                    </p>
                </div>
                <div className="col-lg-4 mr-auto">
                    <p className="lead" id="strongFont">I am proficient with HTML, CSS, JavaScript, jQuery, Bootstrap, Git, Node,
                        Express.js, SQL, MongoDB, ORMs, ODMs and React. This portfolio was built using React!

                        Check out my projects in the Portfolio and feel free to get in touch with me. You can view my
                        resume <a
                            href="https://drive.google.com/file/d/19U3Jp3mZhTqVvSSfVk1HWbZwEcATvKmP/view?usp=sharing"
                            target="_blank" id="resume-link">here.</a>
                    </p>
                </div>
            </div>
        </div>
    </section>
    )
}

export default About;
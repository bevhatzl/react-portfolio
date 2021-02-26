import React from 'react';


function Project(props) {
    return (
        <div>
            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="portfolio-item-caption-content text-center text-white" id="caption-port">
                    <strong>{props.data.title}</strong> <br />
                    {props.data.text} 
                    <br />Deployed {" "}
                    <a href={props.data.deployed} target="_blank" className="project-link">here.</a>  
                    <br />
                    See it on GitHub{" "}
                    <a href={props.data.github} target="_blank" className="project-link">here.</a> 
                </div>                      
            </div>
        </div>            
    )   
}

export default Project;
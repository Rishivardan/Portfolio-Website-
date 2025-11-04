import React from "react";


function Projects(){
    return(
        <section id="projects" className="projects">
            <h2>My Projects</h2>
            <div className="projects-grid">

            
                <div className="project-card">
                    <img src="{project1}" alt="project1"/>
                    <h3>Personal Task Manager</h3>
                    <p></p>
                    <a href="#" className="btn">View Project</a>
                </div>

                <div className="project-card">
                    <img src={project2} alt="project 2"/>
                    <h3></h3>
                    <p></p>
                    <a href="#" className="btn">View Project</a>
                </div>

                {/*Add if you have any project here */}
            </div>
        </section>
    );
}

export default Projects;
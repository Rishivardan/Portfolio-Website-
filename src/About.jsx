import React from "react";

function About(){
    return(
        <section id="about">
            <h2>About Me</h2>
            <div className="about-content">
                <p>
                    I'm <strong>Rishivardan</strong>, a passionate Software Engineering student graduating degree in University Of WestMinster and loves
                    turning ideas into working code. I enjoy creaating interactive, user-friendly web applications using technologies like React,Node.js, and JAVA.
                </p>

                <p>
                    I'm constantly exploring new technologies and improving my skills to be 
                    full stack developer. My future goal is to become AI/ML Engineer. I believe in writing clean code,efficient and scalable
                    makes an impact.
                </p>

                <div className="skills">
                    <h3>Skills</h3>
                    <ul>
                        <li>React.js</li>
                        <li>Node.js</li>
                        <li>JAVA</li>
                        <li>HTML, CSS, JavaScript</li>
                        <li>Python</li>
                        <li>Git & Github</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default About;
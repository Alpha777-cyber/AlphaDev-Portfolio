import React from 'react';
import portrait from '../t.png';

function About() {
    return (
        <section id="about" className="about">
            <div className="container reveal">
                <div className="about-header">
                    <h2 className="section-title center">THE ARCHITECT</h2>
                </div>
                <div className="about-content grid-2">
                    <div className="about-img">
                        <div className="img-frame">
                            <img src={portrait} alt="MUNEZERO Alpha Portrait" />
                        </div>
                    </div>
                    <div className="about-text">
                        <div className="about-intro">
                            <p>
                                Based in <strong>Rwanda</strong>, I specialize in crafting high-performance backend
                                systems and fluid frontend experiences. My journey from <strong>Rwanda Coding
                                    Academy</strong> has been driven by an obsession with clean code and scalable
                                architecture.
                            </p>
                            <p>
                                I transform complex requirements into elegant technical solutions, focusing on
                                performance, security, and developer experience.
                            </p>
                        </div>
                        <div className="stats-grid">
                            <div className="stat-card">
                                <h3>10+</h3>
                                <p>Projects Completed</p>
                            </div>
                            <div className="stat-card">
                                <h3>2+</h3>
                                <p>Years Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;

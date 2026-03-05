import React from 'react';

const projects = [
    {
        title: 'UbutaberaHub',
        img:
            'https://images.unsplash.com/photo-1768839719921-6a554fb3e847?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: 'https://github.com/Alpha777-cyber/Integrated-Judicial-Management-System',
        description:
            'A comprehensive legal-tech platform designed to simplify case management and client interaction.',
        tags: ['JavaScript', 'Node.js', 'AWS'],
    },
    {
        title: 'CarRental Pro',
        img:
            'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: 'https://github.com/Alpha777-cyber/car-rental-backend',
        description:
            'A modern car rental platform with seamless booking system, real-time availability tracking, and secure payment processing for an exceptional customer experience.',
        tags: ['Node.js', 'MongoDB', 'Express', 'Typescript'],
    },
];

function Projects() {
    return (
        <section id="projects" className="section reveal">
            <div className="container">
                <h2 className="section-title">Featured Work</h2>
                <div className="project-grid">
                    {projects.map((p, idx) => (
                        <div className="project-card" key={idx}>
                            <div className="project-img">
                                <img src={p.img} alt={p.title} />
                            </div>
                            <div className="project-info">
                                <h3>{p.title}</h3>
                                <p>{p.description}</p>
                                <div className="tags">
                                    {p.tags.map((t) => (
                                        <span key={t}>{t}</span>
                                    ))}
                                </div>
                                <a href={p.link} target="_blank" rel="noopener noreferrer" className="view-project">
                                    View Project <i className="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;

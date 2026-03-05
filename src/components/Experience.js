import React from 'react';

const timelineItems = [
    {
        date: '2023 - Present',
        title: 'Lead Developer',
        company: 'TechFlow Architectures',
        description:
            'Leading a team of 5 developers in building scalable cloud-native applications focusing on FinTech security.',
    },
    {
        date: '2020 - 2021',
        title: 'Junior Developer',
        company: 'Digital Innovations Lab',
        description:
            'Built responsive web applications and implemented RESTful APIs for various client projects.',
    },
    {
        date: '2021 - 2023',
        title: 'Full Stack Engineer',
        company: 'Nexus Systems',
        description:
            'Developed high-performance microservices and optimized database queries reducing latency by 40%.',
    },
];

function Experience() {
    return (
        <section id="experience" className="section reveal">
            <div className="container">
                <h2 className="section-title">Experience Timeline</h2>
                <div className="timeline">
                    {timelineItems.map((item, idx) => (
                        <div className="timeline-item" key={idx}>
                            <div className="timeline-dot"></div>
                            <div className="timeline-date">{item.date}</div>
                            <div className="timeline-content">
                                <h3>{item.title}</h3>
                                <p className="company">{item.company}</p>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;

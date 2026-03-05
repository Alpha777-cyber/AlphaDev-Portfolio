import React, { useEffect, useRef, useState } from 'react';

function Hero() {
    const words = ['Full-Stack Developer', 'Software Architect', 'UI/UX Specialist'];
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [wordIndex, setWordIndex] = useState(0);
    const charIndexRef = useRef(0);

    useEffect(() => {
        const type = () => {
            const currentWord = words[wordIndex];
            if (isDeleting) {
                charIndexRef.current -= 1;
                setText(currentWord.substring(0, charIndexRef.current));
            } else {
                charIndexRef.current += 1;
                setText(currentWord.substring(0, charIndexRef.current));
            }

            let delay = isDeleting ? 50 : 150;
            if (!isDeleting && charIndexRef.current === currentWord.length) {
                delay = 2000;
                setIsDeleting(true);
            } else if (isDeleting && charIndexRef.current === 0) {
                setIsDeleting(false);
                setWordIndex((idx) => (idx + 1) % words.length);
                delay = 500;
            }
            setTimeout(type, delay);
        };
        type();
    }, [isDeleting, wordIndex]);

    return (
        <section id="hero" className="hero-section reveal">
            <div className="hero-content">
                <p className="pre-title">Architecting Digital Solutions</p>
                <h1 className="hero-title">
                    MUNEZERO <span className="accent-text">ALPHA</span>
                </h1>
                <div className="typewriter-container">
                    <span className="typewriter-text">{text}</span>
                </div>
                <div className="cta-group">
                    <a href="#projects" className="btn btn-primary">
                        View Projects
                    </a>
                    <a href="#contact" className="btn btn-outline">
                        Get In Touch
                    </a>
                </div>
            </div>
            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <span>Scroll Down</span>
            </div>
        </section>
    );
}

export default Hero;

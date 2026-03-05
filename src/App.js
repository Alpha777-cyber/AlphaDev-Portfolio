import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';

function App() {
    useEffect(() => {
        const revealElements = document.querySelectorAll('.reveal');
        const revealOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px',
        };
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    obs.unobserve(entry.target);
                }
            });
        }, revealOptions);
        revealElements.forEach((el) => observer.observe(el));
    }, []);

    return (
        <>
            <a href="#main-content" className="skip-to-content">Skip to main content</a>
            <Cursor />
            <Navigation />
            <main id="main-content">
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

export default App;

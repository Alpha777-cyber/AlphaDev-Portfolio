import React, { useEffect } from 'react';
import Navigation from './components/Navigation.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Cursor from './components/Cursor.jsx';

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

import React, { useEffect, useState } from 'react';

const links = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Work' },
    { href: '#contact', label: 'Contact' },
];

function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('#hero');

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);
            links.forEach((link) => {
                const el = document.querySelector(link.href);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= 100) {
                        setActiveSection(link.href);
                    }
                }
            });
        };
        const onKeyDown = (e) => {
            if (e.key === 'Escape' && menuOpen) {
                setMenuOpen(false);
            }
        };
        window.addEventListener('scroll', onScroll);
        window.addEventListener('keydown', onKeyDown);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [menuOpen]);

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    const toggleMenu = () => {
        setMenuOpen((o) => !o);
    };

    return (
        <nav
            className={`glass-nav${scrolled ? ' scrolled' : ''}`}
            role="navigation"
            aria-label="Main navigation"
        >
            <div className="nav-container">
                <a href="#hero" className="logo" aria-label="MUNEZERO Alpha - Home">
                    M.ALPHA<span className="gold-dot">.</span>
                </a>
                <ul className={`nav-links${menuOpen ? ' active' : ''}`} role="menubar">
                    {links.map((link) => (
                        <li key={link.href} role="none">
                            <a
                                href={link.href}
                                role="menuitem"
                                className={activeSection === link.href ? 'active' : ''}
                                onClick={handleLinkClick}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <button
                    className={`burger${menuOpen ? ' active' : ''}`}
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                    onClick={toggleMenu}
                >
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </button>
            </div>
        </nav>
    );
}

export default Navigation;

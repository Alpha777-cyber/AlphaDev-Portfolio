import React, { useState } from 'react';

function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [submitting, setSubmitting] = useState(false);
    const [btnText, setBtnText] = useState('Send Message');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = form;
        const subject = encodeURIComponent(`Portfolio message from ${name || 'visitor'}`);
        let body = encodeURIComponent(message);
        if (name || email) {
            body += encodeURIComponent(`\n\nFrom: ${name}${email ? ` <${email}>` : ''}`);
        }
        window.location.href = `mailto:alphamnzr@gmail.com?subject=${subject}&body=${body}`;
        setSubmitting(true);
        setBtnText('EMAIL OPENED');
        setTimeout(() => {
            setSubmitting(false);
            setBtnText('Send Message');
            setForm({ name: '', email: '', message: '' });
        }, 3000);
    };

    return (
        <section id="contact" className="section reveal">
            <div className="container">
                <div className="contact-wrapper">
                    <div className="contact-info">
                        <h2 className="section-title left">Let's Connect</h2>
                        <p>
                            Interested in collaborating or just want to chat about tech? Feel free to reach out
                            through any of these channels.
                        </p>
                        <ul className="social-links">
                            <li>
                                <a href="https://github.com/Alpha777-cyber/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github"></i> GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/munezero-alpha-735a9839b/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fab fa-linkedin"></i> LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="https://x.com/alphamnzr/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-x"></i> X(twitter)
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/_alpha250/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram"></i> Instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                    <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input
                                type="text"
                                id="name"
                                placeholder="Name"
                                required
                                value={form.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="email"
                                id="email"
                                placeholder="Email"
                                required
                                value={form.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-group">
                            <textarea
                                id="message"
                                placeholder="Your Message"
                                rows="5"
                                required
                                value={form.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary full-width" disabled={submitting}>
                            {btnText}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;

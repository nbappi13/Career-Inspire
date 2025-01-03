import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../styles/ContactUs.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success('Thank you for your message! We will get back to you soon.', {
            autoClose: 3000,
            closeButton: false,
        });
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="contact-us-container">
            <ToastContainer />
            <header className="contact-us-header">
                <h1>Contact Us</h1>
                <p className="header-description">We'd love to hear from you! Whether you have questions, feedback, or need support, feel free to get in touch with us.</p>
            </header>
            <section className="contact-us-section">
                <h2 className="section-title">Get in Touch</h2>
                <p className="section-content">Fill out the form below and our team will get back to you as soon as possible.</p>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            rows="4" 
                            value={formData.message} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <button type="submit" className="submit-button">Send Message</button>
                </form>
            </section>
            <section className="contact-info-section">
                <h2 className="section-title">Contact Information</h2>
                <p className="section-content">You can also reach us at:</p>
                <ul className="contact-info-list">
                    <li>Email: support@careerinspire.comm</li>
                    <li>Phone: +880 (007) 007-00007</li>
                    <li>Address: 123 Career Inspire St, Dhaka City, DA 12345</li>
                </ul>
            </section>
        </div>
    );
};

export default ContactUs;

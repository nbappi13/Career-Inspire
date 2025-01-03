import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async'; 
import { AuthContext } from '../../context/AuthContext';
import '../../styles/Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    const navigate = useNavigate();
    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        fetch('/serviceData.json')
            .then(response => response.json())
            .then(data => setServices(data))
            .catch(error => console.error('Error fetching services data:', error));
    }, []);

    const handleLearnMoreClick = (serviceId) => {
        if (currentUser) {
            navigate(`/service-details/${serviceId}`);
        } else {
            navigate('/login');
        }
    };

    return (
        <HelmetProvider>
            <Helmet>
                <title>Our Services - Career Inspire</title>
                <meta name="description" content="Explore our range of services designed to help you achieve your career goals." />
            </Helmet>
            <div className="services-container">
                <h1 className="services-title">Explore Our Services</h1>
                {services.map(service => (
                    <section key={service.id} className="service-section">
                        <header className="service-header">
                            <h2 className="service-name">{service.serviceName}</h2>
                            <aside className="service-pricing">{service.pricing}</aside>
                        </header>
                        <p className="service-targetAudience"><strong>Ideal for:</strong> {service.targetAudience}</p>
                        <div className="service-details">
                            <p>Join our {service.serviceName} to gain valuable insights and enhance your skills. This service is specially designed for {service.targetAudience}. Don't miss out on this opportunity to advance your career.</p>
                            <blockquote className="service-quote">"An investment in knowledge pays the best interest." - Benjamin Franklin</blockquote>
                            <footer className="service-footer">
                                <p>For more details, visit our <button onClick={() => handleLearnMoreClick(service.id)} className="learn-more-link">Learn More</button> page.</p>
                            </footer>
                        </div>
                    </section>
                ))}
            </div>
        </HelmetProvider>
    );
};

export default Services;

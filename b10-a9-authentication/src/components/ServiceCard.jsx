import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ service }) => {
    return (
        <div className="card">
            <img src={service.image} alt={service.serviceName} className="card-image" />
            <div className="card-content">
                <h3>{service.serviceName}</h3>
                <p><strong>Counselor:</strong> {service.counselor}</p>
                <p><strong>Category:</strong> {service.category}</p>
                <p><strong>Description:</strong> {service.description}</p>
                <p><strong>Pricing:</strong> {service.pricing}</p>
                <p><strong>Duration:</strong> {service.duration}</p>
                <p><strong>Rating:</strong> {service.rating}</p>
                <p><strong>Location:</strong> {service.location}</p>
                <p><strong>Target Audience:</strong> {service.targetAudience}</p>
                <p><strong>Counselor Qualifications:</strong> {service.counselorQualifications}</p>
                <p><strong>Session Format:</strong> {service.sessionFormat}</p>
                <button className="learn-more-button" onClick={() => window.location.href = service.learnMoreLink}>Learn More</button>
            </div>
        </div>
    );
};

export default ServiceCard;

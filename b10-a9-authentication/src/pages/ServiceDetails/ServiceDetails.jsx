import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './ServiceDetails.css';
import CommentsSection from './CommentsSection';

const ServiceDetails = () => {
    const { id } = useParams();
    const [service, setService] = useState(null);

    useEffect(() => {
        fetch('/serviceData.json')
            .then(response => response.json())
            .then(data => {
                const foundService = data.find(service => service.id === parseInt(id));
                setService(foundService);
            })
            .catch(error => console.error('Error fetching service data:', error));
    }, [id]);

    if (!service) {
        return <div>Loading...</div>;
    }

    return (
        <div className="service-details">
            <img src={service.image} alt={service.serviceName} className="service-image" />
            <h2><strong>Counselor:</strong> {service.counselor}</h2>
            <h2 className='text-blue-300'>Service: {service.serviceName}</h2>
            <p><strong>Category:</strong> {service.category}</p>
            <p><strong>Description:</strong> {service.description}</p>
            <p><strong>Pricing:</strong> {service.pricing}</p>
            <p><strong>Duration:</strong> {service.duration}</p>
            <p><strong>Rating:</strong> {service.rating}</p>
            <p><strong>Location:</strong> {service.location}</p>
            <p><strong>Target Audience:</strong> {service.targetAudience}</p>
            <p><strong>Counselor Qualifications:</strong> {service.counselorQualifications}</p>
            <p><strong>Session Format:</strong> {service.sessionFormat}</p>
            
            <CommentsSection serviceId={id} />
        </div>
    );
};

export default ServiceDetails;

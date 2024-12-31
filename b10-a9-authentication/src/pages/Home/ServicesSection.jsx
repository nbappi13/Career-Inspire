import React, { useEffect, useState } from 'react';
import ServiceCard from '../../components/ServiceCard';
import './ServicesSection.css'; 

const ServicesSection = () => {
    const [services, setServices] = useState([]);
    const [visibleServices, setVisibleServices] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch('/serviceData.json')
            .then(response => response.json())
            .then(data => {
                setServices(data);
                setVisibleServices(data.slice(0, 9)); 
            })
            .catch(error => console.error('Error fetching service data:', error));
    }, []);

    const handleSeeMore = () => {
        if (showAll) {
            setVisibleServices(services.slice(0, 9));
        } else {
            setVisibleServices(services);
        }
        setShowAll(!showAll);
    };

    return (
        <div className="services-section">
            {visibleServices.map(service => (
                <ServiceCard key={service.id} service={service} />
            ))}
            <button className="see-more-button" onClick={handleSeeMore}>
                {showAll ? 'See Less' : 'See More'}
            </button>
        </div>
    );
};

export default ServicesSection;

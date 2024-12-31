import React, { useEffect, useState } from 'react';
import ServiceCard from '../../components/ServiceCard';
import './ServicesSection.css';

const ServicesSection = () => {
    const [services, setServices] = useState([]);
    const [visibleServices, setVisibleServices] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [screenSize, setScreenSize] = useState('lg');

    useEffect(() => {
        fetch('/serviceData.json')
            .then(response => response.json())
            .then(data => {
                setServices(data);
                setVisibleServices(data.slice(0, 9));
            })
            .catch(error => console.error('Error fetching service data:', error));
    }, []);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width >= 1280) {
                setScreenSize('xl');
            } else if (width >= 1024) {
                setScreenSize('lg');
            } else if (width >= 640) {
                setScreenSize('md');
            } else {
                setScreenSize('sm');
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleSeeMore = () => {
        if (showAll) {
            if (screenSize === 'xl' || screenSize === 'lg') {
                setVisibleServices(services.slice(0, 9));
            } else if (screenSize === 'md') {
                setVisibleServices(services.slice(0, 6));
            } else {
                setVisibleServices(services.slice(0, 4));
            }
        } else {
            setVisibleServices(services);
        }
        setShowAll(!showAll);
    };

    return (
        <div className={`services-section ${screenSize}`}>
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

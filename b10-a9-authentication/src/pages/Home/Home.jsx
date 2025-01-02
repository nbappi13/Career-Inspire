import React, { useEffect } from 'react';
import Slider from './Slider';
import ServicesSection from './ServicesSection';
import WhyCareerInspire from './WhyCareerInspire';
import SuccessStories from './SuccessStories';
import { useLocation } from 'react-router-dom';

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        const handleHashChange = () => {
            const element = document.getElementById(window.location.hash.slice(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        };

        if (location.hash) {
            const element = document.getElementById(location.hash.slice(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }

        window.addEventListener('hashchange', handleHashChange, false);

        return () => {
            window.removeEventListener('hashchange', handleHashChange, false);
        };
    }, [location]);

    return (
        <div>
            <Slider />
            <div id="services">
                <ServicesSection />
            </div>
            <div id="why-career-inspire">
                <WhyCareerInspire />
            </div>
            <div id="success-stories">
                <SuccessStories />
            </div>
        </div>
    );
};

export default Home;

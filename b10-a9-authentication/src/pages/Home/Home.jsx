import React, { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Slider from './Slider';
import ServicesSection from './ServicesSection';
import WhyCareerInspire from './WhyCareerInspire';
import SuccessStories from './SuccessStories';
import AboutUs from './AboutUs';
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
        <HelmetProvider>
            <Helmet>
                <title>Home - Career Inspire</title>
                <meta name="description" content="Welcome to Career Inspire, where we empower you to achieve your career goals. Explore our exclusive services, success stories, and more." />
            </Helmet>
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
                <div id="about-us">
                    <AboutUs />
                </div>
            </div>
        </HelmetProvider>
    );
};

export default Home;

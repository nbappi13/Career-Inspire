import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async'; 
import { Link } from 'react-router-dom';
import '../../styles/NotFound.css';

const NotFound = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>404 - Page Not Found</title>
                <meta name="description" content="Sorry, the page you are looking for does not exist. Go back to the home page." />
            </Helmet>
            <div className="not-found-container">
                <h1>Page Not Found! 👽🥶😭😭</h1>
                <p>Sorry, the page you are looking for does not exist.</p>
                <Link to="/" className="home-link">Go to Home</Link>
            </div>
        </HelmetProvider>
    );
};

export default NotFound;

// Resources.jsx
import React from 'react';
import '../../styles/Resources.css';
import { motion } from 'framer-motion';

const Resources = () => {
    return (
        <div className="resources-container">
            <motion.h1 
                className="resources-title"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Career Resources
            </motion.h1>
            
            <motion.p 
                className="resources-description"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                Empower your career journey with curated resources designed to inspire and guide you toward success.
            </motion.p>

            <motion.div 
                className="resources-section" 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <h2 className="section-title">Interactive E-books</h2>
                <p className="section-description">
                    Dive into our interactive e-books filled with actionable advice, career tips, and step-by-step guides tailored to different industries.
                </p>
            </motion.div>

            <motion.div 
                className="resources-section" 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                <h2 className="section-title">Expert-Led Webinars</h2>
                <p className="section-description">
                    Join live sessions or watch recordings of webinars hosted by industry leaders to gain insights and practical advice.
                </p>
            </motion.div>

            <motion.div 
                className="resources-section" 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
            >
                <h2 className="section-title">Podcasts on Career Trends</h2>
                <p className="section-description">
                    Tune into our weekly podcasts featuring career coaches, entrepreneurs, and HR experts sharing their stories and strategies.
                </p>
            </motion.div>

            <motion.div 
                className="resources-section" 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
            >
                <h2 className="section-title">Success Stories</h2>
                <p className="section-description">
                    Explore real-life success stories of individuals who overcame challenges to achieve their career goals.
                </p>
            </motion.div>
        </div>
    );
};

export default Resources;

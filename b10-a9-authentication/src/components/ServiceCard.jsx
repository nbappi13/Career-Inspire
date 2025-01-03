import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/ServiceCard.module.css';

const ServiceCard = ({ service }) => {
    return (
        <div className={styles.card}>
            <img src={service.image} alt={service.serviceName} className={styles.cardImage} />
            <div className={styles.cardContent}>
               
                <div className={styles.cardDetails}>
                    <div className={styles.leftContent}>
                        <p><strong>Counselor:</strong> {service.counselor}</p>
                        <p><strong>Category:</strong> {service.category}</p>
                    </div>
                    
                </div>
                <div className={styles.rightContent}>
                        <p><strong>Pricing:</strong> {service.pricing}</p>
                        <Link to={`/service-details/${service.id}`} className={styles.learnMoreButton}>Learn More</Link>
                    </div>
            </div>
            <h3 className={styles.cardTitle}>{service.serviceName}</h3>
        </div>
    );
};

export default ServiceCard;

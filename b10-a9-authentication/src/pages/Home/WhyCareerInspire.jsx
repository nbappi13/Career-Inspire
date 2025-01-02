import React from 'react';
import { Card, CardBody, Typography } from '@material-tailwind/react';
import '../../styles/whyCareerInspire.css';

const WhyCareerInspire = () => {
    return (
        <div className="why-career-inspire">
            <Typography variant="h2" color="blue-gray" className="mb-10">
                Why Choose Career Inspire?
            </Typography>
            <div className="reasons">
                <Card className="reason" shadow={3}>
                    <CardBody>
                        <Typography variant="h3" color="green" className="mb-3">
                            Expert Guidance
                        </Typography>
                        <Typography>
                            Our counselors are industry experts with years of experience. We provide the best guidance to help you achieve your career goals.
                        </Typography>
                    </CardBody>
                </Card>
                <Card className="reason" shadow={3}>
                    <CardBody>
                        <Typography variant="h3" color="green" className="mb-3">
                            Personalized Approach
                        </Typography>
                        <Typography>
                            We understand that every individual is unique. Our services are tailored to meet your specific needs and aspirations.
                        </Typography>
                    </CardBody>
                </Card>
                <Card className="reason" shadow={3}>
                    <CardBody>
                        <Typography variant="h3" color="green" className="mb-3">
                            Proven Success
                        </Typography>
                        <Typography>
                            With numerous success stories, our track record speaks for itself. Join the many who have transformed their careers with our help.
                        </Typography>
                    </CardBody>
                </Card>
                <Card className="reason" shadow={3}>
                    <CardBody>
                        <Typography variant="h3" color="green" className="mb-3">
                            Comprehensive Resources
                        </Typography>
                        <Typography>
                            We provide a wealth of resources, including workshops, webinars, and articles, to support your career journey.
                        </Typography>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

export default WhyCareerInspire;

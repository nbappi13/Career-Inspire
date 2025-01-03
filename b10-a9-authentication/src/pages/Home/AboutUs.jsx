import React from 'react';
import '../../styles/AboutUs.css';
import teamMember1 from '../../assets/team-member1.jpg';
import teamMember2 from '../../assets/team-member2.jpg';
import teamMember3 from '../../assets/team-member3.jpg';

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <header className="about-us-header">
                <h1>About Us</h1>
                <p className="header-description">Discover our mission, vision, and the team behind Career Inspire.</p>
            </header>
            <section className="about-us-section">
                <h2 className="section-title">Our Mission</h2>
                <p className="section-content">
                    At Career Inspire, our mission is to empower individuals to achieve their career goals through personalized guidance and support. We strive to provide the best resources and opportunities for career growth and development.
                </p>
            </section>
            <section className="about-us-section">
                <h2 className="section-title">Our Vision</h2>
                <p className="section-content">
                    Our vision is to be the leading platform for career inspiration and guidance, making a positive impact on the lives of job seekers, career changers, and professionals worldwide.
                </p>
            </section>
            <section className="about-us-section">
                <h2 className="section-title">Meet the Team</h2>
                <div className="team-members">
                    <div className="team-member">
                        <img src={teamMember1} alt="Team Member 1" className="team-member-photo"/>
                        <h3 className="team-member-name">Jane Smith</h3>
                        <p className="team-member-role">Founder & CEO</p>
                    </div>
                    <div className="team-member">
                        <img src={teamMember2} alt="Team Member 2" className="team-member-photo"/>
                        <h3 className="team-member-name">John Doe</h3>
                        <p className="team-member-role">Chief Career Counselor</p>
                    </div>
                    <div className="team-member">
                        <img src={teamMember3} alt="Team Member 3" className="team-member-photo"/>
                        <h3 className="team-member-name">Emily Johnson</h3>
                        <p className="team-member-role">Marketing Director</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;

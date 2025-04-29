import React from 'react';
import './about.css'; // Import a CSS file for styling
import Footer from '../../components/footer';


export default function About() {
    return (
        <>
            <div className="about-container">
                {/* Hero Section */}
                <div className="about-hero">
                    <h1>About Rentiz</h1>
                    <p>Your trusted partner in finding the perfect space for living, dining, and more.</p>
                </div>

                {/* Introduction Section */}
                <div className="about-section">
                    <h2>Welcome to Rentiz</h2>
                    <p>
                        At Rentiz, we believe that finding the perfect space should be easy, fast, and reliable.
                        Whether you're looking for a cozy home, a modern apartment, or a vibrant restaurant space,
                        Rentiz connects you with the best options tailored to your needs.
                    </p>
                    <img src="/about1.jpg" alt="Rentiz Spaces" className="about-image" />
                </div>

                {/* Key Features Section */}
                <div className="about-section">
                    <h2>Why Choose Rentiz?</h2>
                    <div className="features-grid">
                        <div className="feature">
                            <img src="/l1.png" alt="Easy to Use" />
                            <h3>Easy to Use</h3>
                            <p>Our platform is designed to make your search simple and hassle-free.</p>
                        </div>
                        <div className="feature">
                            <img src="/l2.png" alt="Wide Range" />
                            <h3>Wide Range</h3>
                            <p>Explore thousands of properties and spaces across the city.</p>
                        </div>
                        <div className="feature">
                            <img src="/l3.png" alt="Trusted Partners" />
                            <h3>Trusted Partners</h3>
                            <p>We work with verified landlords and businesses to ensure quality.</p>
                        </div>
                    </div>
                </div>

                {/* Testimonials Section */}
                <div className="about-section testimonials">
                    <h2>What Our Customers Say</h2>
                    <div className="testimonials-grid">
                        <div className="testimonial">
                            <img src="/c3.jpg" alt="User 1" />
                            <p>"Rentiz helped me find my dream home in just a few clicks. Highly recommended!"</p>
                            <h4>- John Doe</h4>
                        </div>
                        <div className="testimonial">
                            <img src="/c2.jpg" alt="User 2" />
                            <p>"The restaurant spaces listed on Rentiz are amazing. Found the perfect spot for my cafe!"</p>
                            <h4>- Jane Smith</h4>
                        </div>
                        <div className="testimonial">
                            <img src="/c1.jpg" alt="User 3" />
                            <p>"Great platform with a wide range of options. Very user-friendly!"</p>
                            <h4>- Mike Johnson</h4>
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div className="about-section team">
                    <h2>Meet Our Team</h2>
                    <div className="team-grid">
                        <div className="team-member">
                            <img src="/t3.jpg" alt="Team Member 1" />
                            <h3>Alice Brown</h3>
                            <p>CEO & Founder</p>
                        </div>
                        <div className="team-member">
                            <img src="/t2.jpg" alt="Team Member 2" />
                            <h3>Bob Green</h3>
                            <p>CTO</p>
                        </div>
                        <div className="team-member">
                            <img src="/t1.jpg" alt="Team Member 3" />
                            <h3>Charlie White</h3>
                            <p>Head of Operations</p>
                        </div>
                    </div>
                </div>

                {/* Call to Action Section */}
                <div className="about-cta">
                    <h2>Ready to Find Your Perfect Space?</h2>
                    <p>Join thousands of satisfied users and start your journey with Rentiz today.</p>
                    <button className="cta-button">Explore Rentiz</button>
                </div>

            </div>
            <Footer style={{ marginTop: "50px" }} />
        </>
    );
}
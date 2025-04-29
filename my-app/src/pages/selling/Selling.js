import React from 'react';
import './selling.css'; // Import CSS for styling
import Footer from '../../components/footer';


export default function SellingPage() {
    return (
        <>
            <div className="selling-page">
                {/* Hero Section */}
                <div className="hero-section">
                    <h1>Sell Your Property with Rentiz</h1>
                    <p>Reach thousands of potential buyers and sell your property quickly and easily.</p>
                    <button>List Your Property</button>
                </div>

                {/* Selling Process Section */}
                <div className="selling-process">
                    <h2>How It Works</h2>
                    <div className="process-steps">
                        <div className="step">
                            <img src="/h2.jpg" alt="Step 1" />
                            <h3>List Your Property</h3>
                            <p>Create listing with photos, description, and price.</p>
                        </div>
                        <div className="step">
                            <img src="/h3.jpg" alt="Step 2" />
                            <h3>Get Noticed</h3>
                            <p>Your property will be seen by thousands of potential buyers.</p>
                        </div>
                        <div className="step">
                            <img src="/h4.jpg" alt="Step 3" />
                            <h3>Close the Deal</h3>
                            <p>Negotiate and finalize the sale with interested buyers.</p>
                        </div>
                    </div>
                </div>

                {/* Benefits Section */}
                <div className="benefits-section">
                    <h2>Why Sell with Rentiz?</h2>
                    <div className="benefits-grid">
                        <div className="benefit">
                            <img src="/c1.jpg" alt="Benefit 1" />
                            <h3>Wide Reach</h3>
                            <p>Your property will be visible to a large audience of buyers.</p>
                        </div>
                        <div className="benefit">
                            <img src="/c2.jpg" alt="Benefit 2" />
                            <h3>Easy Listing</h3>
                            <p>Our platform makes it simple to create and manage listings.</p>
                        </div>
                        <div className="benefit">
                            <img src="/c3.jpg" alt="Benefit 3" />
                            <h3>Secure Transactions</h3>
                            <p>We ensure safe and secure transactions for all parties.</p>
                        </div>
                    </div>
                </div>

                {/* Testimonials Section */}
                <div className="testimonials-section">
                    <h2>What Our Sellers Say</h2>
                    <div className="testimonials-grid">
                        <div className="testimonial">
                            <img src="/t1.jpg" alt="Seller 1" />
                            <p>"Rentiz helped me sell my property quickly and at a great price. Highly recommended!"</p>
                            <h4>- Sarah Johnson</h4>
                        </div>
                        <div className="testimonial">
                            <img src="/t2.jpg" alt="Seller 2" />
                            <p>"The platform is easy to use, and I got multiple offers within days."</p>
                            <h4>- Michael Brown</h4>
                        </div>
                        <div className="testimonial">
                            <img src="/t3.jpg" alt="Seller 3" />
                            <p>"Great service and support. My property was sold in no time!"</p>
                            <h4>- Emily Davis</h4>
                        </div>
                    </div>
                </div>

                {/* Call to Action Section */}
                <div className="cta-section">
                    <h2>Ready to Sell Your Property?</h2>
                    <p>Join thousands of sellers and start your journey with Rentiz today.</p>
                    <button>List Your Property</button>
                </div>
            </div>
            <Footer style={{ marginTop: "150px" }} />
        </>

    );
}
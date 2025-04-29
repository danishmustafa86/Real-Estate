import React from 'react';
import './buying.css'; // Import CSS for styling
import Footer from '../../components/footer';

export default function BuyingPage() {
    // Sample property data
    const properties = [
        {
            id: 1,
            type: "Apartment",
            image: "/h2.jpg",
            title: "Luxury 3-Bedroom Apartment",
            location: "Downtown, City A",
            price: "$1,200/month",
            description: "Spacious and modern apartment with stunning city views.",
        },
        {
            id: 2,
            type: "House",
            image: "/h3.jpg",
            title: "Cozy 2-Bedroom House",
            location: "Suburban, City B",
            price: "$900/month",
            description: "Perfect for small families, with a beautiful garden.",
        },
        {
            id: 3,
            type: "Restaurant",
            image: "/h4.jpg",
            title: "Vibrant Restaurant Space",
            location: "City Center, City C",
            price: "$2,500/month",
            description: "Ideal for food businesses, fully equipped kitchen.",
        },
    ];

    return (
        <>
            <div className="buying-page">
                {/* Hero Section */}
                <div className="hero-section">
                    <h1>Find Your Perfect Space with Rentiz</h1>
                    <p>Explore thousands of homes, apartments, and restaurant spaces tailored to your needs.</p>
                    <div className="search-bar">
                        <input type="text" placeholder="Search by location, type, or price..." />
                        <button>Search</button>
                    </div>
                </div>

                {/* Property Listings */}
                <div className="property-listings">
                    <h2>Featured Properties</h2>
                    <div className="properties-grid">
                        {properties.map((property) => (
                            <div key={property.id} className="property-card">
                                <img src={property.image} alt={property.title} />
                                <div className="property-details">
                                    <h3>{property.title}</h3>
                                    <p><strong>Location:</strong> {property.location}</p>
                                    <p><strong>Price:</strong> {property.price}</p>
                                    <p>{property.description}</p>
                                    <button>View Details</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Testimonials Section */}
                <div className="testimonials-section">
                    <h2>What Our Customers Say</h2>
                    <div className="testimonials-grid">
                        <div className="testimonial">
                            <img src="/c1.jpg" alt="User 1" />
                            <p>"Rentiz helped me find the perfect apartment in no time. Highly recommended!"</p>
                            <h4>- John Doe</h4>
                        </div>
                        <div className="testimonial">
                            <img src="/c2.jpg" alt="User 2" />
                            <p>"The restaurant spaces listed on Rentiz are amazing. Found the perfect spot for my cafe!"</p>
                            <h4>- Jane Smith</h4>
                        </div>
                        <div className="testimonial">
                            <img src="/c3.jpg" alt="User 3" />
                            <p>"Great platform with a wide range of options. Very user-friendly!"</p>
                            <h4>- Mike Johnson</h4>
                        </div>
                    </div>
                </div>

                {/* Call to Action Section */}
                <div className="cta-section">
                    <h2>Ready to Find Your Perfect Space?</h2>
                    <p>Join thousands of satisfied users and start your journey with Rentiz today.</p>
                    <button>Explore Rentiz</button>
                </div>
            </div>
            <Footer style={{ marginTop: "50px" }} />
        </>
    );
}
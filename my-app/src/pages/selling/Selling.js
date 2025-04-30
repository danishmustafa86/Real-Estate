import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    createSellingPost,
    deleteSellingPost,
    updateSellingPost,
    getSellingPosts
} from '../../store/slices/sellingpost.slice';
import './selling.css';
import Footer from '../../components/footer';

export default function SellingPage() {
    const dispatch = useDispatch();

    // Form States
    const [title, setTitle] = useState("");
    const [propertyType, setPropertyType] = useState("");
    const [area, setArea] = useState("");
    const [id, setId] = useState(null);
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [image, setImage] = useState(null);

    // Redux State
    const sellingPosts = useSelector(state => state.sellingPostSlice.sellingPosts);
    const loading = useSelector(state => state.sellingPostSlice.loading);
    const error = useSelector(state => state.sellingPostSlice.error);

    useEffect(() => {
        dispatch(getSellingPosts());
    }, [dispatch]);

    const handleSubmit = () => {
        if (id) {
            dispatch(updateSellingPost({
                sellingPostId: id,
                updatedData: { title, propertyType, area, price, description, location, image }
            }));
        } else {
            dispatch(createSellingPost({
                title,
                propertyType,
                area,
                price,
                description,
                location,
                image
            }));
        }
        // Reset form
        setTitle("");
        setPropertyType("");
        setArea("");
        setPrice("");
        setDescription("");
        setLocation("");
        setId(null);
        setImage(null);
    };

    return (
        <>
            <div>
                <h1>Enter your property detail</h1>
                <div className="inputInfo2">
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter Property Title" />
                    <input type="text" value={propertyType} onChange={(e) => setPropertyType(e.target.value)} placeholder="Enter Property Type" />
                    <input type="number" value={area} onChange={(e) => setArea(e.target.value)} placeholder="Enter Area in sq ft" />
                    <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter Price" />
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter Description" />
                    <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Enter Location" />
                    <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                    <button onClick={handleSubmit}>
                        {id ? "Update Property" : "Add Property"}
                    </button>
                </div>

                <h1>Posts List</h1>
                {loading && <p>Loading posts...</p>}
                {error && <p style={{ color: 'red' }}>Error: {error}</p>}
                <div>
                    {sellingPosts.map((post) => (
                        <div key={post.id} className="post-item">
                            <h2>{post.title}</h2>
                            <p>Property Type: {post.propertyType}</p>
                            <p>Area: {post.area} sq ft</p>
                            <p>Price: {post.price}</p>
                            <p>Description: {post.description}</p>
                            <p>Location: {post.location}</p>
                            {post.image && (
                                <img
                                    src={typeof post.image === "string" ? post.image : URL.createObjectURL(post.image)}
                                    alt={`Property: ${post.title}`}
                                    style={{ width: "100px", height: "100px" }}
                                />
                            )}
                            <button onClick={() => dispatch(deleteSellingPost(post.id))}>Delete</button>
                            <button onClick={() => {
                                setTitle(post.title);
                                setPropertyType(post.propertyType);
                                setArea(post.area);
                                setPrice(post.price);
                                setDescription(post.description);
                                setLocation(post.location);
                                setId(post.id);
                                setImage(post.image);
                            }}>
                                Edit
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Marketing and Info Section */}
            <div className="selling-page">
                <div className="hero-section">
                    <h1>Sell Your Property with Rentiz</h1>
                    <p>Reach thousands of potential buyers and sell your property quickly and easily.</p>
                    <button>List Your Property</button>
                </div>

                <div className="selling-process">
                    <h2>How It Works</h2>
                    <div className="process-steps">
                        <div className="step">
                            <img src="/h2.jpg" alt="List Your Property" />
                            <h3>List Your Property</h3>
                            <p>Create listing with photos, description, and price.</p>
                        </div>
                        <div className="step">
                            <img src="/h3.jpg" alt="Get Noticed" />
                            <h3>Get Noticed</h3>
                            <p>Your property will be seen by thousands of potential buyers.</p>
                        </div>
                        <div className="step">
                            <img src="/h4.jpg" alt="Close the Deal" />
                            <h3>Close the Deal</h3>
                            <p>Negotiate and finalize the sale with interested buyers.</p>
                        </div>
                    </div>
                </div>

                <div className="benefits-section">
                    <h2>Why Sell with Rentiz?</h2>
                    <div className="benefits-grid">
                        <div className="benefit">
                            <img src="/c1.jpg" alt="Wide Reach" />
                            <h3>Wide Reach</h3>
                            <p>Your property will be visible to a large audience of buyers.</p>
                        </div>
                        <div className="benefit">
                            <img src="/c2.jpg" alt="Easy Listing" />
                            <h3>Easy Listing</h3>
                            <p>Our platform makes it simple to create and manage listings.</p>
                        </div>
                        <div className="benefit">
                            <img src="/c3.jpg" alt="Secure Transactions" />
                            <h3>Secure Transactions</h3>
                            <p>We ensure safe and secure transactions for all parties.</p>
                        </div>
                    </div>
                </div>

                <div className="testimonials-section">
                    <h2>What Our Sellers Say</h2>
                    <div className="testimonials-grid">
                        <div className="testimonial">
                            <img src="/t1.jpg" alt="Seller Testimonial 1" />
                            <p>"Rentiz helped me sell my property quickly and at a great price. Highly recommended!"</p>
                            <h4>- Sarah Johnson</h4>
                        </div>
                        <div className="testimonial">
                            <img src="/t2.jpg" alt="Seller Testimonial 2" />
                            <p>"The platform is easy to use, and I got multiple offers within days."</p>
                            <h4>- Michael Brown</h4>
                        </div>
                        <div className="testimonial">
                            <img src="/t3.jpg" alt="Seller Testimonial 3" />
                            <p>"Great service and support. My property was sold in no time!"</p>
                            <h4>- Emily Davis</h4>
                        </div>
                    </div>
                </div>

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

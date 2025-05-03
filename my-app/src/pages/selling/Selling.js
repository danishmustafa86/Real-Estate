import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    deleteSellingPost,
    updateSellingPost,
    getSellingPosts
} from '../../store/slices/sellingpost.slice';
import './selling.css';
import Footer from '../../components/footer';
import { Link, useNavigate } from 'react-router-dom';

export default function SellingPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [propertyType, setPropertyType] = useState("");
    const [area, setArea] = useState("");
    const [id, setId] = useState(null);
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [image, setImage] = useState(null);

    const sellingPosts = useSelector(state => state.sellingPostSlice.sellingPosts);
    const loading = useSelector(state => state.sellingPostSlice.loading);
    const error = useSelector(state => state.sellingPostSlice.error);

    useEffect(() => {
        dispatch(getSellingPosts());
    }, [dispatch]);

    const handleSubmit = () => {
        if (!title || !propertyType || !area || !price || !description || !location) {
            alert("Please fill all fields");
            return;
        }

        dispatch(updateSellingPost({
            sellingPostId: id,
            updatedData: { title, propertyType, area, price, description, location, image }
        }));

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
            <div className="page-container">
                <h1 style={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                    Enter your property detail
                </h1>
                <div className="center-container">
                    <Link to="/createpost" className="create-post-link">
                        <button>Create Post</button>
                    </Link>
                </div>
                <h1 style={{display: "flex", justifyContent:"center", alignItems:"center", textAlign:"center"}}>Posts List</h1>
                {loading && <p className="loading">Loading posts...</p>}
                {error && <p className="error">Error: {error}</p>}

                <div className="posts-container">
                    {sellingPosts.map((post) => (
                        <div className="post-wrapper">

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
                                        className="post-image"
                                    />
                                )}
                                <div className="button-group">
                                    <button onClick={() => {
                                        if (window.confirm("Are you sure you want to delete this post?")) {
                                            dispatch(deleteSellingPost(post.id));
                                        }
                                    }}>Delete</button>

                                    <button onClick={() => {
                                        setTitle(post.title);
                                        setPropertyType(post.propertyType);
                                        setArea(post.area);
                                        setPrice(post.price);
                                        setDescription(post.description);
                                        setLocation(post.location);
                                        setId(post.id);
                                        setImage(post.image);
                                    }}>Edit</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {id !== null && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h2>Edit Property Post</h2>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter Property Title" />
                        <input type="text" value={propertyType} onChange={(e) => setPropertyType(e.target.value)} placeholder="Enter Property Type" />
                        <input type="number" value={area} onChange={(e) => setArea(e.target.value)} placeholder="Enter Area in sq ft" />
                        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter Price" />
                        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter Description" />
                        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Enter Location" />
                        <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
                        {image && (
                            <img

                                src={typeof image === "string" ? image : URL.createObjectURL(image)}
                                alt="Preview"
                                className="preview-image"
                            />
                        )}
                        <div className="modal-buttons">
                            <button onClick={handleSubmit}>Update Post</button>
                            <button onClick={() => setId(null)}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}

            <Footer style={{ marginTop: "150px" }} />
        </>
    );
}

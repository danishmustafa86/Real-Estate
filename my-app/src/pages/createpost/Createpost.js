import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createObject } from "../../store/slices/object.slice";
import { Link, useNavigate } from "react-router-dom";

export default function Createpost() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [property, setProperty] = useState("");
    const [area, setArea] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [image, setImage] = useState(null);

    const goBack = () => {
        navigate("/Selling"); // Go back to the previous page
    }

    const onClickHandler = async () => {
        if (!title || !property || !area || !price || !description || !location) {
            alert("Please fill all fields");
            return;
        }

        const formData = {
            title: title,
            property: property,
            area: area,
            price: price,
            description: description,
            location: location,
            image: image,
        };
        await dispatch(createObject(formData)); // Assuming createPost is an async action
        goBack(); // Navigate back after creating the post
        // Reset form
        setTitle("");
        setProperty("");
        setArea("");
        setPrice("");
        setDescription("");
        setLocation("");
        setImage(null); // Reset image as well
        
        }

  return (
    <div>
        <Link to="/Selling" onClick={goBack} style={{ textDecoration: "none", color: "blue" }}>
            <h2>Go Back to Selling Page</h2>
        </Link>
        <h1>Create Posts</h1>
        <input type="text" placeholder="Title" value={title || ""} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Property Type" value={property || ""} onChange={(e) => setProperty(e.target.value)} />
        <input type="text" placeholder="Area" value={area || ""} onChange={(e) => setArea(e.target.value)} />
        <input type="text" placeholder="Price" value={price || ""} onChange={(e) => setPrice(e.target.value)} />
        <input type="text" placeholder="Description" value={description || ""} onChange={(e) => setDescription(e.target.value)} />
        <input type="text" placeholder="Location" value={location || ""} onChange={(e) => setLocation(e.target.value)} />
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <button onClick={onClickHandler}>
            Create Post
        </button>
    
    </div>
  )
}

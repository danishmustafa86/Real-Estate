import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createObject } from "../../store/slices/object.slice";
import { Link, useNavigate } from "react-router-dom";
import "./Createpost.css"; // Import your CSS file


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
        if (!title || !property || !area || !price || !description || !location || !image) {
            alert("Please fill all fields including image");
            return;
        }

        try {
            // Upload image to Cloudinary
            const formData = new FormData();
            formData.append("file", image);
            formData.append("upload_preset", "rentiz_images_testing"); // Replace with your actual preset
            const response = await fetch("https://api.cloudinary.com/v1_1/dftvq72vj/image/upload", {
                method: "POST",
                body: formData
            });

            const data = await response.json();
            const imageUrl = data.secure_url;

            // Now dispatch with image URL
            const postData = {
                title,
                property,
                area,
                price,
                description,
                location,
                image: imageUrl, // Use the URL here
            };

            await dispatch(createObject(postData));
            goBack(); // Go back after posting

            // Reset fields
            setTitle("");
            setProperty("");
            setArea("");
            setPrice("");
            setDescription("");
            setLocation("");
            setImage(null);
        } catch (error) {
            console.error("Image upload failed", error);
            alert("Image upload failed. Try again.");
        }
    };
    return (
        <div className="create-post-container">
            <Link to="/Selling" onClick={goBack}>
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

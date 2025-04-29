import React from 'react';
import './productCard.css';

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-category">{product.category}</p>
      <p className="product-description">{product.description}</p>
      <p className="product-price"><strong>Price:</strong> ${product.price}</p>
      <p className="product-rating">
        <strong>Rating:</strong> ⭐ {product.rating.rate} ({product.rating.count} reviews)
      </p>
    </div>
  );
}

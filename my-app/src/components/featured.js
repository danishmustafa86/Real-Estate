import React from 'react';
import './featured.css';

export default function Featured() {
  return (
    <div className="featured-section">
      <div className="featured-header">
        <h1>Featured In</h1>
      </div>
      <div className="featured-container">
        <img src="/vintage.png" alt="Vin-Tage" />
        <img src="/violet.png" alt="Violet" />
        <img src="/ceathes.png" alt="Ceathes" />
        <img src="/creatorfav.png" alt="Creator Fav" />
        <img src="/lavenderagency.png" alt="Lavender Agency" />
      </div>
    </div>
  );
}
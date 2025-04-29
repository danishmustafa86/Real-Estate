import React from 'react';
import '../App.css';
import './mainpage.css';

export default function MyMainPage() {
  return (
    <div>
      <div className="mainpage-container">
        <div className="text-container">
          <h1>Perfect Way To Buy And Sell A Home</h1>

          <p>Diam vitae, nec mattis lectus quam pretium amet facilisis. Urna, massa aliqua pulmonarque. Ac gravida in eget non amet eget purus non.</p>
          <div className="search-container">
            <select>
              <option value="buy">Purpose - Buy</option>
              <option value="rent">Purpose - Rent</option>
            </select>
            <select>
              <option value="toronto">Toronto, Canada</option>
              <option value="newyork">New York, USA</option>
            </select>
            <select>
              <option value="industrial">Industrial Home</option>
              <option value="residential">Residential Home</option>
            </select>
            <button>Search</button>
          </div>
        </div>
        <div className="image-container">
          <img src="/m1.png" alt="Home" />
        </div>

      </div>
    </div>
  );
}
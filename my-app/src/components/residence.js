import React from 'react';
import './residence.css'; // Assuming you have a CSS file for styling

export default function Residence() {
    const residencies = {
        residence1: {
            image: '/m2.png',
            name: 'Aliva Priva Jalvin',
            location: '1087 pin Oak Drive, USA',
            area: {
                img1: '/l1.png',
                Beds: 4,
                img2: '/l2.png',
                Bath: 2,
                img3: '/l3.png',
                sqft: '1203 Sqft'
            }
        },
        residence2: {
            image: '/m3.png',
            name: 'Aliva Priva Jalvin',
            location: '1087 pin Oak Drive, USA',
            area: {
                img1: '/l1.png',
                Beds: 4,
                img2: '/l2.png',
                Bath: 2,
                img3: '/l3.png',
                sqft: '1203 Sqft'
            }
        },
        residence3: {
            image: '/m4.png',
            name: 'Aliva Priva Jalvin',
            location: '1087 pin Oak Drive, USA',
            area: {
                img1: '/l1.png',
                Beds: 4,
                img2: '/l2.png',
                Bath: 2,
                img3: '/l3.png',
                sqft: '1203 Sqft'
            }
        }
    };

    return (
        <section className="residence-section">
            <h1>Popular Residence</h1>
            <div className="residence-list">
                {Object.values(residencies).map((residence, index) => (
                    <article key={index} className="residence-card">
                        <img src={residence.image} alt="Residence" className="residence-image" />
                        <h4>{residence.name}</h4>
                        <h8>{residence.location}</h8>
                        <div className="area-details">
                            <div>
                                <img src={residence.area.img1} alt="Beds" />
                                <h6>{residence.area.Beds} Beds</h6>
                            </div>
                            <div>
                                <img src={residence.area.img2} alt="Bath" />
                                <h6>{residence.area.Bath} Bath</h6>
                            </div>
                            <div>
                                <img src={residence.area.img3} alt="Sqft" />
                                <h6>{residence.area.sqft}</h6>
                            </div>
                        </div>

                    </article>
                ))}
            </div>
            <div className='viewproperties'>
                <img  src="/btn2.png" alt="View All Properties " />
            </div>
        </section>
    );
}
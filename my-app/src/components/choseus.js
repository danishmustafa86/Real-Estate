import React from 'react';
import './choseus.css'; // Import the CSS file

export default function ChoseUS() {
    const choseUs = [
        {
            img1: '/circle.png', // Background circle image
            icons: ['/lo1.png'], // Icons to place over the circle
            title: 'Easy To Find',
            desc: 'Urna, massa aliqua dui pellentesque. Ac, gravida in. Diam vitae, nec mattis lectus quam pretium amet facilisis.'
        },
        {
            img1: '/circle.png',
            icons: ['/lo2.png'],
            title: 'Affordable Prices',
            desc: 'Urna, massa aliqua dui pellentesque. Ac, gravida in. Diam vitae, nec mattis lectus quam pretium amet facilisis.'
        },
        {
            img1: '/circle.png',
            icons: ['/lo3.png'],
            title: 'Quickly Process',
            desc: 'Urna, massa aliqua dui pellentesque. Ac, gravida in. Diam vitae, nec mattis lectus quam pretium amet facilisis.'
        },
    ];

    return (
        <div className="why-choose-us">
            <h1>Why To Choose Us</h1>
            <div className="choseus">
                {choseUs.map((item, index) => (
                    <div className="chosediv" key={index}>
                        <div className="icon-container">
                            <img src={item.img1} alt="Circle" className="circle-icon" />
                            {item.icons.map((icon, i) => (
                                <img key={i} src={icon} alt={`Icon ${i + 1}`} className={`icon icon-${i + 1}`} />
                            ))}
                        </div>
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                    </div>
                ))}
            </div>

            {/* Testimonial Section */}
            <div className="testimonial-section">
                <div className="testimonial-content">
                    <img src="/quotes.png" alt="Quote" />
                    <p className="testimonial-quote">
                        Massa Semper Non Rutrum Orci Facilisi Sit. Lectus Porta Quam  
                        A Fringilla Eget Viverra Sem. Vulputate Massa Hendrerit Turpis  
                        Gravida Tempor, Porttitor.
                    </p>
                    <div className="author">
                        <h4>Elena Pravo</h4>
                        <p>Cao, Upstate</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
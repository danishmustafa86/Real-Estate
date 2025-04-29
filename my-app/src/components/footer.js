import React from 'react';
import FooterCard from '../pages/footer/FooterCard.js';
import './footer.css';

export default function Footer() {
    const footerData = [
        { id: 1, title: "Project", links: ["Houses", "Rooms", "Flats", "Appartments"] },
        { id: 2, title: "Company", links: ["How we work?", "Capital", "Security"] },
        { id: 3, title: "Movement", links: ["Who are we", "Support us"] },
        { id: 4, title: "Help", links: ["Privacy", "Condition", "Blog", "FAQs"] },
    ];

    const socialIcons = [
        { id: 1, img: "instagram.png", alt: "instagram" },
        { id: 2, img: "facebook.png", alt: "facebook" },
        { id: 3, img: "Twitter.png", alt: "twitter" },
        { id: 4, img: "youtube.png", alt: "youtube" },
    ];

    return (
        <div className="footer">
            <div className="footertop">
                <div className="footer-left">
                    <img src="./logo.png" alt="Rentiz" />
                    <p>Neque, vestibulum sed varius magna et at. Eu, adipiscing morbi augue.</p>
                    <ul className="social-icons">
                        {socialIcons.map((icon) => (
                            <li key={icon.id}>
                                <img src={icon.img} alt={icon.alt} />
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="footer-container">
                    {footerData.map((section) => (
                        <FooterCard key={section.id} title={section.title} links={section.links} />
                    ))}
                </div>
            </div>

            <div className="footer-bottom">
                <p className="pleft">Copyright © Template=Jungle. 2022. All right reserved.</p>
                <p className="pright">Design by: Template=Jungle</p>
            </div>
        </div>
    );
}
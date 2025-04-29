import React from 'react';

export default function FooterCard(props) {
    return (
        <div className="footer-card">
            <h3>{props.title}</h3>
            <ul>
                {props.links.map((link, index) => (
                    <li key={index}>{link}</li>
                ))}
            </ul>
        </div>
    );
}
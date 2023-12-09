import React from 'react';

function Card({ title, description, imageUrl, onClick }) {
    return (
        <a href="#" className="card" onClick={onClick}>
            <img src={imageUrl} alt={title} className="card-image" />
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
            </div>
        </a>
    );
}

export default Card;
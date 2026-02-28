import React from 'react';

const Card = ({ title, image, description, onClick }) => {
    const cardStyle = {
        position: 'relative',
        width: '300px',
        backgroundColor: '#fff',
        borderRadius: '20px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        padding: '20px',
        margin: '10px',
        transition: 'all 0.3s ease-in-out',
        cursor: 'pointer',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    };

    const imageStyle = {
        width: '100%',
        height: '200px',
        objectFit: 'cover',
        borderRadius: '15px',
        marginBottom: '15px',
    };

    return (
        <div
            style={cardStyle}
            onClick={onClick}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
        >
            <img src={image} alt={title} style={imageStyle} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Card;

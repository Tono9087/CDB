import React, { useState } from 'react';

const Card = ({ title, image, description }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const cardStyle = {
        position: isExpanded ? 'fixed' : 'relative',
        top: isExpanded ? '50%' : 'auto',
        left: isExpanded ? '50%' : 'auto',
        transform: isExpanded ? 'translate(-50%, -50%) scale(1.1)' : 'scale(1)',
        width: isExpanded ? '80vw' : '300px',
        height: isExpanded ? '80vh' : 'auto',
        zIndex: isExpanded ? 1000 : 1,
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
        justifyContent: isExpanded ? 'center' : 'flex-start',
    };

    const imageStyle = {
        width: '100%',
        height: isExpanded ? '50%' : '200px',
        objectFit: 'cover',
        borderRadius: '15px',
        marginBottom: '15px',
    };

    const overlayStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 999,
        display: isExpanded ? 'block' : 'none',
    };

    return (
        <>
            <div style={overlayStyle} onClick={toggleExpand}></div>
            <div
                style={cardStyle}
                onClick={toggleExpand}
                onMouseEnter={(e) => { if (!isExpanded) e.currentTarget.style.transform = 'scale(1.05)'; }}
                onMouseLeave={(e) => { if (!isExpanded) e.currentTarget.style.transform = 'scale(1)'; }}
            >
                <img src={image} alt={title} style={imageStyle} />
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </>
    );
};

export default Card;

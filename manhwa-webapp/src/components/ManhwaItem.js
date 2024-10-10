import React from 'react';

const ManhwaItem = ({ title, genre, description, image }) => {
  return (
    <div className="manhwa-item">
      <img src={image} alt={title} style={{ width: '200px', height: '300px' }} />
      <h2>{title}</h2>
      <p><strong>Genre:</strong> {genre}</p>
      <p>{description}</p>
    </div>
  );
};

export default ManhwaItem;

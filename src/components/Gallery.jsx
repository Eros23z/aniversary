// src/components/Gallery.jsx
import React from 'react';
import { photos } from '../data/gallery-data.js';

const Gallery = () => {
  return (
    <div className="gallery-grid">
      {photos.map((photo, index) => (
        <div className="photo-frame" key={index}>
          <img src={photo.src} alt={photo.caption} loading="lazy" />
          <div className="photo-caption">{photo.caption}</div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
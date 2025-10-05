// src/components/ScrollToMusicButton.jsx
import React from 'react';

const ScrollToMusicButton = () => {
  const handleScroll = () => {
    const musicSection = document.getElementById('banda-sonora');
    if (musicSection) {
      musicSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button className="scroll-to-music-btn" onClick={handleScroll}>
      Escuchar Nuestra Banda Sonora
    </button>
  );
};

export default ScrollToMusicButton;
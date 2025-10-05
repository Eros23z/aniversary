// src/components/Soundtrack.jsx
import React from 'react';

const Soundtrack = () => {
  // 1. Asegúrate de que tu código de Spotify esté pegado aquí
  const spotifyEmbedCode = '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/playlist/48yrSslyzlSjDkLLASFvSr?utm_source=generator&theme=0&autoplay=1" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';

  return (
    <div className="soundtrack-container">
      <p className="soundtrack-intro">
        Cada nota, un recuerdo. Cada canción, un capítulo de nuestra eternidad.
      </p>
      <div 
        className="spotify-embed-wrapper"
        // 2. LA CORRECCIÓN ESTÁ AQUÍ
        // Le pasamos un objeto con la clave __html, que contiene nuestro código.
        dangerouslySetInnerHTML={{ __html: spotifyEmbedCode }} 
      />
    </div>
  );
};

export default Soundtrack;
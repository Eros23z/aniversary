// src/components/LoadingScreen.jsx
import React, { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [visible, setVisible] = useState(true);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    // Inicia el desvanecimiento después de 3 segundos
    const fadeTimer = setTimeout(() => {
      setFadingOut(true);
    }, 3000); // 3 segundos

    // Oculta completamente el componente después de la animación de desvanecimiento
    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 4000); // 3s de espera + 1s de animación

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className={`loading-overlay ${fadingOut ? 'fade-out' : ''}`}>
      <div className="loading-content">
        <img src="/Heartagram.png" alt="Cargando..." className="loading-heartagram" />
      </div>
    </div>
  );
};

export default LoadingScreen;
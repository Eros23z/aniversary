// src/components/SealedMessage.jsx
import React, { useState } from 'react';
// Ya no importamos HeartagramIcon

const SealedMessage = () => {
  const [isSealed, setIsSealed] = useState(true);

  if (isSealed) {
    return (
      <div className="sealed-container">
        <p>Un pacto sellado, solo para tus ojos...</p>
        <button
          className="wax-seal"
          onClick={() => setIsSealed(false)}
          aria-label="Romper el sello"
        >
          {/* Usamos la imagen PNG aquí */}
          <img 
            src="/Heartagram.png" // Ruta a tu imagen
            alt="Heartagram" 
            style={{ width: '60%', height: '60%', objectFit: 'contain' }} // Estilos para que encaje bien
          />
        </button>
      </div>
    );
  }

  return (
    <div className="letter">
      <h3>Mi Amor Eterno,</h3>
      <p>
        Si estás leyendo esto, es porque nuestro pacto sigue tan fuerte como el primer día.
        Cada momento a tu lado es un verso en el poema más hermoso que jamás pude imaginar...
      </p>
      <p>
        Gracias por ser mi oscuridad y mi luz, mi tormenta y mi calma.
      </p>
      <p className="signature">
        Tuyo para siempre,<br />
        Eros
      </p>
    </div>
  );
};

export default SealedMessage;
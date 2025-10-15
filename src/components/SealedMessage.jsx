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
        Éste ha sido un año hermoso para nosotros, nuestro amor mas fuerte que nunca, únidos
        a través de las adversidades. Pero también ha sido un año difícil en lo económico.
        Me disculpo por no ser capaz de conceder todos tus deseos y anhelos en estos momentos,
        te regalaría la luna si pudiera. A lo largo de éste año he cambiado mi enfoque 
        cientos de veces en la lucha de mejorar nuestra economía y la situación me ha 
        sobrepasado muchas veces. 
      </p>
      <p>
        Intento cada dia ser mejor para vos y me centro en aprender
        para mejorar nuestra situación, y entiendo que a veces sientas que mi atención no 
        está totalmente puesta en vos, y es lo que mas deseo, pero quiero esforzarme para 
        un futuro mejor para nosotros y poder construir nuestro imperio de amor soñado,
        nuestro hogar con las decoraciones que siempre soñamos.
      </p>
      <p>
        Mi motor de impulso sos vos, que estés conmigo y agradezco infinitamente tu apoyo
        cuando incluso ni yo me siento suficiente para el mundo y me encuentro frustrado con
        todo. 
      </p>
      <p>
        A pesar de todo, ha sido un año increíble, el dia a dia con vos, los besos que nunca 
        faltan, y disfruto tanto verte cada día, porque nada puede ser mejor sin vos.
      </p>
      <p>
        Mi amor por vos no va a cambiar nunca y te prometo mi corazón por siempre, porque 
        nunca fue mío, siempre estuvo en tu poder. Y puedo ofrecerte hasta mi alma y mis 
        huesos, porque un amor como el nuestro, no se encuentra dos veces en la vida.
      </p>
      <p>
        Nuestro amor jamás será igualado.
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
import React, { useState } from 'react';

export default function MensajeSecreto() {
  const [revelado, setRevelado] = useState(false);

  // Si no ha sido revelado, muestra un botón
  if (!revelado) {
    return <button onClick={() => setRevelado(true)}>Toca aquí si te atreves...</button>;
  }

  // Al hacer clic, muestra el mensaje
  return (
    <div>
      <p>Feliz Aniversario, mi amor eterno.</p>
    </div>
  );
}
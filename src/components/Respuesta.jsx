import { useState } from 'react';

const Respuesta = ({ respuesta }) => {
  const [correcta, setCorrecta] = useState(false);
  const [incorrecta, setIncorrecta] = useState(false);

  return (
    <div
      className={'respuesta' + (incorrecta ? ' incorrecta' : '')}
      id={correcta ? 'correcta' : ''}
      onClick={() =>
        respuesta.correcta ? setCorrecta(true) : setIncorrecta(true)
      }>
      <div className="texto">{respuesta.respuesta}</div>
    </div>
  );
};

export default Respuesta;

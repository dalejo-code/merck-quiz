import { useState } from 'react';

const Quiz = ({ preguntas }) => {
  const [stage, setStage] = useState(0);
  if (!preguntas[stage]) {
    return null;
  }
  const { pregunta, respuestas } = preguntas[stage];
  return (
    <>
      <div className="quiz-container">
        <h1>{pregunta}</h1>
        <div className="respuestas">
          {respuestas.map(res => {
            return <div className="respuesta">{res.respuesta}</div>;
          })}
        </div>
        <button onClick={stage > 0 ? () => setStage(stage - 1) : null}>
          Atras
        </button>
        <button
          onClick={
            stage < preguntas.length - 1 ? () => setStage(stage + 1) : null
          }>
          Siguiente
        </button>
      </div>
    </>
  );
};

export default Quiz;

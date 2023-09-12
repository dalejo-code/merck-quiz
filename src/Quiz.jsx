import { useState } from 'react';
import Numero from './assets/numero_pregunta.svg';
import Left from './components/Left';
import Right from './components/Right';
import Respuesta from './components/Respuesta';

const Quiz = ({ preguntas }) => {
  const [stage, setStage] = useState(0);
  if (!preguntas[stage]) {
    return null;
  }
  const { pregunta, respuestas } = preguntas[stage];
  if (stage === -2) {
    return <></>;
  }
  if (stage === -1) {
    return (
      <>
        <div></div>
      </>
    );
  }
  return (
    <>
      <div className="quiz-container">
        <div className="header pregunta">{pregunta}</div>
        <div className="numero-pregunta">
          <img src={Numero} alt="" />
          <div className="centered">{stage + 1}</div>
        </div>

        <div className="respuestas">
          {respuestas.map((respuesta, key) => {
            return <Respuesta respuesta={respuesta} key={key} />;
          })}
        </div>
        <div className="footer">
          <button onClick={stage > 0 ? () => setStage(stage - 1) : null}>
            <Left />
          </button>
          <button
            onClick={
              stage < preguntas.length - 1 ? () => setStage(stage + 1) : null
            }>
            <Right />
          </button>
        </div>
      </div>
    </>
  );
};

export default Quiz;

import { useState } from 'react';
import Numero from './assets/numero_pregunta.svg';
import Left from './components/Left';
import Right from './components/Right';
import Respuesta from './components/Respuesta';
import Inicio from './components/Inicio';
import LinearProgress from '@mui/joy/LinearProgress';

const Quiz = ({ preguntas }) => {
  const [stage, setStage] = useState(-2);
  const [questions, setQuestions] = useState(preguntas);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showJustification, setShowJustification] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [progress, setProgress] = useState(17);

  const handleAnswerClick = answer => {
    questions[currentQuestionIndex].respuestaSeleccionada = answer;
    setSelectedAnswer(
      questions[currentQuestionIndex].respuestas[respuestaSeleccionada],
    );
    setQuestions(questions);
  };
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setProgress(progress + 17);
      setShowJustification(false);
      setSelectedAnswer(null);
    }
  };
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setProgress(progress - 17);
      setShowJustification(false);
      setSelectedAnswer(null);
    }
  };
  const toggleJustification = () => {
    setShowJustification(!showJustification);
  };

  if (stage === -2) {
    console.log('stage', stage);
    return (
      <Inicio
        height="100vh"
        width="auto"
        setStage={() => setStage(stage + 2)}
      />
    );
  }
  if (stage === -1) {
    return (
      <>
        <div></div>
      </>
    );
  }

  const { pregunta, respuestas, respuestaSeleccionada } =
    questions[currentQuestionIndex];
  return (
    <>
      <div className="quiz-container">
        <div className="sidebar"></div>
        <div className="header pregunta">
          <div>{pregunta}</div>
        </div>
        <div className="numero-pregunta">
          <img src={Numero} alt="" />
          <div className="centered">{currentQuestionIndex + 1}</div>
        </div>

        <div className="respuestas">
          {respuestas.map((respuesta, key) => {
            return (
              <Respuesta
                respuesta={respuesta}
                respuestaSeleccionada={respuestaSeleccionada}
                handleAnswerClick={handleAnswerClick}
                key={key}
                currentAnswer={key}
              />
            );
          })}
        </div>
        <div className="footer">
          <button
            onClick={
              currentQuestionIndex > 0 ? () => handlePreviousQuestion() : null
            }>
            {currentQuestionIndex > 0 ? <Left /> : null}
          </button>
          <LinearProgress
            determinate
            size="lg"
            variant="outlined"
            value={progress}
          />
          <button
            onClick={
              currentQuestionIndex < questions.length - 1
                ? () => handleNextQuestion()
                : null
            }>
            <Right />
          </button>
        </div>
      </div>
    </>
  );
};

export default Quiz;

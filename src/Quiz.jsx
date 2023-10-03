import { useState } from 'react';
import Numero from './assets/numero_pregunta.svg';
import Left from './components/Left';
import Right from './components/Right';
import Respuesta from './components/Respuesta';
import Inicio from './components/Inicio';
import LinearProgress from '@mui/joy/LinearProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { style } from './components/Respuesta';
import { Referencias } from '../Referencias';
import Final from './components/Final';

const Quiz = ({ preguntas, disclaimer, idioma }) => {
  const [stage, setStage] = useState(-2);
  const [questions, setQuestions] = useState(preguntas);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showReferences, setShowReferences] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [progress, setProgress] = useState(15);

  const handleAnswerClick = answer => {
    questions[currentQuestionIndex].respuestaSeleccionada = answer;
    setSelectedAnswer(
      questions[currentQuestionIndex].respuestas[respuestaSeleccionada],
    );
    setQuestions(questions);
  };
  const handleNextQuestion = () => {
    setStage(stage + 1);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setProgress(progress + 17);
      setShowReferences(false);
      setSelectedAnswer(null);
    }
  };
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setStage(stage - 1);
      setProgress(progress - 17);
      setShowReferences(false);
      setSelectedAnswer(null);
    }
  };
  const toggleReferences = () => {
    setShowReferences(!showReferences);
  };

  if (stage === -2) {
    return (
      <Inicio
        disclaimer={disclaimer}
        setStage={() => setStage(stage + 2)}
        idioma={idioma}
      />
    );
  }

  const { pregunta, respuestas, respuestaSeleccionada } =
    questions[currentQuestionIndex];
  return stage <= 5 ? (
    <>
      <div className="quiz-container">
        <div className="sidebar"></div>
        <div className="header pregunta">
          <div>{pregunta}</div>
          <button className="referencias" onClick={() => toggleReferences()}>
            {idioma === 'ES' ? 'Referencias' : 'Referências'}
          </button>
        </div>
        <div>
          <Modal
            open={showReferences}
            onClose={toggleReferences}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box sx={style}>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {Referencias.dhc}
              </Typography>
            </Box>
          </Modal>
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
            <Left
              style={{
                visibility: currentQuestionIndex > 0 ? 'visible' : 'hidden',
              }}
            />
          </button>
          <LinearProgress
            className="progress"
            determinate
            size="lg"
            variant="outlined"
            value={progress}
          />
          <button
            onClick={
              currentQuestionIndex < questions.length
                ? () => handleNextQuestion()
                : null
            }>
            <Right />
          </button>
        </div>
      </div>
    </>
  ) : (
    <Final disclaimer={disclaimer} idioma={idioma} />
  );
};

export default Quiz;

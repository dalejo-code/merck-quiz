import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

export const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Respuesta = ({
  respuesta,
  respuestaSeleccionada,
  handleAnswerClick,
  currentAnswer,
}) => {
  const [correcta, setCorrecta] = useState(respuesta.correcta);
  const [incorrecta, setIncorrecta] = useState(!respuesta.correcta);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const isSelected = respuestaSeleccionada === currentAnswer;

  if (isSelected) {
    console.log(respuestaSeleccionada, currentAnswer);
    console.log(respuesta);
    console.log(isSelected, correcta, incorrecta);
  }

  const handleAnswer = currentAnswer => {
    if (respuesta.correcta) {
      setOpen(true);
      setCorrecta(true);
      setIncorrecta(false);
    } else {
      setOpen(true);
      setCorrecta(false);
      setIncorrecta(true);
    }
    handleAnswerClick(currentAnswer);
  };

  return (
    <>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Box sx={style}>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {respuesta.justificacion}
            </Typography>
          </Box>
        </Modal>
      </div>
      <div
        className={'respuesta'}
        id={
          isSelected && correcta
            ? 'correcta'
            : isSelected && incorrecta
            ? 'incorrecta'
            : null
        }
        onClick={() => handleAnswer(currentAnswer)}>
        <div className="texto">{respuesta.respuesta}</div>
      </div>
    </>
  );
};

export default Respuesta;

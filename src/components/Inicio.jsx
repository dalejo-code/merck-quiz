import parse from 'html-react-parser';
import Logo from '../assets/logo.png';
const Inicio = ({
  disclaimer,
  titulo1,
  titulo2,
  subtitulo,
  type,
  setStage,
}) => {
  const color = type === 'DHC' ? '#50BFC1' : '#FF3C53';
  return (
    <div className="inicio" id={type === 'DHC' ? 'dhc' : 'saizen'}>
      <div className="titulo-quiz">
        <div className="titulo">
          <img id="logo" src={Logo} alt="logo" />
          <div>{parse(titulo1)}</div>
        </div>
        <div>{parse(titulo2)}</div>
        <div className="subtitulo">{parse(subtitulo)}</div>
      </div>
      <button
        className="empezar"
        style={{ background: color }}
        onClick={() => setStage()}>
        Empezar
      </button>
      <div className="texto">{parse(disclaimer.inicio)}</div>
    </div>
  );
};

export default Inicio;

const Inicio = ({ idioma, disclaimer, setStage }) => {
  const { titulo, subtitulo, textoDisclaimer, dhc } = disclaimer;
  const image =
    idioma === 'ES' ? 'url(/assets/startES.svg)' : 'url(/assets/startPT.svg)';
  const color = idioma === 'ES' ? '#50BFC1' : '#FF3C53';
  return (
    <div className="inicio">
      <div className="titulo-quiz">
        <div className="titulo">{titulo}</div>
        <div>{dhc}</div>
        <div className="subtitulo">{subtitulo}</div>
      </div>
      <button
        className="empezar"
        style={{ background: color }}
        onClick={() => setStage()}>
        Empezar
      </button>
      <div className="texto">{textoDisclaimer}</div>
    </div>
  );
};

export default Inicio;

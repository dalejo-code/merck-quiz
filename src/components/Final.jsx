const Final = ({ idioma, disclaimer }) => {
  const { titulo, subtitulo, textoDisclaimer, dhc } = disclaimer;
  const image =
    idioma === 'ES'
      ? 'url(/src/assets/startES.svg)'
      : 'url(/src/assets/startPT.svg)';
  return (
    <div className="final">
      <div className="gracias">
        {idioma === 'ES'
          ? 'Gracias por sus Respuestas'
          : 'Obrigado por suas respostas'}
      </div>
      <br />
      <div className="texto">{textoDisclaimer}</div>
    </div>
  );
};

export default Final;

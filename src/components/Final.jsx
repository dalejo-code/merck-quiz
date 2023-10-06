import parse from 'html-react-parser';
const Final = ({ disclaimer, type, gracias }) => {
  return (
    <div className="final" id={type === 'DHC' ? 'dhc' : 'saizen'}>
      <div className="gracias">{gracias}</div>
      <br />
      <div className="texto">{parse(disclaimer.final)}</div>
    </div>
  );
};

export default Final;

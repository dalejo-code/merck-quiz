import { createContext, useState } from 'react';
import Preguntas from './Preguntas';
import CO from './assets/CO.svg';
import BR from './assets/BR.svg';
import Quiz from './Quiz';
import '@fontsource/sniglet'; // Defaults to weight 400
const IdiomaContext = createContext(null);

function App() {
  const [idioma, setIdioma] = useState('ES');
  return (
    <IdiomaContext.Provider value={idioma}>
      <Quiz preguntas={Preguntas[idioma]} />
      <div className="idioma-container">
        <button className="idioma" onClick={() => setIdioma('ES')}>
          <img src={CO} alt="Español" />
        </button>
        <button className="idioma" onClick={() => setIdioma('PT')}>
          <img src={BR} alt="Português" />
        </button>
      </div>
    </IdiomaContext.Provider>
  );
}

export default App;

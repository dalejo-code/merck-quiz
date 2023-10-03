import { createContext, useState } from 'react';
import Preguntas from './Preguntas';
import Disclaimer from './Disclaimer';
import Quiz from './Quiz';
import '@fontsource/sniglet'; // Defaults to weight 400
const IdiomaContext = createContext(null);

function App() {
  const [idioma, setIdioma] = useState('ES');
  return (
    <IdiomaContext.Provider value={idioma}>
      <Quiz
        preguntas={Preguntas[idioma]}
        disclaimer={Disclaimer[idioma]}
        idioma={idioma}
      />
      {/* <div className="idioma-container">
        <button className="idioma">
          <img src={CO} alt="Español" onClick={() => setIdioma('ES')} />
        </button>
        <button className="idioma">
          <img src={BR} alt="Português" onClick={() => setIdioma('PT')} />
        </button>
      </div> */}
    </IdiomaContext.Provider>
  );
}

export default App;

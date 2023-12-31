import { createContext, useState } from 'react';
import Data from './Data';
import Quiz from './Quiz';
import '@fontsource/sniglet'; // Defaults to weight 400
const IdiomaContext = createContext(null);
import { Helmet } from 'react-helmet';

function App() {
  const idioma = import.meta.env.VITE_IDIOMA || 'ES';
  const zone = import.meta.env.VITE_ZONA || 'ST';
  const quiz = import.meta.env.VITE_QUIZ || 'DHC';
  return (
    <IdiomaContext.Provider value={idioma}>
      <Helmet>
        <title>{Data[idioma][zone][quiz].titulo2}</title>
      </Helmet>
      <Quiz data={Data[idioma][zone][quiz]} type={quiz} />
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

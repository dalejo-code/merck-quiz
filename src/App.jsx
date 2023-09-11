import { createContext, useState } from 'react';
import './App.css';
import Preguntas from './Preguntas';
import Quiz from './Quiz';
console.log(Preguntas);
const IdiomaContext = createContext(null);

function App() {
  const [idioma, setIdioma] = useState('ES');
  return (
    <IdiomaContext.Provider value={idioma}>
      <button onClick={() => setIdioma('ES')}>ES</button>
      <button onClick={() => setIdioma('PT')}>PT</button>
      <Quiz preguntas={Preguntas[idioma]} />
    </IdiomaContext.Provider>
  );
}

export default App;

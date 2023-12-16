
import { useState } from 'react';
import './App.css'

import LandingPage from './components/MainLandingPage/LandingPage';
import GamePlay from './components/GamePlay/GamePlay';

function App() {

  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  }

  return (
    <>
      {
        isGameStarted ? <GamePlay /> : <LandingPage toggle={toggleGamePlay} />
      }
    </>
  )
}

export default App;

import Gameboard from "./components/Gameboard";
import Header from "./components/Header";
import "./styles/App.css";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const handleScore = (increase) => {
    const newScore = increase ? score + 1 : 0;

    setScore(newScore);
    setHighScore(Math.max(highScore, newScore));
  };

  return (
    <>
      <Header score={score} highScore={highScore} />
      <Gameboard handleScore={handleScore} />
    </>
  );
}

export default App;

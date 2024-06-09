import "./Header.css";

const Header = ({ score, highScore }) => {
  return (
    <header>
      <h1>KosMemory</h1>
      <p>Only click each card once</p>
      <div id="score-container">
        <p>Score: {score}</p>
        <p>High Score: {highScore}</p>
      </div>
    </header>
  );
};

export default Header;

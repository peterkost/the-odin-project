import "./Header.css";
const Header = () => {
  return (
    <header>
      <h1>KosMemory</h1>
      <p>Only click each card once</p>
      <div id="score-container">
        <p>Score: XX</p>
        <p>High Score: YY</p>
      </div>
    </header>
  );
};

export default Header;

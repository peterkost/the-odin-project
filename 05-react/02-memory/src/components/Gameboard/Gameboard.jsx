import { getRandomCards } from "./Gameboard.helpers";
import Card from "./components/Card";
import "./Gameboard.css";

const Gameboard = () => {
  const cards = getRandomCards();
  return (
    <div id="gameBoard">
      {cards.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </div>
  );
};

export default Gameboard;

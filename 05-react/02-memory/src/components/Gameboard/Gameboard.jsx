import { buildDeck, getHand } from "./Gameboard.helpers";
import Card from "./components/Card";
import "./Gameboard.css";
import { useEffect, useState } from "react";

const Gameboard = ({ handleScore }) => {
  const [deck, setDeck] = useState([]);
  const [clicked, setClicked] = useState(new Set());

  useEffect(() => {
    buildDeck().then((deck) => setDeck(deck));
  }, []);

  const handleClick = (id) => {
    if (clicked.has(id)) {
      handleScore(false);
      setClicked(new Set());
    } else {
      handleScore(true);
      clicked.add(id);
      setClicked(clicked);
    }
  };

  const hand = getHand(deck);

  return (
    <div id="gameBoard">
      {hand.map((card) => (
        <Card card={card} key={card.id} onClick={handleClick} />
      ))}
    </div>
  );
};

export default Gameboard;

import { buildDeck, getHand } from "./Gameboard.helpers";
import Card from "./components/Card";
import "./Gameboard.css";
import { useEffect, useState } from "react";

const Gameboard = () => {
  const [deck, setDeck] = useState([]);
  useEffect(() => {
    buildDeck().then((deck) => setDeck(deck));
  }, []);

  const hand = getHand(deck);

  return (
    <div id="gameBoard">
      {hand.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </div>
  );
};

export default Gameboard;

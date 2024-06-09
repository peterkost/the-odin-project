import "./Card.css";
const Card = ({ card }) => {
  return <div className="game-card">{card.id} </div>;
};

export default Card;

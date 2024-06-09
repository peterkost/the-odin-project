import "./Card.css";
const Card = ({ card }) => {
  return (
    <div className="game-card">
      {card.id} {card.name}{" "}
    </div>
  );
};

export default Card;

import "./Card.css";
const Card = ({ card }) => {
  return (
    <div className="game-card">
      <img className="card-image" src={card.image} alt="" />
    </div>
  );
};

export default Card;

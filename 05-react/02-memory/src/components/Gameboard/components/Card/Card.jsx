import "./Card.css";
const Card = ({ card, onClick }) => {
  return (
    <div className="game-card" onClick={() => onClick(card.id)}>
      <img className="card-image" src={card.image} alt="" />
      <p>{card.id}</p>
    </div>
  );
};

export default Card;

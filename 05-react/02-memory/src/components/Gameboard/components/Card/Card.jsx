import "./Card.css";
const Card = ({ card, onClick }) => {
  return (
    <div className="card-frame" onClick={() => onClick(card.id)}>
      <img className="card-image" src={card.image} alt={card.name} />
    </div>
  );
};

export default Card;

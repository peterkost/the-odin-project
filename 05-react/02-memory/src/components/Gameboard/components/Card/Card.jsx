import "./Card.css";
const Card = ({ card, onClick }) => {
  return (
    <div className="card-frame" onClick={() => onClick(card.id)}>
      <div className="inner-frame">
        <img className="card-image" src={card.image} alt={card.name} />
      </div>
    </div>
  );
};

export default Card;

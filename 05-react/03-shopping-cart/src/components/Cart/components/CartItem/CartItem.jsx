import PropTypes from "prop-types";
import styles from "./CartItem.module.css";

// show count and total price
const CartItem = ({ imageUrl, name, price, id, count, removeItem }) => {
  const handleRemove = () => removeItem(id);

  return (
    <div className={styles.cartItem}>
      <img src={imageUrl} alt={name} className={styles.productImage} />
      <p>{name}</p>
      <p>${price}</p>
      <p>{count}</p>
      <p>${count * price}</p>
      <button type="button" onClick={handleRemove}>
        Remove
      </button>
    </div>
  );
};

CartItem.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  count: PropTypes.number,
  id: PropTypes.number,
  removeItem: PropTypes.func,
};

export default CartItem;

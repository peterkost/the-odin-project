import PropTypes from "prop-types";
import styles from "./ShopItem.module.css";

const ShopItem = ({ imageUrl, name, price, id, add, remove, getCount }) => {
  const count = getCount(id);

  const addItem = () => add(id);
  const removeItem = () => remove(id);

  return (
    <div>
      <img src={imageUrl} alt={name} className={styles.productImage} />
      <p>{name}</p>
      <p>${price}</p>
      <button type="button" onClick={addItem}>
        Add to Cart
      </button>
      <button type="button" onClick={removeItem}>
        Remove from Cart
      </button>
      count: {count}
    </div>
  );
};

ShopItem.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.number,
  add: PropTypes.func,
  remove: PropTypes.func,
  getCount: PropTypes.func,
};

export default ShopItem;

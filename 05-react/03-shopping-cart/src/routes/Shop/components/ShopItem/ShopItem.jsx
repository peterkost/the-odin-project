import PropTypes from "prop-types";
import styles from "./ShopItem.module.css";

const ShopItem = ({ imageUrl, name, price }) => {
  return (
    <div>
      <img src={imageUrl} alt={name} className={styles.productImage} />
      <p>{name}</p>
      <p>${price}</p>
      <button type="button">Add to Cart</button>
    </div>
  );
};

ShopItem.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
};

export default ShopItem;

import PropTypes from "prop-types";
import styles from "./ShopItem.module.css";
import AddToCartButton from "./AddToCartButton";
import ManageQuantityButton from "./ManageQuantityButton";

const ShopItem = ({
  imageUrl,
  name,
  price,
  id,
  add,
  remove,
  getCount,
  setQuantity,
}) => {
  const count = getCount(id);

  const addItem = () => add(id);
  const removeItem = () => remove(id);
  const setItemQuantity = (event) => setQuantity(id, event.target.value);

  return (
    <div>
      <img src={imageUrl} alt={name} className={styles.productImage} />
      <p>{name}</p>
      <p>${price}</p>
      {count > 0 ? (
        <ManageQuantityButton
          count={count}
          handleAddClick={addItem}
          handleRemoveClick={removeItem}
          handleCountChange={setItemQuantity}
        />
      ) : (
        <AddToCartButton handleClick={addItem} />
      )}
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
  setQuantity: PropTypes.func,
};

export default ShopItem;

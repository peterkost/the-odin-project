import { useOutletContext } from "react-router-dom";
import CartItem from "./components/CartItem";
import styles from "./Cart.module.css";

const Cart = () => {
  const [items, getItemCount, removeItem] = useOutletContext();

  const getTotal = () => {
    let total = 0;
    items.forEach((item) => (total += item.price * getItemCount(item.id)));
    return total;
  };
  return (
    <>
      {items.map((item) => (
        <CartItem
          key={item.id}
          count={getItemCount(item.id)}
          removeItem={removeItem}
          {...item}
        />
      ))}
      Total: ${getTotal()}
    </>
  );
};

export default Cart;

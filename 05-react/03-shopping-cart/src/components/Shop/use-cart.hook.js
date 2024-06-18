import { useState } from "react";

const useCart = () => {
  const [cart, setCart] = useState(new Map());

  const getItemCount = (id) => cart.get(id) ?? 0;

  const setItemCount = (id, count) => {
    const updatedCart = new Map(cart);
    updatedCart.set(id, count < 0 ? 0 : count);
    setCart(updatedCart);
  };

  const incrementCartItem = (id) => setItemCount(id, getItemCount(id) + 1);

  const decrementCartItem = (id) => setItemCount(id, getItemCount(id) - 1);

  const removeItem = (id) => setItemCount(id, 0);

  return {
    incrementCartItem,
    decrementCartItem,
    getItemCount,
    removeItem,
    setItemCount,
  };
};

export default useCart;

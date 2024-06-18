import { useState } from "react";

const useCart = () => {
  const [cart, setCart] = useState(new Map());

  const incrementCartItem = (id) => {
    const updatedCart = new Map(cart);
    updatedCart.set(id, (updatedCart.get(id) ?? 0) + 1);
    setCart(updatedCart);
  };

  const decrementCartItem = (id) => {
    const updatedCart = new Map(cart);
    updatedCart.set(id, Math.max((updatedCart.get(id) ?? 0) - 1, 0));
    setCart(updatedCart);
  };

  const getItemCount = (id) => cart.get(id) ?? 0;

  const removeItem = (id) => {
    const updatedCart = new Map(cart);
    updatedCart.set(id, 0);
    setCart(updatedCart);
  };

  const setItemCount = (id, count) => {
    const updatedCart = new Map(cart);
    updatedCart.set(id, count);
    setCart(updatedCart);
  };

  return {
    incrementCartItem,
    decrementCartItem,
    getItemCount,
    removeItem,
    setItemCount,
  };
};

export default useCart;

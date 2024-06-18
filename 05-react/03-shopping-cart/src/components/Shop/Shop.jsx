import Header from "../../components/Header";
import { CART_ROUTE } from "../../constants";
import ShopItem from "./components/ShopItem";
import styles from "./Shop.module.css";
import useShopApi from "./use-shop-api.hook";
import { Outlet, useLocation } from "react-router-dom";
import useCart from "./use-cart.hook";

const Shop = () => {
  const location = useLocation();
  const { items, loading, error } = useShopApi();
  const {
    incrementCartItem,
    decrementCartItem,
    getItemCount,
    removeItem,
    setItemCount,
  } = useCart();

  const onCart = location.pathname == CART_ROUTE;

  if (loading || error) return;

  const itemsInCart = items.filter((item) => getItemCount(item.id) > 0);

  return (
    <>
      <Header />
      {onCart ? (
        <Outlet context={[itemsInCart, getItemCount, removeItem]} />
      ) : (
        <div id={styles.productGrid}>
          {items.map((item) => (
            <ShopItem
              key={item.id}
              getCount={getItemCount}
              add={incrementCartItem}
              remove={decrementCartItem}
              setQuantity={setItemCount}
              {...item}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Shop;

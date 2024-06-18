import Header from "../../components/Header";
import { CART_ROUTE } from "../../constants";
import ShopItem from "./components/ShopItem";
import styles from "./Shop.module.css";
import useShopApi from "./use-shop-api.hook";
import { Outlet, useLocation } from "react-router-dom";

const Shop = () => {
  const location = useLocation();
  const { data, loading, error } = useShopApi();
  const onCart = location.pathname == CART_ROUTE;

  if (loading || error) return;

  return (
    <>
      <Header />
      {onCart ? (
        <Outlet />
      ) : (
        <div id={styles.productGrid}>
          {data.map((item) => (
            <ShopItem key={item.id} {...item} />
          ))}
        </div>
      )}
    </>
  );
};

export default Shop;

import { useNavigate, useLocation } from "react-router-dom";
import { CART_ROUTE, SHOP_ROUTE } from "../../constants";
import styles from "./Header.module.css";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onShop = location.pathname == SHOP_ROUTE;

  const goToShop = () => navigate(SHOP_ROUTE);
  const goToCart = () => navigate(CART_ROUTE);

  return (
    <header>
      <div></div>
      <button onClick={goToShop} className={styles.titleButton}>
        <h1 id={styles.title}>KOSSHOP</h1>
      </button>
      <button type="button" onClick={goToCart} className={styles.headerButton}>
        SHOPPING BAG (XX)
      </button>
    </header>
  );
};

export default Header;

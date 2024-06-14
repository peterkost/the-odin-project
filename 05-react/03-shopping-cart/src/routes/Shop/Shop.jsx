import Header from "../../components/Header";
import ShopItem from "./components/ShopItem";
import styles from "./Shop.module.css";
import useShopApi from "./use-shop-api.hook";

const Shop = () => {
  const { data, loading, error } = useShopApi();

  if (loading || error) return;

  return (
    <>
      <Header />
      <div id={styles.productGrid}>
        {data.map((item) => (
          <ShopItem key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

export default Shop;

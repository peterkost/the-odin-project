import Header from "../../components/Header";
import ShopItem from "./components/ShopItem";
import styles from "./Shop.module.css";

const Shop = () => {
  const mockItems = [
    {
      id: 1,
      name: "SAMPLE PRODUCT",
      price: 3.16,
      imageUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      id: 2,
      name: "SAMPLE PRODUCT",
      price: 3.16,
      imageUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      id: 3,
      name: "SAMPLE PRODUCT",
      price: 3.16,
      imageUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      id: 4,
      name: "SAMPLE PRODUCT",
      price: 3.16,
      imageUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      id: 5,
      name: "SAMPLE PRODUCT",
      price: 3.16,
      imageUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      id: 6,
      name: "SAMPLE PRODUCT",
      price: 3.16,
      imageUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      id: 7,
      name: "SAMPLE PRODUCT",
      price: 3.16,
      imageUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
  ];
  return (
    <>
      <Header />
      <div id={styles.productGrid}>
        {mockItems.map((item) => (
          <ShopItem key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

export default Shop;

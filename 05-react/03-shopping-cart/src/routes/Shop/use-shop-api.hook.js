import { useState, useEffect } from "react";
import { SHOP_API_URL } from "../../constants";

const useShopApi = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(SHOP_API_URL);
        if (!response.ok) {
          throw new Error("Error fetching products");
        }
        const result = await response.json();
        setData(parseResponse(result));
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

const parseResponse = (json) => {
  return json.map((item) => {
    return {
      id: item.id,
      imageUrl: item.image,
      name: item.title,
      price: item.price,
    };
  });
};

export default useShopApi;

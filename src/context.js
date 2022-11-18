import React from "react";
import axios from "axios";
import Loading from "./PAGES/Loading";
const url = "https://fakestoreapi.com/products";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  const [cart, setCart] = React.useState([]);

  const [price, setPrice] = React.useState(0);

  const fetchProducts = React.useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(url);
      if (data) {
        setProducts(data);
      }
    } catch (error) {
      console.log(error);
      return;
    }
    setLoading(false);
  }, []);

  React.useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (loading) {
    return <Loading />;
  }

  return (
    <AppContext.Provider
      value={{ loading, setLoading, products, setProducts, cart, setCart, price, setPrice }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useGlobalContext() {
  return React.useContext(AppContext);
}

export { AppContext, AppProvider };

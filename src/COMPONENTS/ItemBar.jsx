import axios from "axios";
import React from "react";
import Loading from "../PAGES/Loading";

export default function ItemBar(props) {
  const url = ` https://fakestoreapi.com/products/${props.id}`;
  const [product, setProduct] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const fetchProduct = React.useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(url);
      if (data) {
        setProduct(data);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }, [url]);

  React.useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="item-bar">
      <div className="img-name-container">
        <img className="bar-img" src={product.image} alt="item" />
        <div className="img-name">{product.title}</div>
      </div>

      <div className="bar-price">P {parseInt(product.price * 58)}.00</div>
      <div
        onClick={() => props.handleRemoveItem(props.index, parseInt(product.price * 58))}
        className="bar-rmv"
      >
        Remove
      </div>
    </div>
  );
}

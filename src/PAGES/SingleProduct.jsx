import React from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { useGlobalContext } from "../context";
import Loading from "./Loading";

export default function SingleProduct() {
  const { productId } = useParams();
  const url = "https://fakestoreapi.com/products";
  const [product, setProduct] = React.useState({});
  const { setCart, setPrice } = useGlobalContext();
  const [loading, setLoading] = React.useState(false);

  const fetchProduct = React.useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${url}/${productId}`);
      if (data) setProduct(data);
    } catch (error) {
      console.log(error);

      return;
    }
    setLoading(false);
  }, [productId]);

  React.useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  const handleAddToCart = () => {
    const addItem = async () => {
      try {
        const { data } = await axios.get(`${url}/${productId}`);
        if (data) {
          setCart((prev) => {
            return [...prev, data];
          });
        }
      } catch (error) {
        console.log(error);
      }
      setPrice((prev) => (prev += parseInt(product.price * 58)));
    };
    addItem();
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="single-container">
      <Link className="back-link" to={"/"}>
        <BiArrowBack size={"1.5rem"} />
      </Link>
      <div className="single-wrapper">
        <div className="single-img-container">
          <img src={product.image} className="single-img" alt="" />
        </div>
        <div className="single-product-details">
          <div>
            <div className="product-name">{product.title}</div>
            <div className="single-product-price">P {parseInt(product.price * 58)}.00</div>
            <div className="product-category">{product.category}</div>
          </div>

          <div className="product-description">{product.description}</div>
          <div>
            <div>
              {product.rating && (
                <div>
                  <AiFillStar fill="gold" /> {product.rating.rate} rating by {product.rating.count}{" "}
                  buyers
                </div>
              )}
            </div>
          </div>

          <div className="btn-container">
            <div onClick={handleAddToCart} className="custom-btn add">
              ADD TO CART
            </div>
            <Link onClick={handleAddToCart} to={"/cart"} className="custom-btn buy">
              BUY NOW
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

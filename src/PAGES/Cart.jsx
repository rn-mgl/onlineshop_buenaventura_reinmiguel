import React from "react";
import ItemBar from "../COMPONENTS/ItemBar";
import { useGlobalContext } from "../context";
import { nanoid } from "nanoid";
export default function Cart() {
  const { cart, price, setCart, setPrice } = useGlobalContext();
  const [seen, setSeen] = React.useState([0]);
  const [checked, setChecked] = React.useState(false);

  const handleRemoveItem = (idx, price) => {
    setPrice((prev) => prev - price);
    setCart((prev) => prev.filter((item, index) => idx !== index));
  };

  const handleCheckOut = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className="cart-wrapper">
      <div className="check-out">Items : {cart.length}</div>
      <div
        onClick={() => {
          setCart([]);
          setPrice(0);
        }}
        className="remove-btn"
      >
        Remove All
      </div>
      <div className="cart-body">
        <div>
          {cart.map((id, index) => {
            return (
              <ItemBar
                key={nanoid()}
                handleRemoveItem={handleRemoveItem}
                index={index}
                setSeen={setSeen}
                id={id}
                product={id}
                seen={seen}
              />
            );
          })}
        </div>
      </div>
      <div className="check-out">
        <div onClick={handleCheckOut} className="check-out-btn">
          Check Out
        </div>
        <div onClick={handleCheckOut}>Total : P {checked ? price + ".00" : "---"}</div>
      </div>
    </div>
  );
}

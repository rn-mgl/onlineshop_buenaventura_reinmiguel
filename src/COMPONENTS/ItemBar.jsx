import React from "react";

export default function ItemBar(props) {
  return (
    <div className="item-bar">
      <div className="img-name-container">
        <img className="bar-img" src={props.product.image} alt="item" />
        <div className="img-name">{props.product.title}</div>
      </div>

      <div className="bar-price">P {parseInt(props.product.price * 58)}.00</div>
      <div
        onClick={() => props.handleRemoveItem(props.index, parseInt(props.product.price * 58))}
        className="bar-rmv"
      >
        Remove
      </div>
    </div>
  );
}

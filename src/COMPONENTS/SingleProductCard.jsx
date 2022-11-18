import React from "react";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

export default function SingleProductCard(props) {
  return (
    <Link to={`/${props.id}`} className="product-card">
      <div>
        <div className="col">
          <div className="card">
            <div className="image-container">
              <div
                className="product-image"
                style={{ backgroundImage: `url(${props.image})` }}
              ></div>
            </div>
            <hr />
            <div className="card-body">
              <div className="text-content">
                <div>
                  <div className="card-title">
                    <div>
                      {props.name.length > 34 ? props.name.slice(0, 34) + "..." : props.name}
                    </div>
                  </div>
                  <div className="category">{props.category}</div>
                </div>

                <div className="price-rating">
                  <div className="product-price">P {parseInt(props.price * 58)}</div>
                  <AiFillStar fill="gold" />
                  <div>{props.rating}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

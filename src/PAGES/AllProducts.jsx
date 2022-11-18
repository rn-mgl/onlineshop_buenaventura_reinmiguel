import React from "react";
import SingleProductCard from "../COMPONENTS/SingleProductCard";
import { useGlobalContext } from "../context";

export default function AllProducts() {
  const { products } = useGlobalContext();

  return (
    <div className="all-products">
      {products.map((product) => {
        return (
          <SingleProductCard
            key={product.id}
            id={product.id}
            category={product.category}
            name={product.title}
            price={product.price}
            image={product.image}
            rating={product.rating.rate}
          />
        );
      })}
    </div>
  );
}

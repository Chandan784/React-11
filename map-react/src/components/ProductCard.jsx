import React from "react";

function ProductCard({ product, x, y }) {
  return (
    <div>
      <h1 style={{ color: "red" }}>{product.title}</h1>
      <p>{product.price}</p>
      <h1>{x}</h1>
      <p>{y}</p>
    </div>
  );
}

export default ProductCard;

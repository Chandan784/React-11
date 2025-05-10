import React from "react";

import ProductCard from "./ProductCard";

function Products() {
  let products = [
    {
      title: "phone",
      price: 20000,
    },
    {
      title: "laptop",
      price: 50000,
    },
    {
      title: "phone",
      price: 20000,
    },
    {
      title: "laptop",
      price: 50000,
    },
  ];
  return (
    <div>
      {products.map((product, index) => {
        return <ProductCard product={product} x={2} y={"chandan"} />;
      })}
    </div>
  );
}

export default Products;

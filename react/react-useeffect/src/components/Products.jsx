import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Products() {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProductData() {
      let response = await fetch("https://fakestoreapi.com/products");
      let data = await response.json();
      setProducts(data);
      console.log(data);
    }

    getProductData();
  }, []);

  return (
    <div>
      {products.map((product) => {
        return <h1>{product.title}</h1>;
      })}
    </div>
  );
}

export default Products;

import React from "react";
import { productItems } from "../../Data";
import Product from "./Product";

const Products = () => {
  return (
    <div className="products">
      {productItems.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Products;

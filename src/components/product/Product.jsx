import React from "react";

//icons
import { FaMoneyBillWave } from "react-icons/fa";

const Product = ({ product }) => {
  console.log(product);

  return (
    <div className="w-[400px] p-2 m-2 border rounded-md relative">
      <div className="absolute top-0 right-0 p-2 categoriesbaslık flex items-center rounded-md">
        <FaMoneyBillWave style={{ color: "white" }} /> {product?.price} TL
      </div>

      <img
        className="w-[200px] h-[200px] object-cover m-auto"
        src={product?.image}
        alt=""
      />
      <h1>{product?.title}</h1>
    </div>
  );
};

export default Product;

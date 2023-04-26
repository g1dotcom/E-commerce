import React from "react";

//icons
import { FaMoneyBillWave } from "react-icons/fa";
//router
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`products/${product?.id}`)}
      className="w-[350px] max-md:w-[150px] p-2 m-2 border rounded-md relative"
    >
      <div className="absolute top-0 right-0 p-2 bg-orange-500 text-white font-bold flex items-center rounded-md">
        <FaMoneyBillWave style={{ color: "white", marginRight: "5px" }} />{" "}
        {product?.price} TL
      </div>

      <img
        className="w-[200px] h-[200px] max-md:w-[100px] max-md:h-[100px] object-cover m-auto cursor-pointer"
        src={product?.image}
        alt=""
      />
      <h1>{product?.title}</h1>
    </div>
  );
};

export default Product;

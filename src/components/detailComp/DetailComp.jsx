import React, { useState } from "react";

import Rating from "../rating/Rating";

const DetailComp = ({ productDetail }) => {
  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex gap-10 my-10">
      <img
        className="w-[700px] h-[500px] object-cover bg-black "
        src={productDetail?.image}
        alt=""
      />
      <div className="bg-gray-100 p-10">
        <div className="text-4xl font-bold">{productDetail?.title}</div>
        <div className="my-2 text-2xl">{productDetail?.description}</div>
        <div className="my-2 text-2xl flex">
          <span className="font-bold">Rating</span> :{" "}
          <span className="bg-orange-400 mx-2 text-gray-200  rounded-lg">
            {productDetail?.rating?.rate}
          </span>
          <Rating productDetail={productDetail} />
        </div>
        <div className="my-2 text-2xl">
          <span className="font-bold">Count</span> :{" "}
          {productDetail?.rating?.count}
        </div>
        <div className="my-2 text-6xl text-orange-400">
          {productDetail?.price} <span className="text-2xl font-bold">TL</span>
        </div>
        <div className="flex items-center gap-5 my-4">
          <div
            onClick={decrement}
            className="text-4xl cursor-pointer bg-orange-400 text-white rounded-full px-2"
          >
            -
          </div>
          <input
            type="text"
            value={quantity}
            className="w-12 text-center text-4xl font-bold bg-gray-100 text-gray-600 m-2"
          />
          <div
            onClick={increment}
            className="text-4xl cursor-pointer bg-orange-400 text-white rounded-full px-2"
          >
            +
          </div>
        </div>
        <div
          onClick={addBasket}
          className="my-4 border w-full text-2xl rounded-md bg-orange-400 text-white cursor-pointer h-16 flex items-center justify-center"
        >
          Sepete Ekle
        </div>
      </div>
    </div>
  );
};

export default DetailComp;

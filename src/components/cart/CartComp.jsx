import React from "react";

const CartComp = ({ cart }) => {
  return (
    <div className="my-10 flex items-center justify-between w-2/3 mx-8 bg-orange-300">
      <img
        className="w-[150px] h-[150px] object-cover"
        src={cart?.image}
        alt=""
      />
      <div className="text-left flex items-start  ">
        <h1 className="font-bold text-xl ">{cart?.title}</h1>
        <p className="text-gray-500">{cart?.description}</p>
      </div>
      <div className="font-bold text-2xl">
        {cart?.price} TL ({cart?.quantity})
      </div>
      <button className="bg-red-500 px-5 py-2 rounded-md text-white">
        Ürünü Sil
      </button>
    </div>
  );
};

export default CartComp;
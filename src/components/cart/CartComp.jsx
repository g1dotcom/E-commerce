import React from "react";

// Redux
import { removeFromCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const CartComp = ({ cart }) => {
  const dispatch = useDispatch();

  return (
    <div className="my-10 flex items-center justify-between w-full bg-gray-50">
      <img
        className="w-[150px] h-[150px] object-cover"
        src={cart?.image}
        alt=""
      />
      <div className="text-left flex items-start w-[476px] ">
        <h1 className="font-bold text-xl ">{cart?.title}</h1>
        <p className="text-gray-500">{cart?.description}</p>
      </div>
      <div className="font-bold text-2xl">
        {cart?.price} TL ({cart?.quantity})
      </div>
      <button
        onClick={() =>
          dispatch(removeFromCart(cart?.id)) + window.location.reload
        }
        className="bg-orange-500 px-5 py-2 rounded-md text-white"
      >
        Ürünü Sil
      </button>
    </div>
  );
};

export default CartComp;

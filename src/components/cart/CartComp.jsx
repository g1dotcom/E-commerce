import React, { useEffect } from "react";

// Redux
import { removeFromCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

//toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartComp = ({ cart }) => {
  const dispatch = useDispatch();

  //toastify
  const notify = () => toast("Ürün Silindi!!");

  return (
    <div className="my-10 flex items-center justify-between w-full bg-gray-50">
      <img
        className="w-[150px] max-md:w-[100px] max-md:h-[100px] h-[150px] object-cover"
        src={cart?.image}
        alt=""
      />
      <div className="text-left flex items-start w-[476px] max-md:w-[300px] ">
        <h1 className="font-bold text-xl max-md:text-sm max-md:mx-2">
          {cart?.title}
        </h1>
        <p className="text-gray-500 max-md:text-sm">{cart?.description}</p>
      </div>
      <div className="font-bold text-2xl max-md:text-base">
        {cart?.price} TL ({cart?.quantity})
      </div>
      <button
        onClick={() => {
          dispatch(removeFromCart(cart?.id));
          window.location.reload(cart?.id);
          notify();
        }}
        className="bg-orange-500 px-5 py-2 rounded-md text-white"
      >
        Ürünü Sil
      </button>
      <ToastContainer />
    </div>
  );
};

export default CartComp;

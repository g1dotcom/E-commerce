import React, { useState } from "react";

//Components
import Rating from "../rating/Rating";

//Redux
import { addToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

//react toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// // // // // // // // // // // // //
const DetailComp = ({ productDetail }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  //Quantity increment
  const increment = () => {
    setQuantity(quantity + 1);
  };
  //Quantity decrement
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  //Add to cart
  const addBasket = () => {
    dispatch(
      addToCart({
        id: productDetail?.id,
        title: productDetail?.title,
        price: productDetail?.price,
        image: productDetail?.image,
        quantity: quantity,
      })
    );
  };

  //Toastify
  const notify = () => toast("Ürün Sepete Eklendi!");

  return (
    <div className="flex max-md:flex-col gap-10 my-10">
      <img
        className="w-[700px] max-md:w-[500px] max-md:h-[350px]  h-[500px] object-cover bg-black "
        src={productDetail?.image}
        alt=""
      />
      <div className="bg-gray-100 p-10">
        <div className="text-4xl max-md:text-2xl font-bold">
          {productDetail?.title}
        </div>
        <div className="my-2 text-2xl max-md:text-xl">
          {productDetail?.description}
        </div>
        <div className="my-2 text-2xl flex">
          <span className="font-bold">Rating</span> :{" "}
          <span className="bg-orange-400 mx-2 text-gray-200  rounded-xl px-2">
            {productDetail?.rating?.rate}
          </span>
          <Rating productDetail={productDetail} />
        </div>
        <div className="my-2 text-2xl">
          <span className="font-bold">Count</span> :{" "}
          {productDetail?.rating?.count}
        </div>
        <div className="my-2 text-6xl max-md:text-4xl text-orange-400">
          {productDetail?.price} <span className="text-2xl font-bold">TL</span>
        </div>
        <div className="flex items-center gap-5 my-4">
          <div
            onClick={decrement}
            className="text-4xl max-md:text-xl cursor-pointer bg-orange-400 text-white rounded-full px-2"
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
            className="text-4xl max-md:text-xl cursor-pointer bg-orange-400 text-white rounded-full px-2"
          >
            +
          </div>
        </div>
        <div
          onClick={() => {
            addBasket();
            notify(productDetail);
          }}
          className="my-4 border w-full text-2xl rounded-md bg-orange-400 text-white cursor-pointer h-16 flex items-center justify-center"
        >
          <span className="z-50"> Sepete Ekle</span>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default DetailComp;

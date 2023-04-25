import React, { useEffect } from "react";

//redux
import { useSelector, useDispatch } from "react-redux";

//icons
import { BsCreditCard } from "react-icons/bs";
import { MdOutlineLocalShipping } from "react-icons/md";

//navigate
import { useNavigate } from "react-router-dom";
import { getCartTotal } from "../../redux/cartSlice";

//components
import CartComp from "../../components/cart/CartComp";
import Navbar from "../../components/navbar/Navbar";

const Cart = () => {
  const { carts, totalAmount, itemsCount } = useSelector(
    (state) => state.carts
  );

  //dspatch
  const dispatch = useDispatch();

  //navigate
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  return (
    <div>
      <div className="bg-orange-400  py-4  w-full">
        <Navbar />
      </div>
      {carts?.length > 0 ? (
        <div className="flex max-md:flex-col  w-full h-full ">
          <div className="w-3/4 max-md:w-full h-full p-6">
            {carts?.map((cart, i) => (
              <CartComp key={i} cart={cart} />
            ))}
          </div>
          <div className="w-1/4 max-md:w-full h-full my-10 p-6 bg-orange-400 text-white text-xl font-medium">
            <h1 className="max-md:text-lg flex justify-between items-center">
              <div className="flex items-center ">
                {" "}
                <BsCreditCard size={35} /> <p className="ml-2">Toplam Fiyat:</p>
              </div>
              <span className="bg-white mx-4 text-center text-orange-400 rounded-full p-2 w-fit mt-4 text-2xl max-md:text-xl font-bold cursor-pointer ">
                {Math.floor(totalAmount)} TL
              </span>
            </h1>
            <br />

            <h1 className="max-md:text-lg flex justify-between items-center">
              <div className="flex items-center ">
                {" "}
                <MdOutlineLocalShipping size={40} />{" "}
                <p className="ml-2">Kargo:</p>
              </div>
              <span className="bg-white mx-4 text-orange-400 rounded-full p-2 w-fit mt-4 text-2xl max-md:text-xl font-bold cursor-pointer ">
                Ücretsiz
              </span>
            </h1>
            <br />
            <button className="bg-white text-orange-400 rounded-full p-2 w-full mt-4 font-bold cursor-pointer hover:scale-95 transition-all">
              Ödeme Yap
            </button>
          </div>
        </div>
      ) : (
        <div className="text-orange-400 text-4xl font-medium w-full h-[75vh] bg-gray-100 flex justify-center items-center">
          Sepetinizde Ürün Bulunmamakta
        </div>
      )}
    </div>
  );
};

export default Cart;

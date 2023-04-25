import React, { useEffect } from "react";

//redux
import { useSelector, useDispatch } from "react-redux";

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
      <div className="bg-orange-400 flex justify-center py-4 items-end w-full">
        <Navbar />
      </div>
      {carts?.length > 0 ? (
        <div className="flex  w-full h-full ">
          <div className="w-3/4 h-full p-6">
            {carts?.map((cart, i) => (
              <CartComp key={i} cart={cart} />
            ))}
          </div>
          <div className="w-1/4 h-full my-10 p-6 bg-orange-400 text-white text-xl font-medium">
            <h1>
              {" "}
              Toplam Fiyat:{" "}
              <span className="bg-white text-orange-400 rounded-full p-2 w-full mt-4 text-2xl font-bold cursor-pointer ">
                {totalAmount} TL
              </span>
            </h1>
            <br />
            <h1>
              {" "}
              Kargo :{" "}
              <span className="bg-white text-orange-400 rounded-full p-2 w-full mt-4 font-bold cursor-pointer ">
                ÜCRETSİZ!
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

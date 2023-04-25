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
        <div>
          {carts?.map((cart, i) => (
            <CartComp key={i} cart={cart} />
          ))}
        </div>
      ) : (
        <div>Sepetiniz Ürün yok</div>
      )}
    </div>
  );
};

export default Cart;

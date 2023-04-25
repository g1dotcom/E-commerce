import React, { useEffect, useState } from "react";

//icons
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { HiMenu } from "react-icons/hi";

//redux
import { getCartTotal } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";

//navigate(router-dom)
import { Link, useNavigate } from "react-router-dom";
import { GiCancel } from "react-icons/gi";

// // // // // // // // // // // // //
const Navbar = () => {
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.carts);

  //navigate
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  const [show, setShow] = useState(false);
  return (
    <div className=" flex flex-col sm:flex-row  items-center justify-between w-full md:w-4/5">
      <div className="flex  justify-evenly ">
        <button className="cursor-pointer  z-10 max-md:absolute max-md:top-1 max-md:left-2">
          <HiMenu
            onClick={() => setShow(!show)}
            size={40}
            style={{ color: "white" }}
          />
        </button>

        <div
          className={`bg-black fixed top-0 left-0 w-1/4 h-screen flex flex-col z-50 ${
            show
              ? "block transition-all duration-500 z-50  "
              : "hidden transition-all duration-500 z-50 "
          } `}
        >
          <ul className="flex flex-col items-center justify-center h-full w-full z-50 ">
            <button
              onClick={() => setShow(!show)}
              className="bg-white  rounded-full mb-20 cursor-pointer"
            >
              <GiCancel size={40} />
            </button>
            <li className="cursor-pointer">
              <Link to={"/"}> Anasayfa</Link>
            </li>
            <li className="cursor-pointer">
              <Link to={"/cart"}> Sepetim</Link>
            </li>
            <li className="cursor-pointer">
              <Link to={"/hakkımızda"}> Hakkımızda</Link>
            </li>
            <li className="cursor-pointer">
              <Link to={"/iletisim"}> İletişim</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex  flex-row  max-md:justify-center max-md:my-4">
        <input
          type="text"
          placeholder="Type here"
          className="input w-96 outline-none rounded-none p-2 ml-4 "
        />
        <button className="cursor-pointer">
          <AiOutlineSearch
            className="border-none rounded-r-xl p-2 "
            size={48}
            style={{ color: "white", background: "#f26522" }}
          />
        </button>
      </div>
      <div className="flex  max-md:justify-around ml-4 max-md:absolute max-md:top-1 max-md:right-2  ">
        <div
          onClick={() => navigate("/cart")}
          className="ml-6 flex items-center cursor-pointer text-white  relative"
        >
          <p className="font-bold max-md:hidden ">SEPET</p>
          <AiOutlineShoppingCart size={35} style={{ color: "white" }} />
          <p className="text-white font-bold z-10 cursor-pointer absolute -top-2 max-md:-top-1  -right-1 text-xs bg-red-500 rounded-full px-1">
            {carts?.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

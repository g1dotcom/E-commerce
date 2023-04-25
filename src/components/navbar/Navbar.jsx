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
    <div className="content flex flex-col sm:flex-row  items-center justify-between w-full md:w-4/5">
      <div className="flex w-full justify-evenly">
        <button className="cursor-pointer z-10 max-md:absolute max-md:top-1 max-md:left-2">
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
              <Link to={"/"}> İletişim</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-row w-full max-md:justify-center max-md:my-4">
        <input
          type="text"
          placeholder="Type here"
          className="input w-96 outline-none rounded-l-sm p-2 ml-4 "
        />
        <button className="cursor-pointer">
          <AiOutlineSearch
            className="border-none rounded-r-sm p-2 "
            size={40}
            style={{ color: "white", background: "#f26522" }}
          />
        </button>
      </div>
      <div className="flex w-full max-md:justify-around ml-4 max-sm:absolute max-md:top-1  ">
        <div className="flex  relative items-center text-white max-sm:-left-14">
          <p className="font-bold max-sm:hidden">SEPET</p>
          <AiOutlineShoppingCart
            size={30}
            style={{ color: "white" }}
            onClick={() => navigate("/cart")}
            className="cursor-pointer"
          />
          <p
            onClick={() => navigate("/cart")}
            className="text-white font-bold z-10 cursor-pointer absolute -top-2  right-1 text-sm bg-red-500 rounded-full px-1"
          >
            {carts?.length}
          </p>
        </div>
        <div className="ml-6 flex items-center text-white max-sm:-mr-24 ">
          <p className="font-bold ">PROFIL</p>
          <CgProfile size={30} style={{ color: "white" }} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

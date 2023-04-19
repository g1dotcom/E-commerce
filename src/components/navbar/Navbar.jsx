import React, { useEffect, useState } from "react";

//icons
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { HiMenu } from "react-icons/hi";
//redux
import { getCartTotal } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Navbar = ({ show, setShow }) => {
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.carts);

  console.log(carts);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  return (
    <div className="content flex flex-col sm:flex-row  items-center justify-between w-full md:w-4/5">
      <div className="flex w-full justify-evenly   ">
        <button className="cursor-pointer z-10 max-md:absolute max-md:top-1 max-md:left-2">
          <HiMenu size={40} style={{ color: "white" }} />
        </button>

        <select className="select w-1/8 font-bold  outline-none rounded-sm p-2 bg-selected text-white  ">
          <option disabled selected>
            Change
          </option>
          <option>Homer</option>
          <option>Marge</option>
          <option>Bart</option>
          <option>Lisa</option>
          <option>Maggie</option>
        </select>
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
          <AiOutlineShoppingCart size={50} style={{ color: "white" }} />
          <p className="textwhite font-bold z-10  absolute top-0  right-3 text-base bg-red-500 rounded-full px-1">
            {carts?.length}
          </p>
        </div>
        <div className="ml-6 flex items-center text-white max-sm:-mr-24 ">
          <p className="font-bold ">PROFIL</p>
          <CgProfile size={50} style={{ color: "white" }} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

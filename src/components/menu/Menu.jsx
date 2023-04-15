import React from "react";

//react icons
import { GiCancel } from "react-icons/gi";

//menu component
const Menu = ({ show, setShow }) => {
  return (
    <div
      className={`bg-black absolute top-0 left-0 w-1/4 h-screen flex flex-col z-30 ${
        show
          ? "block transition-all duration-500   "
          : "hidden transition-all duration-500 "
      }`}
    >
      <ul className="flex flex-col items-center justify-center h-full w-full">
        <button
          onClick={() => setShow(!show)}
          className="bg-white  rounded-full mb-20 cursor-pointer"
        >
          <GiCancel size={40} />
        </button>
        <li>
          <a href="#">Anasayfa</a>
        </li>
        <li>
          <a href="#">Hakkımızda</a>
        </li>
        <li>
          <a href="#">Ürünler</a>
        </li>
        <li>
          <a href="#">Iletisim</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;

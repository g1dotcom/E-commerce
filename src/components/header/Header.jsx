import React, { useState } from "react";

//components

//css
import "./header.css";

// react icons

import SliderComp from "../slider/SliderComp";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <li>
            <Link to={"/"}> Anasayfa</Link>
          </li>
          <li>
            <Link to={"/cart"}> Sepetim</Link>
          </li>
          <li>
            <Link to={"/"}> Ürünler</Link>
          </li>
          <li>
            <Link to={"/cart"}> İletişim</Link>
          </li>
        </ul>
      </nav>
      <h1 className="baslik max-md:text-4xl">ECOMMERS</h1>
      <Navbar />
      <div className="flex items-end justify-center  w-full h-full z-20  ">
        <SliderComp />
      </div>
    </div>
  );
};

export default Header;

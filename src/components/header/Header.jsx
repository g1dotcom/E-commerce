import React, { useState } from "react";

//components

import Menu from "../menu/Menu";

//css
import "./header.css";

// react icons

import SliderComp from "../slider/SliderComp";
import Navbar from "../navbar/Navbar";

const Header = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="header">
      <Menu show={show} setShow={setShow} />

      <nav>
        <ul>
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
      </nav>
      <h1 className="baslik max-md:text-4xl">ECOMMERS</h1>
      <Navbar show={show} setShow={setShow} />
      <div className="flex items-end justify-center  w-full h-full z-30  ">
        <SliderComp />
      </div>
    </div>
  );
};

export default Header;

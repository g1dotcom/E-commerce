import React from "react";

//icons
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <div className="flex w-1/4 justify-evenly p-5 font-bold">
        <h1>Hakkımızda</h1>
        <h1>İletişim</h1>
        <h1>Ürünlermiz</h1>
        <h1>Hakkımızda</h1>
      </div>
      <div className="flex w-1/6 justify-evenly p-5">
        <BsLinkedin size={30} />
        <BsGithub size={30} />
        <BsTwitter size={30} />
      </div>
      <div className="p-2">
        <h1 className="font-semibold">Copyright © 2023 - Gökhan SÜLE</h1>
      </div>
    </div>
  );
};

export default Footer;

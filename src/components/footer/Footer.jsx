import React from "react";

//icons
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

//link
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-gray-50 ">
      <div className="flex w-1/4 justify-evenly max-md:justify-around max-md:w-full p-5 font-bold">
        <Link to={"/"}> Anasayfa</Link>
        <Link to={"/iletisim"}> İletişim</Link>
        <Link to={"/hakkımızda"}> Hakkımızda</Link>
        <Link to={"/cart"}> Sepetim</Link>
      </div>
      <div className="flex w-1/6 justify-evenly max-md:justify-around max-md:w-full p-5">
        <Link
          to={"https://www.linkedin.com/in/g%C3%B6khan-s%C3%BCle-486a45233/"}
        >
          <BsLinkedin size={30} />
        </Link>
        <Link to={"https://github.com/g1dotcom"}>
          <BsGithub size={30} />
        </Link>
        <Link to={"https://twitter.com/pekala___"}>
          {" "}
          <BsTwitter size={30} />
        </Link>
      </div>
      <div className="p-2">
        <h1 className="font-semibold">Copyright © 2023 - Gökhan SÜLE</h1>
      </div>
    </div>
  );
};

export default Footer;

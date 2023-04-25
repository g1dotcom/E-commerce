import React from "react";
import Navbar from "../../components/navbar/Navbar";

const Hakkımızda = () => {
  return (
    <div className="w-full h-screen bg-[#f2f2f2] flex flex-col justify-center items-center ">
      <div className="bg-orange-400 flex justify-center py-4 items-end w-full absolute top-0">
        <Navbar />
      </div>
      <h1 className="text-4xl font-bold text-orange-400 mt-20 my-4">
        Neler Yapıyoruz ?{" "}
      </h1>
      <img
        className="shadow-xl shadow-orange-400"
        src="https://akademi.icerikbulutu.com/wp-content/uploads/2022/06/basarili-hakkimizda-sayfasi-1200x539.png"
        alt=""
      />
    </div>
  );
};

export default Hakkımızda;

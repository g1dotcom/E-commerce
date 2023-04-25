import React from "react";
import Navbar from "../../components/navbar/Navbar";

const Iletisim = () => {
  return (
    <div className="w-full h-screen bg-[#f2f2f2] flex flex-col justify-center items-center ">
      <div className="bg-orange-400 flex justify-center py-4 items-end w-full absolute top-0">
        <Navbar />
      </div>
      <div className="w-1/3 h-2/3 flex flex-col justify-evenly items-center bg-orange-100 rounded-lg p-4 shadow-2xl shadow-orange-500">
        <div className="form-control">
          <label className="input-group">
            <span className="bg-orange-400 text-white">İsim</span>
            <input
              type="text"
              placeholder="Gökhan Süle"
              className="input input-bordered"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label"></label>
          <label className="input-group">
            <span className="bg-orange-400 text-white">Email</span>
            <input
              type="text"
              placeholder="info@site.com"
              className="input input-bordered"
            />
          </label>
        </div>
        <textarea
          className="textarea border-orange-400 border-2 w-1/2 h-40"
          placeholder="Önerileriniz bizim için çok önemli"
        ></textarea>
        <button className="btn bg-orange-400 border-none w-full">Gönder</button>
      </div>
    </div>
  );
};

export default Iletisim;

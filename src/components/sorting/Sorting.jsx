import React from "react";

const Sorting = ({ setSort }) => {
  return (
    <div className="flex items-center justify-end mr-24 max-md:mr-4 w-full">
      <h1 className="text-white font-bold text-xl mr-4">Sıralama :</h1>
      <select
        onChange={(e) => setSort(e.target.value)}
        className="select w-24 font-bold  outline-none rounded-sm p-2 bg-selected text-orange-400 !bg-white "
      >
        <option disabled selected className="">
          Seçiniz
        </option>
        <option value="inc">Artan</option>
        <option value="dec">Azalan</option>
      </select>
    </div>
  );
};

export default Sorting;

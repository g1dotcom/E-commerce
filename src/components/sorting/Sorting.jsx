import React from "react";

const Sorting = ({ setSort }) => {
  return (
    <div className="flex items-end justify-end mr-24 w-full">
      <select
        onChange={(e) => setSort(e.target.value)}
        className="select w-1/8 font-bold  outline-none rounded-sm p-2 bg-selected text-white  "
      >
        <option disabled selected>
          Seçiniz
        </option>
        <option value="inc">Artan</option>
        <option value="dec">Azalan</option>
      </select>
    </div>
  );
};

export default Sorting;

import React, { useState } from "react";

//Components
import Header from "../../components/header/Header";
import Categories from "../../components/categories/Categories";
import Products from "../../components/products/Products";
import Sorting from "../../components/sorting/Sorting";
import Footer from "../../components/footer/Footer";

const Home = () => {
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  return (
    <div className="">
      <Header />
      <div className="flex items-end justify-end bg-orange-400 py-2 mt-10 mx-12 ">
        <Sorting setSort={setSort} />
      </div>
      ;
      <div className="flex p-6 bg-gray-100 h-auto">
        <div className="w-1/6 p-2">
          <Categories setCategory={setCategory} />
        </div>
        <div className="w-5/6 p-2 my-2 bg-white">
          <Products category={category} sort={sort} />
        </div>
      </div>
    </div>
  );
};

export default Home;

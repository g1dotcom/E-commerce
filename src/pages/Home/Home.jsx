import React, { useState } from "react";

//Components
import Header from "../../components/header/Header";
import Categories from "../../components/categories/Categories";
import Products from "../../components/products/Products";

const Home = () => {
  const [category, setCategory] = useState("");

  return (
    <div>
      <Header />

      <div className="flex p-12 bg-gray-100 h-auto">
        <div className="w-1/6 p-2">
          <Categories setCategory={setCategory} />
        </div>
        <div className="w-5/6 p-2 my-2 bg-white">
          <Products category={category} />
        </div>
      </div>
    </div>
  );
};

export default Home;

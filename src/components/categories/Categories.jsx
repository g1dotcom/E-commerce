import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { getCategories } from "../../redux/categorySlice";

const Categories = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className="categories flex flex-col justify-center items-center ">
      <div className="text-2xl categoriesbaslık p-2 w-full text-white  text-center ">
        KATEGORİLER
      </div>

      {categories?.map((category, i) => (
        <div
          key={i}
          className="p-2 cursor-pointer text-lg w-full text-center hover:bg-black hover:text-white"
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default Categories;
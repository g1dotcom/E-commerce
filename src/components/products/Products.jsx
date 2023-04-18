import React, { useEffect } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/productSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { products, productsStatus } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  console.log(products);

  return <div className="">ffff</div>;
};

export default Products;

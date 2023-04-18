import React, { useEffect } from "react";

//Loading
import Loading from "../Loading";
//components
import Product from "../product/Product";

//redux
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/productSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { products, productsStatus } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="">
      {productsStatus == "LOADING" ? (
        <Loading />
      ) : (
        <div className="flex flex-wrap justify-center">
          {products?.map((product, i) => (
            <Product key={i} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;

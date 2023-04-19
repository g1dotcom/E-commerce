import React, { useEffect } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";

//router
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../../redux/productDetailSlice";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productDetail, productDetailStatus } = useSelector(
    (state) => state.productDetail
  );

  useEffect(() => {
    dispatch(getDetailProduct(id));
  }, [dispatch, id]);

  console.log(productDetail);

  return <div className="bg-black w-full h-full">aaaaaaaaaaaaaaaaaa</div>;
};

export default Detail;

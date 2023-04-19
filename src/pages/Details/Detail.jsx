import React, { useEffect } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";

//router
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../../redux/productDetailSlice";

//Components
import DetailComp from "../../components/detailComp/DetailComp";
import Loading from "../../components/Loading";
import Navbar from "../../components/navbar/Navbar";

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

  return (
    <div className="">
      {productDetailStatus == "LOADING" ? (
        <Loading />
      ) : (
        <>
          <div className="bg-orange-400 flex justify-center items-end w-full">
            <Navbar />
          </div>
          <div className="p-16 ">
            <DetailComp productDetail={productDetail} />
          </div>
        </>
      )}
    </div>
  );
};

export default Detail;

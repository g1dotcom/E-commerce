import React, { useEffect, useState } from "react";

//Loading
import Loading from "../loading/Loading";
//components
import Product from "../product/Product";

//pagination
import ReactPaginate from "react-paginate";

//redux
import { useDispatch, useSelector } from "react-redux";
import { getCategoryProducts, getProducts } from "../../redux/productSlice";

// // // // // // // // // // // //
const Products = ({ category, sort }) => {
  const dispatch = useDispatch();
  const { products, productsStatus } = useSelector((state) => state.products);

  useEffect(() => {
    if (category) {
      dispatch(getCategoryProducts(category));
    } else {
      dispatch(getProducts());
    }
  }, [dispatch, category]);

  //pagination
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div className="">
      {productsStatus === "LOADING" ? (
        <Loading />
      ) : (
        <>
          <div className="flex flex-wrap justify-center">
            {currentItems
              ?.sort((a, b) =>
                sort === "inc"
                  ? a.price - b.price
                  : sort === "dec"
                  ? b.price - a.price
                  : products
              )
              ?.map((product, i) => (
                <Product key={i} product={product} />
              ))}
          </div>
          <ReactPaginate
            className="paginate"
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
          />
        </>
      )}
    </div>
  );
};

export default Products;

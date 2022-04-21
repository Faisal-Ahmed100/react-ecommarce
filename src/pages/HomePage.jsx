import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { addCart } from "../redux/cartSlice";
import { productThunk, STATUSES } from "../redux/productSlice";

const HomePage = () => {
  const dispatch = useDispatch();


  const { data, status } = useSelector((state) => state.product);


 

  useEffect(() => {
    dispatch(productThunk());

  }, [dispatch]);

  const handleClick = (productID) => {
    dispatch(addCart(productID));
  };
  if (status === STATUSES.LOADING) {
    return (
      <>
        <div className="flex h-screen justify-center items-center bg-gray-700 z-50">
          <div className="ring">
            Loading
            <span className="spans"></span>
          </div>
        </div>
      </>
    );
  }
  return (
    <div className="sm:bg-gray-300 bg-slate-100">
      <Navbar />
      <div className="w-full mt-10">
        <div className="flex justify-around flex-col gap-y-5 gap-x-1 sm:flex-row flex-wrap ">
          {data.map(product => {
            return (
              
                <div
                  className="w-full text-center rounded-md sm:w-1/3 h-auto md:w-1/4 xl:w-1/5 bg-white p-3 flex flex-col"
                  key={product.id}
                >
                  <img
                    className="w-[100px] h-[100px] m-auto"
                    src={product.image}
                    alt={product.title}
                  />
                  <span className="pt-3">Rate: {product.rating.rate}</span>
                  <br />
                  <Link
                    to={`/view/${product.id}`}
                    className="hover:underline hover:text-green-500 font-semibold text-gray-700 text-sm"
                  >
                    {product.title}
                  </Link>
                  <p className="font-semibold">Price: ${product.price}</p>
                  <div className="flex justify-center items-center">
                    <button
                      type="button"
                      className="bg-[#2D2A99] text-white py-1 px-3 rounded-sm"
                      onClick={() => handleClick(product)}
                    >
                      Add to crat
                    </button>
                  </div>
                </div>
              
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

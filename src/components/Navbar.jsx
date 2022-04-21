import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserUseAuth } from "../context/contextApi";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { BsFillCartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../redux/cartSlice";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch=useDispatch();
  const [active, setActive] = useState(false);
  const { user, logOut } = UserUseAuth();
  const handleClick = () => {
    setActive(!active);
  };
  const logOuts = async () => {
    try {
      await logOut();
    } catch (err) {
      alert(err.message);
    }
  };
  const handleRemove=(productID)=>{
dispatch(removeCart(productID))
  };




  return (
    <>
      <div className="bg-[#2e2a99de] px-3 py-3 sticky top-0 z-10">
        <nav className="flex justify-between items-center">
          <div className="text-white flex items-center gap-3">
            <div
              className="text-white sm:hidden flex items-center"
              onClick={handleClick}
            >
              {active ? (
                <span className="text-2xl hover:cursor-pointer hover:text-gray-400">
                  <MdClose />
                </span>
              ) : (
                <span className="text-2xl hover:cursor-pointer hover:text-gray-400">
                  <FiMenu />
                </span>
              )}
            </div>
            <Link to="/home" className="text-xl">
              Faisal
            </Link>
          </div>
          <ul className="sm:flex gap-5 hidden">
            <li className="">
              <Link className="text-white" to="/home">
                Home
              </Link>
            </li>
            <li className="">
              <Link className="text-white" to="/about">
                about
              </Link>
            </li>
            <li className="">
              <Link className="text-white" to="/contact">
                contact
              </Link>
            </li>
          </ul>

          <div className="flex gap-3 items-center">
            <div className="text-white mr-5">
              <button
                type="button"
                className="btn btn-primary buttons"
                data-toggle="modal"
                data-target="#exampleModalLong"
              >
                <div className="text-white text-xl flex relative">
                  <BsFillCartFill />
                  <span className="absolute top-[-10px] right-[-15px] bg-white text-black p-[1px] rounded-full w-5 h-5 font-semibold flex justify-center items-center">
                    {cartItems.length}
                  </span>
                </div>
              </button>

              <div
                className="modal fade"
                id="exampleModalLong"
                tabndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLongTitle"
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                   
                    <div className="modal-body ms-auto">
                      <div className="flex flex-col gap-5">
                        {cartItems.map((product) => (
                          <div key={product.id} className="flex justify-between items-center gap-5 bg-[#ffffffe3] p-2">
                            <Link to={`/cart/${product.id}`} className="flex justify-between items-center gap-5">
                            <img
                              className="w-[50px] h-[50px]"
                              src={product.image}
                              alt=""
                            />
                            <h1 className="text-black text-sm">
                              {product.title}
                            </h1>
                            
                            </Link>
                            <p className="text-black font-semibold">
                              ${product.price}
                            </p>
                            <button onClick={()=>handleRemove(product.id)} type="button" className="close">
                              &times;
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    
                  </div>
                </div>
              </div>
            </div>
            <span className="cursor-pointer text-white" onClick={logOuts}>
              LogOut
            </span>

            {user && (
                <img
                  className="w-[32px] h-[32px] rounded-full object-cover"
                  src="https://cdn4.vectorstock.com/i/1000x1000/59/33/person-icon-in-flat-style-man-symbol-vector-21095933.jpg"
                  alt="urlPics"
                />
              ) && (
                <img
                  className="border border-[#950accb2] w-[32px] h-[32px] rounded-full object-cover"
                  src={user && user.photoURL}
                  alt="urlPic"
                />
              )}
          </div>
        </nav>
        <div
          className={
            active
              ? "absolute sm:hidden left-[0px] transition-all top-[72px] z-20 h-screen bg-[#000000c7] w-1/2"
              : "absolute sm:hidden left-[-245px] transition-all top-[72px] z-20 h-screen bg-[#000000c7] w-1/2"
          }
        >
          <ul className="sm:flex gap-5">
            <li className="">
              <Link
                onClick={() => setActive(false)}
                className="py-2 px-3 block hover:border-r-[#2D2A99] hover:border-r-[3px] hover:bg-slate-400 text-white"
                to="/home"
              >
                Home
              </Link>
            </li>
            <li className="">
              <Link
                onClick={() => setActive(false)}
                className="text-white py-2 px-3 block hover:border-r-[#2D2A99] hover:border-r-[3px] hover:bg-slate-400"
                to="/about"
              >
                about
              </Link>
            </li>
            <li className="">
              <Link
                onClick={() => setActive(false)}
                className="text-white py-2 px-3 block hover:border-r-[#2D2A99] hover:border-r-[3px] hover:bg-slate-400"
                to="/contact"
              >
                contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

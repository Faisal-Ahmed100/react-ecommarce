
import { useDispatch, useSelector } from "react-redux";
import {
  addCart,
  removeCart,
  removeItems,
} from "../redux/cartSlice";

const Cart = () => {
  let total = 0;
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart.itemList);

 


  items.forEach((item) => {
    total += item.totalPrice;
  });
  const handleRemove = (item) => {
    dispatch(removeItems(item.id));
  };



  const incrimentItem = (item) => {
    dispatch(addCart(item));
  };

  const decrimentItem = (item) => {
    dispatch(removeCart(item.id));
  };

  return (
    <div className="sm:px-3 sm:h-auto">
      {items.length === 0 ? (
        <div className="flex justify-center items-center  bg-slate-300">
          <h1 className="p-10 text-3xl font-semibold">Your cart is emty!</h1>
        </div>
      ) : (
        <div className="flex flex-col bg-slate-300">
          {items.map((item) => (
            <div
              className="flex justify-between flex-col sm:flex-row px-2 py-2 items-center bg-white sm:m-2 mb-3"
              key={item.id}
            >
              <div className="sm:w-1/12 sm:h-1/12 w-full h-full">
                <img className="w-full h-full" src={item.imgUrl} alt="" />
              </div>
              <h1 className="text-md mt-2 sm:mt-0">
                <span className="font-semibold">Product Title :</span>{" "}
                {item.name}
              </h1>
              <h2 className="py-3 sm:py-0">
                <span className="font-semibold text-black">Price : </span>$
                {item.price}
              </h2>
              <h2 className="">
                <span className="font-semibold text-black">Total Price : </span>
                ${item.totalPrice}
              </h2>
              <div className="flex items-center gap-5 sm:py-0 py-3">
                <button
                  type="button"
                  className="text-2xl p-2 border font-semibold cursor-pointer"
                  onClick={() => decrimentItem(item)}
                >
                  -
                </button>
                <span className="">{item.quantity}</span>
                <button
                  type="button"
                  className="text-2xl p-2 border font-semibold cursor-pointer"
                  onClick={() => incrimentItem(item)}
                >
                  +
                </button>
              </div>

              <div className="">
                <button
                  className="text-orange-700 hover:text-red-700 font-semibold text-md border-none outline-none"
                  onClick={() => handleRemove(item)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-end mb-10 px-2 py-3 bg-white sm:mx-2">
            <span className="font-semibold ">Total: ${total}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

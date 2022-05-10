import React, { useEffect} from "react";
import Banner from "../img/banner.jpg";
import Res from "../img/res.jpg";
import { useDispatch, useSelector } from "react-redux";
import { fatchProducts } from "../redux/productSlice";
import { STATUSES } from "../redux/productSlice";
import { addCart } from "../redux/cartSlice";

const Home = () => {

  const dispatch=useDispatch();
  const {data:products,status}=useSelector(state=>state.product);
  const cartItems=useSelector(state=>state.cart.itemList);
  console.log(cartItems)


  useEffect(() => {
dispatch(fatchProducts())

  }, [dispatch]);

  if(status===STATUSES.LOADING){
    return <h2 className="text-green-400">Loading...</h2>
  }
  if(status===STATUSES.ERROR){
    return <h2 className="text-red-400">Something went wrong...</h2>
  }


  const handleAdd=(cartItems)=>{
    // console.log(item)
dispatch(addCart(cartItems))
  }
  return (
   <div className="">
     <div className="">
     <div className="relative">
      <div className="h-screen hidden md:block -z-10 absolute">
        <img className="object-cover h-full" src={Banner} alt="" />

      </div>
      <div className="h-[100vh] w-full md:hidden -z-10">
        <img className=" h-full w-full" src={Res} alt="" />
      </div>
      <div className=" z-10 flex  justify-around flex-col gap-y-5 gap-x-1 sm:flex-row flex-wrap ">
{products.map((item)=>(
  
        <div className="w-fulltext-center text-center mt-10 rounded-md sm:w-1/3 h-auto md:w-1/4 xl:w-1/5 bg-white p-3 flex flex-col" key={item.id}>
    
            <img className="w-full h-full" src={item.images[2]} alt="" />
          <h2 className="mt-3">{item.brand}</h2>
       
          <p>${item.price}</p>
          <div className="mt-3">
            <p  className="bg-blue-600 rounded-sm text-white py-2 px-3 cursor-pointer" onClick={()=>handleAdd(item)}>Add to cart</p>
          </div>
        </div>
      ))}
</div>
    </div>


     </div>
   </div>
  );
};

export default Home;

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const View = () => {
    const [data,setData]=useState([]);
    let {id} =useParams();
    
    
    useEffect(()=>{
        const faceApi= async()=>{
        const res=await fetch(`https://fakestoreapi.com/products/${id}`)
        const datas=await res.json();
        setData(datas);
    }
        faceApi();
    },[id])
   
  return (
    <>
    <Navbar />
  
    <div className="w-full mt-10">
      <div className="flex justify-start flex-col gap-x-1 sm:flex-row flex-wrap " key={data.id}>
        
     <div className="sm:w-1/3 border p-5">
<img src={data.image} alt={data.title} />
     </div>
     <div className="sm:w-1/2 w-full border p-5" >
         <h1 className='text-3xl mb-3'>{data.title}</h1>
         <p>{data.description}</p>
         <h3 className='font-semibold'>Category: {data.category}</h3>
         <p className='font-semibold'>Price: ${data.price}</p>
         {/* <p>Rating: {data.rating.rate}</p> */}
         <button className='bg-[#2D2A99] text-white py-1 px-3 rounded-sm'>Buy Now</button>
     </div>
        
        
      </div>
      
    </div>
    </>
  )
}

export default View
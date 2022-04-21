import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserUseAuth } from '../../context/contextApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signin = () => {
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[error,setError]=useState("");
 const {signin,siginwithgoogle,}=UserUseAuth();
 let navigate=useNavigate();
  const handleSub= async(e)=>{
    e.preventDefault();
    setEmail("");
    setPassword("")
    
    try{
      await signin(email,password);
      navigate('/login');
      setError("");
      toast('Account create sucessfully!')
    }
    catch(err){
      setError(err.message);
      toast(err.message);
    }
  }
  const signInWithGoogle= async()=>{
try{
  await siginwithgoogle();
  navigate('/home')
}catch(err){
  console.log(err);
}
  }
  return (
    <>
    <ToastContainer position='top-center'/>
    <div className="h-screen bg-gray-100 px-3 flex justify-center items-center">
      <form onSubmit={handleSub} className="bg-[#fff] p-3 md:w-[40%] w-[90%] flex flex-col gap-2">
        <h1 className="pb-5 text-3xl text-center font-semibold text-gray-500">
          Create a new account
        </h1>
        <hr/>
        <label htmlFor="email" className="text-xl font-semibold text-gray-500">
          Enter your email
        </label>
        <input
          type="email"
          placeholder="abc@gamail.com"
          className="py-2 px-3 rounded-sm outline-none border mb-5 border-gray-500"
          name=""
          id="email"
          onChange={(e)=>setEmail(e.target.value)}
        />
        <label
          htmlFor="password"
          className="text-xl font-semibold text-gray-500"
        >
          Enter your Password
        </label>
        <input
          type="password"
          placeholder="&Flaj125#"
          className="py-2 px-3 rounded-sm outline-none border border-gray-500"
          name=""
          id="password"
          onChange={(e)=>setPassword(e.target.value)}
        />
        {error && <p className='text-red-500'>{error}</p>}
        <div className="flex items-center justify-center">
          <button type="submit" className="bg-[#2D2A99] hover:bg-transparent hover:text-black rounded-md border border-[#2D2A99] text-white py-2 px-5">
            SignUp
          </button>
          <br />
          
        </div>
        <p className='cursor-pointer hover:text-orange-400' onClick={signInWithGoogle}>SignIn with Google</p>
        <p className="flex gap-2">
          Already have an account?<Link className="underline hover:text-red-500" to="/login">Login</Link>
        </p>
      </form>
    </div>
    </>
   
  )
}

export default Signin
import React from 'react'
import { Link } from 'react-router-dom';
import ImgLogo from '../img/Amazon.webp';
import {GoSearch} from 'react-icons/go'
import {FiShoppingCart} from 'react-icons/fi'
import {FiMenu} from 'react-icons/fi'
import {MdAccountBox} from 'react-icons/md'
import { useSelector } from 'react-redux';

const Header = () => {
    const items=useSelector(state=>state.cart.totalQuantity);

  return (
    <div className='bg-[#090505] py-3 md:py-2 md:px-2 px-3 sticky top-0 z-10' >
        <div className="flex md:justify-between items-center gap-3">
           <div className="text-white md:hidden">
               <FiMenu className='text-3xl'/>
           </div>
            <Link to='/' className='text-white w-[100px]'>
                <img className='w-full h-full hover:border hover:border-1 hover:border-white' src={ImgLogo} alt="" />
            </Link>
            




            <div className=" gap-3 w-full justify-end items-center hidden md:flex">
            <div className="flex-1 relative hidden md:block">
                <input type="search" className='w-full border-none outline-none py-2 px-2 rounded-md' placeholder='search products...'/>
                <div className="absolute top-0 flex items-center p-3 rounded-r-md right-0 bg-orange-300 hover:bg-orange-400 h-full">
                <button className='text-xl' type='submit'><GoSearch /></button>
                </div>
            </div>
            <div className="flex-3 md:px-3">
                <Link to='/signIn' className='text-white'>
                    <span className='text-sm'>Hello,Sign in</span>
                    <br />
                    <span className='text-md'>Account & lists</span>
                </Link>
            </div>
            <div className="flex-3 md:px-3">
                <Link to='/returnorders' className='text-white'>
                    <span>Return</span>
                    <br />
                    <span>& Orders</span>
                </Link>
            </div>
            <div className="pr-2">
                <Link className='text-white flex relative' to='/cart'>
                    <FiShoppingCart className='text-3xl'/>
                    <span className='absolute font-semibold top-[-18px] text-orange-500 right-[-10px] text-lg'>{items}</span>
                </Link>
            </div>
            </div>



            
                {/* second */}
            <div className=" gap-3 w-full justify-end items-center flex md:hidden">
            <div className="flex-1 relative hidden">
                <input type="search" className='w-full border-none outline-none py-2 px-2 rounded-md' placeholder='search products...'/>
                <div className="absolute top-0 flex items-center p-3 rounded-r-md right-0 bg-orange-300 hover:bg-orange-400 h-full">
                <button className='text-xl' type='submit'><GoSearch /></button>
                </div>
            </div>
            <div className="flex-3 md:px-3">
                <Link to='/signIn' className='text-white flex gap-1 items-center'>
                    <span className='text-md'>Sign in</span>
                   
                    <span className='text-md'><MdAccountBox className='text-3xl'/></span>
                </Link>
            </div>
            
            <div className="pr-2">
                <Link className='text-white flex relative' to='/cart/'>
                    <FiShoppingCart className='text-3xl'/>
                    <span className='absolute font-semibold top-[-18px] text-orange-500 right-[-10px] text-lg'>{items}</span>
                </Link>
            </div>
            </div>
        </div>
        <div className=" md:hidden mt-3">
        <div className="relative">
                <input type="search" className='w-full border-none outline-none py-2 px-2 rounded-md' placeholder='search products...'/>
                <div className="absolute top-0 flex items-center p-3 rounded-r-md right-0 bg-orange-300 hover:bg-orange-400 h-full">
                <button className='text-xl' type='submit'><GoSearch /></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
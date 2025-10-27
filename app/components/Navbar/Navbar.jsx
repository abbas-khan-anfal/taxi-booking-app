'use client';
import React, { useState } from 'react';
import darkLogo from '@/public/dark-logo.png';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button/Button';
import { usePathname, useRouter } from 'next/navigation';

function Navbar() {

  const router = useRouter();
  const pathname = usePathname();
  const [nav, setNav] = useState(false);

  const toggleHandler = () => {
    setNav(!nav);
  }

  return (
    <>
    
    <div className={`${nav ? 'fixed' : 'hidden'} lg:hidden top-0 left-0 bottom-0 right-0 z-10 bg-gray-300/50`} onClick={toggleHandler}></div>

    <nav className='flex justify-between items-center px-10 py-2 border-b border-b-gray-200'>

        <div>
            <Image src={darkLogo} height={1000} width={1000} className='md:max-h-20 md:max-w-35 sm:h-18 sm:w-33 h-15 w-30 object-cover border border-gray-light cursor-pointer' alt='Booking' title='Booking' onClick={() => router.push('/')} />
        </div>


        <div className={`flex flex-col justify-start items-start lg:block fixed lg:relative top-0 lg:left-0 ${nav ? 'left-0' : '-left-full'} bottom-0 bg-white shadow-2xl lg:shadow-none w-[80%] md:w-[40%] lg:w-full z-11 p-5 lg:p-0 overflow-y-auto overflow-x-hidden lg:overflow-y-hidden lg:overflow-x-auto`}>

          <div className='mb-5 flex flex-col lg:flex-row lg:justify-end lg:items-center lg:gap-2 order-2'>

            <div className='flex justify-center items-center gap-2 mb-3 lg:mb-0'>
              <button className='text-black text-3xl cursor-pointer'><i className='fa-solid fa-phone-volume' onClick={() => router.push('/booking')}></i></button>
              <button className='cursor-pointer font-medium p-1 rounded-md' >
                <span className='font-normal text-[15px]'>For Booking Call</span><br />
                +9317980098009
                </button>
            </div>
            <Button text='Get A Free Quote' size='md' clickHandler={() => router.push('/booking')} />
          </div>

          <ul className='order-1 w-full  mb-5 lg:mb-0 static lg:flex lg:justify-end lg:items-baseline'>
            <div className='text-right'>
              <button className='bg-black text-white font-medium rounded-md h-10 w-10 cursor-pointer hover:opacity-85 active:opacity-50 transition-all duration-400 lg:hidden inline-block mb-5' onClick={toggleHandler}>&#10005;</button>
            </div>
            <li className='block lg:inline-block md:m-1'><Link href="/" className={`block lg:inline mb-1 lg:mb-0 lg:ml-5 font-medium text-xl px-2 py-2 lg:px-2 lg:py-0 rounded-md lg:rounded-none hover:bg-gray-200 lg:hover:bg-transparent lg:bg-transparent border-b-2 hover:lg:border-b-black border-b-transparent ${pathname === "/" ? "md:border-b-2 lg:border-b-black bg-gray-200" : ""}`}>Home</Link></li>

            <li className='block lg:inline-block md:m-1'><Link href="/booking" className={`block lg:inline mb-1 lg:mb-0 lg:ml-5 font-medium text-xl px-2 py-2 lg:px-2 lg:py-0 rounded-md lg:rounded-none hover:bg-gray-200 lg:hover:bg-transparent lg:bg-transparent border-b-2 hover:lg:border-b-black border-b-transparent ${pathname === "/booking" ? "md:border-b-2 lg:border-b-black bg-gray-200" : ""}`}>Booking</Link></li>

            <li className='block lg:inline-block md:m-1'><Link href="/orders" className={`block lg:inline mb-1 lg:mb-0 lg:ml-5 font-medium text-xl px-2 py-2 lg:px-2 lg:py-0 rounded-md lg:rounded-none hover:bg-gray-200 lg:hover:bg-transparent lg:bg-transparent border-b-2 hover:lg:border-b-black border-b-transparent ${pathname === "/orders" ? "md:border-b-2 lg:border-b-black bg-gray-200" : ""}`}>Orders</Link></li>

            <li className='block lg:inline-block md:m-1'><Link href="/about" className={`block lg:inline mb-1 lg:mb-0 lg:ml-5 font-medium text-xl px-2 py-2 lg:px-2 lg:py-0 rounded-md lg:rounded-none hover:bg-gray-200 lg:hover:bg-transparent lg:bg-transparent border-b-2 border-b-transparent hover:lg:border-b-black ${pathname === "/about" ? "md:border-b-2 lg:border-b-black bg-gray-200" : ""}`}>About Us</Link></li>

            <li className='block lg:inline-block md:m-1'><Link href="/contact" className={`block lg:inline mb-1 lg:mb-0 lg:ml-5 font-medium text-xl px-2 py-2 lg:px-2 lg:py-0 rounded-md lg:rounded-none hover:bg-gray-200 lg:hover:bg-transparent lg:bg-transparent border-b-2 hover:lg:border-b-black border-b-transparent ${pathname === "/contact" ? "md:border-b-2 lg:border-b-black bg-gray-200" : ""}`}>Contact Us</Link></li>
          </ul>
        </div>

        <button className='bg-black text-white font-medium rounded-md h-10 w-10 cursor-pointer hover:opacity-85 active:opacity-50 transition-all duration-400 lg:hidden inline-block' onClick={toggleHandler}>&#9776;</button>

    </nav>
    </>
  )
}

export default Navbar;
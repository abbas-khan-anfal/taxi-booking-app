import React from 'react';
import darkLogo from '@/public/dark-logo.png';
import Image from 'next/image';
import Title from '../Title/Title';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Link from 'next/link';

function Footer() {
  return (
    <footer className='bg-gray-light px-10 py-5'>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>

            <div className='p-2'>
                <Image src={darkLogo} alt="Booking.com" title='Booking.com' width={1000} height={1000} className='h-15 w-40 md:h-20 md:w-50 border-black object-cover mb-5 cursor-pointer' />
                <p className='text-black text-justify text-xl font-normal'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum ab vero eaque, modi nihil vitae. Saepe deleniti dolorem doloremque distinctio, veniam asperiores aliquam ipsum? Quod suscipit quos hic accusamus? Libero?</p>
            </div>

            <div className='text-center p-10'>
                <Title size='sm' text='Active Links' classes='mb-5' />
                <ul>
                  <li className='block'><a href="" className='inline-block hover:underline font-medium mb-2'>Home</a></li>
                  <li className='block'><a href="" className='inline-block hover:underline font-medium mb-2'>About</a></li>
                  <li className='block'><a href="" className='inline-block hover:underline font-medium mb-2'>Contact</a></li>
                  <li className='block'><a href="" className='inline-block hover:underline font-medium mb-2'>Services</a></li>
                </ul>
            </div>

            <div className='text-center p-10'>
                <Title size='sm' text='Other Links' classes='mb-5' />
                <ul>
                  <li className='block'><a href="" className='inline-block hover:underline font-medium mb-2'>Privacy & Policy</a></li>
                  <li className='block'><a href="" className='inline-block hover:underline font-medium mb-2'>Terms & Conditions</a></li>
                </ul>
            </div>

            <div className='text-center p-10'>
                <Title size='sm' text='Follow Us' classes='mb-5' />
                <ul className='flex gap-1 justify-center items-center'>

                  <li>
                    <Link href="" className='bg-transparent text-black w-10 h-10 rounded-full flex justify-center items-center font-medium text-2xl hover:bg-gray-200 hover:opacity-85 active:opacity-50 transition-all duration-400'>
                      <i className="fa-brands fa-facebook"></i>
                    </Link>
                  </li>

                  <li>
                    <Link href="" className='bg-transparent text-black w-10 h-10 rounded-full flex justify-center items-center font-medium text-2xl hover:bg-gray-200 hover:opacity-85 active:opacity-50 transition-all duration-400'>
                      <i className="fa-brands fa-x-twitter"></i>
                    </Link>
                  </li>

                  <li>
                    <Link href="" className='bg-transparent text-black w-10 h-10 rounded-full flex justify-center items-center font-medium text-2xl hover:bg-gray-200 hover:opacity-85 active:opacity-50 transition-all duration-400'>
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </li>

                  <li>
                    <Link href="" className='bg-transparent text-black w-10 h-10 rounded-full flex justify-center items-center font-medium text-2xl hover:bg-gray-200 hover:opacity-85 active:opacity-50 transition-all duration-400'>
                      <i className="fa-brands fa-youtube"></i>
                    </Link>
                  </li>

                </ul>
            </div>

        </div>

        <div className='grid grid-cols-1 text-center py-5'>
          <p className='font-medium text-base text-gray'>© 2025 Booking.com, All Rights Reserved</p>
        </div>

    </footer>
  )
}

export default Footer;
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Dashboard({ component }) {

  const [aside, setAside] = useState(false);
  const currentPath = usePathname();
  const path = currentPath?.toString();

  const asideHandler = () => {
    setAside(!aside);
  }

  return (
    <section className='flex justify-center items-center'>

      {/* sidebar bg */}
      <div onClick={asideHandler} className={`z-10 ${aside ? 'fixed' : 'hidden'} top-0 left-0 bottom-0 right-0 bg-black/50 lg:hidden`}></div>

      {/* sidebar */}
      <aside className={`w-[80%] sm:w-[40%] lg:w-[20%] fixed ${aside ? 'left-0' : '-left-full'} lg:left-0 top-0 bottom-0 lg:relative bg-gray-light min-h-screen overflow-x-hidden overflow-y-auto z-11 transition-all duration-400 p-3 flex flex-col justify-between`}>
        <div>
          <div className='text-left px-2 mb-3'>
            <button className='bg-black text-white cursor-pointer w-10 h-10 rounded-full hover:opacity-85 active:opacity-50 transition-all duration-400 lg:hidden' onClick={asideHandler}>&#10005;</button>
          </div>
          <h1 className='px-2 text-2xl font-medium cursor-pointer mb-3'>Booking</h1>
          <ul>
            <li><Link href="/dashboard" className={`hover:bg-blue-light block rounded-md font-medium p-2 ${path === "/dashboard" ? 'bg-blue-light' : ''} mb-0.5`}>Home</Link></li>
            <li><Link href="/dashboard/bookings" className={`hover:bg-blue-light block rounded-md font-medium p-2 ${path === "/dashboard/bookings" ? 'bg-blue-light' : ''} mb-0.5`}>Bookings</Link></li>
            <li><Link href="/dashboard/cars" className={`hover:bg-blue-light block rounded-md font-medium p-2 ${path === "/dashboard/cars" ? 'bg-blue-light' : ''} mb-0.5`}>Cars</Link></li>
            <li><Link href="/dashboard/messages" className={`hover:bg-blue-light block rounded-md font-medium p-2 ${path === "/dashboard/messages" ? 'bg-blue-light' : ''} mb-0.5`}>Messages</Link></li>
            <li><Link href="/dashboard/settings" className={`hover:bg-blue-light block rounded-md font-medium p-2 ${path === "/dashboard/settings" ? 'bg-blue-light' : ''} mb-0.5`}>Settings</Link></li>
          </ul>
        </div>
        <div>
          <Link href="" className='hover:bg-blue-light block rounded-md font-medium p-2'>Logout</Link>
        </div>
      </aside>


      {/* main */}
      <main className='w-[100%] lg:w-[80%] bg-gray-100 h-screen overflow-hidden'>
        <div className='h-[10%] bg-blue flex justify-between items-center px-3'>
          <div>
              <button className='bg-black text-white cursor-pointer w-10 h-10 rounded-full hover:opacity-85 active:opacity-50 transition-all duration-400 lg:hidden mr-2' onClick={asideHandler}>&#9776;</button>
              <h1 className='px-2 text-2xl font-medium mb-3 inline text-white'>Dashboard</h1>
          </div>
        </div>
        <section className='h-[90%] bg-white overflow-x-hidden overflow-y-auto p-5 w-full'>
         {component}
        </section>
      </main>
    </section>
  )
}

export default Dashboard;
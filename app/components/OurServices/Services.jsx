import React from 'react';
import Title from '../Title/Title';

function Services() {
  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-20 px-10'>
        <div className='flex flex-col justify-center gap-5 text-center bg-gray-100 transition-all duration-400 p-5 rounded-md hover:bg-gray-200 hover:shadow-2xl'>
          <div className='text-5xl text-black'><i className="fa-solid fa-taxi"></i></div>
          <Title text="Easy Booking" size="lg" />
          <p className='text-shadow-md text-md'>Book your ride in just a few taps with our simple and fast process.</p>
        </div>

        <div className='flex flex-col justify-center gap-5 text-center bg-gray-100 transition-all duration-400 p-5 rounded-md hover:bg-gray-200 hover:shadow-2xl'>
          <div className='text-5xl text-black'><i className="fa-solid fa-money-bill"></i></div>
          <Title text="Affordable Rides" size="lg" />
          <p className='text-shadow-md text-md'>Transparent pricing with no hidden charges — ride more, save more.</p>
        </div>

        <div className='flex flex-col justify-center gap-5 text-center bg-gray-100 transition-all duration-400 p-5 rounded-md hover:bg-gray-200 hover:shadow-2xl'>
          <div className='text-5xl text-black'><i className="fa-solid fa-user-shield"></i></div>
          <Title text="Safe & Reliable" size="lg" />
          <p className='text-shadow-md text-md'>Professional drivers and 24/7 support for a secure journey.</p>
        </div>

    </section>
  )
}

export default Services;
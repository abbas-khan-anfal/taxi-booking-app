import React from 'react';
import Button from '../Button/Button';

function Hero() {
  return (
    <header 
      className="h-80 md:h-120 lg:h-130 flex flex-col gap-6 justify-center items-center relative bg-cover bg-center bg-no-repeat p-10 text-center"
      style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,1)), url('/hero7.jpg')" }}
    >
      <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-medium">
        Book Your Ride Anytime, Anywhere
      </h1>
      <p className='text-white font-medium text-base'>
        Fast, reliable, and affordable taxi booking at your fingertips. Choose your ride,<br></br> confirm in seconds, and travel with ease.
      </p>
      <Button classes="bg-white text-black" text="Quote & Book Now" />
    </header>
  )
}

export default Hero;
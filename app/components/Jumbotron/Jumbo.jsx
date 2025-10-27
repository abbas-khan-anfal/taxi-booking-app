import React from 'react';

function Jumbo({ text = "Booking" }) {
  return (
    <section 
      className="h-70 md:h-90 lg:h-100 flex flex-col gap-6 justify-center items-center relative bg-cover bg-center bg-no-repeat p-10 text-center"
      style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,1)), url('/hero7.jpg')" }}
    >
      <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-medium">
        {text}
      </h1>
    </section>
  )
}

export default Jumbo;
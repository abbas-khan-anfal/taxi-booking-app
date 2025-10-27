import React from 'react';
import Title from '../Title/Title';
import Button from '../Button/Button';

function AboutSection() {
  return (
    <section className="relative py-20 px-10 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,1)), url('/aboutbg.jpg')" }}>

        {/* Content */}
        <div className="relative flex flex-col justify-center items-center gap-5 text-white">
            <Title text="About Us" size="lg" />
            <p className="text-xl font-medium text-center max-w-4xl">
            There are many variations of passages of Lorem Ipsum available, but the
            majority have suffered alteration in some form, by injected humour, or
            randomised words which don't look even slightly believable. If you are
            going to use a passage of Lorem Ipsum, you need to be sure there isn't
            anything embarrassing hidden in the middle of text.
            </p>
            <hr className='w-30 text-white' />
            <p className="text-xl font-medium text-center max-w-4xl">
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
            </p>
            <Button text="Read More" classes='bg-white text-black' link="/about" />
        </div>
    </section>
  )
}

export default AboutSection;
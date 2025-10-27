import React from 'react';
import Title from '../components/Title/Title';
import Image from 'next/image';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import Textarea from '../components/Textarea/Textarea';
import Jumbo from '../components/Jumbotron/Jumbo';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

function page() {
  return (
    <>
      <Navbar/>
      <Jumbo text='Contact Us' />

      <section className='grid grid-cols-1 md:grid-cols-2 px-10 py-20 md:py-30 lg:py-40 gap-10 lg:gap-30'>
        
        <div>
          <Title text='Drop A Query' classes='mb-5' size='lg' />
          <form action="" className='flex flex-col justify-center items-center gap-5'>
            <Input type='text' placeholder='Name' />
            <Input type='email' placeholder='Email' />
            <Textarea placeholder='Message' rows={6} />
            <Button type="submit" text='Send' classes='w-full' />
          </form>

        </div>

        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105627.89709703537!2d73.15353668369247!3d34.17519564043071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38de3111557ac517%3A0x6e59a635b12e952c!2sAbbottabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1757958699526!5m2!1sen!2s" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full h-90 md:h-110'></iframe>
        </div>

      </section>


      <Footer/>
    </>
  )
}

export default page;
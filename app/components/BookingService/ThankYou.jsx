import Image from 'next/image';
import React from 'react';
import Title from '../Title/Title';
import Button from '../Button/Button';

function ThankYou() {
  return (
    <section className='p-10 flex justify-center items-center'>
        <div className='flex flex-col gap-5 items-center'>
            <Image src="/tick.png" alt="Thank You" width={500} height={500} className='rounded-full h-30 w-30' />
            <Title text='Thank You For Your Order' size='md' />
            <Button text='Back to Home' link='/' />
        </div>
    </section>
  )
}

export default ThankYou;
'use client';
import React, { useContext, useEffect, useState } from 'react';
import Input from '../Input/Input';
import Title from '../Title/Title';
import Textarea from '../Textarea/Textarea';
import Button from '../Button/Button';
import BookingContext from '@/app/context/booking/Context';
import { useRouter } from 'next/navigation';

function ContactInfo() {

    const router = useRouter();
    const {
        fullName, setFullName,
        email, setEmail,
        phone, setPhone,
        paymentMethod, setPaymentMethod,
        vehicle, smLuggage, lgLuggage, totalPsgrs,
        pickupDate, pickupTime, pickupLocation, dropoffLocation
      } = useContext(BookingContext);

      const [btnStatus, setBtnStatus] = useState(true);

      useEffect(() => {
        if(vehicle?.trim() === "" || !totalPsgrs || pickupDate?.trim() === "" || pickupTime?.trim() === "" || pickupLocation?.trim() === "" || dropoffLocation?.trim() === "")
        {
            setBtnStatus(true);
            router.push('/booking?ride_details');
        }
        if(fullName?.trim() === "" || email?.trim() === "" || phone?.trim() === "" || paymentMethod?.trim() === "")
        {
            setBtnStatus(true);

        }
        else
        {
            setBtnStatus(false);
        }
      }, [fullName, email, phone, paymentMethod]);

    return (
    <>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>

            {/* col 1 */}
            <div>
                <div className='mb-5'>
                    <Title text='Contact Information' size='md' />
                </div>

                <div className='mb-5'>
                    <Input type="text" placeholder='Full Name' changeHandler={e => setFullName(e.target.value)} val={fullName} />
                </div>

                <div className='mb-5'>
                    <Input type="email" placeholder='Email' changeHandler={e => setEmail(e.target.value)} val={email} />
                </div>

                <div className='mb-5'>
                    <Input type="text" placeholder='Phone Number' changeHandler={e => setPhone(e.target.value)} val={phone} />
                </div>

                <div className='mb-5'>
                    <select className={`text-xl py-3 px-1 border-none outline outline-gray hover:outline-2 hover:outline-black focus:outline-2 focus:outline-black bg-white w-full`} placeholder="Payment Method" onChange={e => setPaymentMethod(e.target.value)} value={paymentMethod}>
                        <option value="" disabled selected>Add Payment Method</option>
                        <option value="cash">Cash</option>
                    </select>
                </div>

            </div>

        </div>

        <div className='flex justify-between items-center'>
            <Button text='<< Prev' link="/booking?choose_vehicle" />
            <Button text='Confirm Booking' link="/booking?confirm_booking" disabled={btnStatus} />
        </div>


    </>
    )
}

export default ContactInfo;
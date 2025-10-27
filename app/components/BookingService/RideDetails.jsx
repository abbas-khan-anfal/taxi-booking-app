'use client';
import React, { useContext, useEffect, useRef, useState } from 'react';
import Input from '../Input/Input';
import Title from '../Title/Title';
import Textarea from '../Textarea/Textarea';
import Button from '../Button/Button';
import useBooking from '@/app/hooks/booking/useBooking';
import BookingContext from '@/app/context/booking/Context';

function RideDetails() {

    const [isTypingPickup, setIsTypingPickup] = useState(true);
    const [isTypingDropoff, setIsTypingDropoff] = useState(true);
    const timer = useRef(null);
    const { pickupLocation, setPickupLocation, pickupDate, setPickupDate, pickupTime, setPickupTime, pickupDetails, setPickupDetails, dropoffLocation, setDropoffLocation, dropoffDetails, setDropoffDetails } = useContext(BookingContext);

    const [btnStatus, setBtnStatus] = useState(true);

    const { findLocationHandler, pLocations, setPLocations, dLocations, setDLocations } = useBooking();

    useEffect(() => {
        if(!isTypingPickup)
        {
            return;
        }
        if(timer.current)
        {
            clearTimeout(timer.current);
        }
        timer.current = setTimeout(() => {
            findLocationHandler(pickupLocation, "pickup");
        }, 2000);
    }, [pickupLocation]);

    useEffect(() => {
        if(!isTypingDropoff)
        {
            return;
        }
        if(timer.current)
        {
            clearTimeout(timer.current);
        }
        timer.current = setTimeout(() => {
            findLocationHandler(dropoffLocation, "dropoff");
        }, 2000);
    }, [dropoffLocation]);

    useEffect(() => {
        if(pickupLocation?.trim() === "" || pickupDate?.trim() === "" || pickupTime?.trim() === "" || dropoffLocation?.trim() === "")
        {
            setBtnStatus(true);
        }
        else
        {
            setBtnStatus(false);
        }
    }, [pickupLocation, pickupDate, pickupTime, dropoffLocation]);


    return (
        <>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>

            {/* col 1 */}
            <div>
                <div className='mb-5'>
                    <Title text='Pickup Details' size='md' />
                </div>

                <div className='flex flex-col md:flex-row md:justify-between gap-5 items-stretch md:items-center mb-5'>
                    <div className='w-2/2 md:w-1/2'>
                        <label htmlFor="" className='text-base text-gray inline-block mb-2'>PICKUP DATE</label>
                        <Input type="date" placeholder='Pickup Date' changeHandler={e => setPickupDate(e.target.value)} val={pickupDate} />
                    </div>
                    <div className='w-2/2 md:w-1/2'>
                        <label htmlFor="" className='text-base text-gray inline-block mb-2'>PICKUP TIME</label>
                        <Input type='time' placeholder='Pickup Time' changeHandler={e => setPickupTime(e.target.value)} val={pickupTime} />
                    </div>
                </div>

                <div className='relative mb-5'>
                    <Input type="text" placeholder='Pickup Location' changeHandler={e => {setIsTypingPickup(true); setPickupLocation(e.target.value)}} val={pickupLocation} />
                    {
                        pLocations && pLocations?.length > 0
                        ?
                        (
                            <div className='py-1 bg-gray-light absolute w-full mt-0.5 shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-gray'>
                                {
                                    pLocations?.map((location, index) =>
                                        <button key={index} className='block p-1 hover:bg-gray-200 w-full' onClick={() => {
                                            clearTimeout(timer.current);
                                            setIsTypingPickup(false);
                                            setPLocations([]);
                                            setPickupLocation(location.display_name);
                                        }}>{
                                            location.display_name.toString().split(",").slice(0, 2).join(",")
                                        }</button>
                                   )
                                }
                            </div>
                        )
                        :
                        (
                            <></>
                        )

                    }
                </div>

                <div className='mb-5'>
                    <Textarea placeholder='Pickup Details (e.g: House/Flat no, Building etc)' rows={3} changeHandler={e => setPickupDetails(e.target.value)} val={pickupDetails} />
                </div>

                <div className='mb-5'>
                    <Title text='Dropoff Details' size='md' />
                </div>

                <div className='relative mb-5'>
                    <Input type="text" placeholder='Dropoff Location' changeHandler={e => {setIsTypingPickup(true);setDropoffLocation(e.target.value)}} val={dropoffLocation} />
                    {
                        dLocations && dLocations?.length > 0
                        ?
                        (
                            <div className='py-1 bg-gray-light absolute w-full mt-0.5 shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-gray'>
                                {
                                    dLocations?.map((location, index) =>
                                        <button key={index} className='block p-1 hover:bg-gray-200 w-full' onClick={() => {
                                            clearTimeout(timer.current);
                                            setIsTypingDropoff(false);
                                            setDropoffLocation(location.display_name);
                                            setDLocations([]);
                                        }}>{
                                            location.display_name.toString().split(",").slice(0, 2).join(",")
                                        }</button>
                                   )
                                }
                            </div>
                        )
                        :
                        (
                            <></>
                        )
                    }
                </div>

                <div className='mb-3'>
                    <Textarea placeholder='Dropoff Details (e.g: House/Flat no, Building etc)' rows={3} changeHandler={e => setDropoffDetails(e.target.value)} val={dropoffDetails} />
                </div>

            </div>



            {/* col 2 */}
            <div className='mb-5'>
                <div className='mb-5'>
                    <Title text='Your Location' size='md' />
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105627.89709703537!2d73.15353668369247!3d34.17519564043071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38de3111557ac517%3A0x6e59a635b12e952c!2sAbbottabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1757958699526!5m2!1sen!2s" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full h-90 md:h-110'></iframe>
            </div>

        </div>

        <div className='flex justify-end items-center'>
            <Button text='Choose Vehicle' link="/booking?choose_vehicle" disabled={btnStatus} />
        </div>
    </>
    )
}

export default RideDetails;
'use client';
import { useSearchParams } from 'next/navigation';
import React from 'react';

function LinkedTitles() {

    const searchParams = useSearchParams();
    const currentKey = searchParams?.keys()?.next()?.value?.toString();


    return (
        <div className='mb-10 flex justify-center items-center'>
            <div className='relative flex flex-col items-center'>
                <button className='bg-black text-white w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full border border-black cursor-default disabled:opacity-40' disabled={
                    !currentKey
                        ?
                        (
                            false
                        )
                        :
                        (
                            currentKey === "ride_details" ? false : true
                        )
                }>1</button>
                <p className='font-medium text-sm'>Enter Ride Details</p>
            </div>
            <hr className='inline-block w-50' />
            <div className='relative flex flex-col items-center'>
                <button className='bg-black text-white w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full border border-black cursor-default disabled:opacity-40' disabled={currentKey === "choose_vehicle" ? false : true}>2</button>
                <p className='font-medium text-sm'>Choose A Vehicle</p>
            </div>
            <hr className='inline-block w-50' />
            <div className='relative flex flex-col items-center'>
                <button className='bg-black text-white w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full border border-black cursor-default disabled:opacity-40' disabled={currentKey === "contact_info" ? false : true}>3</button>
                <p className='font-medium text-sm'>Add Contact Info</p>
            </div>
            <hr className='inline-block w-50' />
            <div className='relative flex flex-col items-center'>
                <button className='bg-black text-white w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full border border-black cursor-default disabled:opacity-40' disabled={currentKey === "confirm_booking" ? false : true}>4</button>
                <p className='font-medium text-sm'>Confirm Booking</p>
            </div>
        </div>
    )
}

export default LinkedTitles;
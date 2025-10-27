'use client';
import React, { useContext, useEffect, useState } from 'react';
import Input from '../Input/Input';
import Title from '../Title/Title';
import Textarea from '../Textarea/Textarea';
import Button from '../Button/Button';
import taxi1 from '@/public/taxi1.jpg';
import taxi2 from '@/public/taxi2.jpg';
import taxi3 from '@/public/taxi3.jpg';
import Image from 'next/image';
import BookingContext from '@/app/context/booking/Context';
import useCar from '@/app/hooks/car/useCar';
import { useRouter } from 'next/navigation';

function ChooseVehicle() {

    const router = useRouter();
    const [carImg, setCarImg] = useState(null);
    const { fetchCarsHandler, cars } = useCar();
    const [btnStatus, setBtnStatus] = useState(true);

    const {
        vehicle, setVehicle,
        smLuggage, setSmLuggage,
        lgLuggage, setLgLuggage,
        totalPsgrs, setTotalPsgrs,
        pickupDate, pickupTime, pickupLocation, dropoffLocation
      } = useContext(BookingContext);

      useEffect(() => {
        fetchCarsHandler('api/cars/fetch');
      }, []);

      useEffect(() => {
        if(pickupDate?.trim() === "" || pickupTime?.trim() === "" || pickupLocation?.trim() === "" || dropoffLocation?.trim() === "")
        {
            setBtnStatus(true);
            router.push("/booking?ride_details");
        }

        if(vehicle?.trim() === "" || !totalPsgrs)
        {
            setBtnStatus(true);
        }
        else
        {
            setBtnStatus(false);
        }
      }, [vehicle, totalPsgrs]);

    return (
        <>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>

            {/* col 1 */}
            <div>
                <div className='mb-5'>
                    <Title text='Choose Vehicle' size='md' />
                </div>

                <div className='flex flex-col md:flex-row md:justify-between gap-5 items-stretch md:items-center mb-5'>
                    <div className='w-2/2 md:w-1/2'>
                        <label htmlFor="" className='text-base text-gray inline-block mb-2'>Vehicle</label>
                        <select className={`text-xl py-3 px-1 border-none outline outline-gray hover:outline-2 hover:outline-black focus:outline-2 focus:outline-black bg-white w-full`} onChange={e => {
                            setVehicle(e.target.value);
                            const selectedCar = cars.find(car => car._id == e.target.value);
                            setCarImg(selectedCar?.img_path?.[0]);
                        }} value={vehicle}>
                            <option value="">Select Vehicle</option>
                            {cars.map((car, index) => (
                                <option key={index} value={car?._id}>{car?.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className='w-2/2 md:w-1/2'>
                        <label htmlFor="" className='text-base text-gray inline-block mb-2'>Number Of Passengers</label>
                        <select className={`text-xl py-3 px-1 border-none outline outline-gray hover:outline-2 hover:outline-black focus:outline-2 focus:outline-black bg-white w-full`} onChange={e => setTotalPsgrs(e.target.value)} value={totalPsgrs}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                        </select>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row md:justify-between gap-5 items-stretch md:items-center mb-5'>
                    <div className='w-2/2 md:w-1/2'>
                        <label htmlFor="" className='text-base text-gray inline-block mb-2'>Small Luggage</label>
                        <select className={`text-xl py-3 px-1 border-none outline outline-gray hover:outline-2 hover:outline-black focus:outline-2 focus:outline-black bg-white w-full`}  onChange={e => setSmLuggage(e.target.value)} value={smLuggage}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                        </select>
                    </div>
                    <div className='w-2/2 md:w-1/2'>
                        <label htmlFor="" className='text-base text-gray inline-block mb-2'>Large Luggage</label>
                        <select className={`text-xl py-3 px-1 border-none outline outline-gray hover:outline-2 hover:outline-black focus:outline-2 focus:outline-black bg-white w-full`} onChange={e => setLgLuggage(e.target.value)} value={lgLuggage}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                        </select>
                    </div>
                </div>

            </div>



            {/* col 2 */}
            <div className='flex justify-center mb-5'>
                <div className='w-80 h-80'>
                    {
                        carImg && carImg !== null && (
                            <Image src={carImg || taxi1} height={1000} width={1000} alt='taxi' className='w-full h-full object-cover' loading='lazy' />
                        )
                    }
                </div>
            </div>

        </div>

        <div className='flex justify-between items-center'>
            <Button text='<< Prev' link="/booking?ride_details" />
            <Button text='Contact Information' link="/booking?contact_info" disabled={btnStatus} />
        </div>
    </>
    )
}

export default ChooseVehicle;
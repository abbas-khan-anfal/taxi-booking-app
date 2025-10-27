'use client';
import Title from '@/app/components/Title/Title';
import useCar from '@/app/hooks/car/useCar';
import React from 'react';
import toast from 'react-hot-toast';

function page() {

    const { addCarHandler, name, setName, seats, setSeats, price, setPrice } = useCar();

    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("seats", seats);
        formData.append("price", price);
        formData.append("file", e?.target?.file?.files?.[0]);
        try
        {
            addCarHandler("/api/cars/add_car", formData, e);
        }
        catch(error)
        {
            toast.error(error.message);
        }
    }

  return (
    <div className='w-full max-w-md'>
        <Title text="Add New Car" size="md" classes="mb-5" />
        <form className='flex flex-col gap-3' onSubmit={submitHandler}>
            <div>
                <label htmlFor="" className='mb-1 block text-gray font-medium'>Car Name</label>
                <input type="text" className='outline-none w-full border border-gray rounded-md p-2 focus:ring ring-black text-base' onChange={e => setName(e.target.value)} value={name}/>
            </div>
            <div>
                <label htmlFor="" className='mb-1 block text-gray font-medium'>Total Seats</label>
                <input type='text' className='outline-none w-full border border-gray rounded-md p-2 focus:ring ring-black text-base' onChange={e => setSeats(e.target.value)} value={seats}/>
            </div>
            <div>
                <label htmlFor="" className='mb-1 block text-gray font-medium'>Price</label>
                <input type='text' className='outline-none w-full border border-gray rounded-md p-2 focus:ring ring-black text-base' onChange={e => setPrice(e.target.value)} value={price}/>
            </div>
            <div>
                <label htmlFor="" className='mb-1 block text-gray font-medium'>Car Photo</label>
                <input type='file' className='outline-none w-full border border-gray rounded-md p-2 focus:ring ring-black text-base' name="file"/>
                <span>Image must be equal to or less than 5mb.</span>
            </div>
            <div>
                <button type='submit' className='bg-blue rounded-md py-2 px-3 text-base text-white font-medium cursor-pointer hover:opacity-85 active:opacity-50 transition-all duration-400'>Save Car</button>
            </div>
        </form>
    </div>
  )
}

export default page;
import Title from '@/app/components/Title/Title';
import React from 'react';

function page() {
  return (
    <div className='w-full max-w-md'>
        <Title text="Settings" size="md" classes="mb-5" />
        <form className='flex flex-col gap-3'>
            <div>
                <label htmlFor="" className='mb-1 block text-gray font-medium'>Website Name</label>
                <input type="text" className='outline-none w-full border border-gray rounded-md p-2 focus:ring ring-black text-base'/>
            </div>
            <div>
                <label htmlFor="" className='mb-1 block text-gray font-medium'>Website Logo</label>
                <input type='file' className='outline-none w-full border border-gray rounded-md p-2 focus:ring ring-black text-base'/>
            </div>
            <div>
                <label htmlFor="" className='mb-1 block text-gray font-medium'>Website Description</label>
                <textarea className='outline-none w-full border border-gray rounded-md p-2 focus:ring ring-black text-base'></textarea>
            </div>
            <div>
                <label htmlFor="" className='mb-1 block text-gray font-medium'>Copyright Text</label>
                <input type="text"  placeholder='e.g.(copyright all right reserved) in footer.' className='outline-none w-full border border-gray rounded-md p-2 focus:ring ring-black text-base'/>
            </div>
            <div>
                <button className='bg-blue rounded-md py-2 px-3 text-base text-white font-medium cursor-pointer hover:opacity-85 active:opacity-50 transition-all duration-400'>Save Settings</button>
            </div>
        </form>
    </div>
  )
}

export default page;
'use client';
import React, { useState } from 'react';
import Title from '../components/Title/Title';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import Link from 'next/link';
import darkLogo from '@/public/dark-logo.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import useUser from '../hooks/user/useUser';

function page() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { loginHandler } = useUser();

    const submitHandler = (e) => {
        e.preventDefault();
        try
        {
            const data = {
                email,
                password
            }
            loginHandler("/api/users/login", data);
        }
        catch(err)
        {
            console.log(err?.message || "Something went wrong");
        }
    }

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100 p-10'>
        <div className='w-full max-w-md'>
            <div className='flex justify-center items-center'>
                <Image src={darkLogo} width={1000} height={1000} className='h-15 w-35 object-cover border-black cursor-pointer' onClick={() => router.push('/')} />
            </div>
            <div>
                <hr className='my-5 text-gray-300' />
            </div>
            <form className='flex flex-col gap-5 p-5 bg-white rounded-md' onSubmit={submitHandler}>
                <div>
                    <Title text='Login' size='lg' classes='text-center' />
                </div>
                <div>
                    <Input type='email' placeholder='Email' changeHandler={e => setEmail(e.target.value)} val={email} required={true} />
                </div>
                <div>
                    <Input type='password' placeholder='Password' changeHandler={e => setPassword(e.target.value)} val={password} required={true} />
                </div>
                <div className='text-center'>
                    <Button type="submit" text='Login' classes='w-full' />
                </div>
                <div className='text-center'>
                    <p className='text-base'>Create an account? <Link className='font-medium underline' href="/signup">Signup</Link></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default page;
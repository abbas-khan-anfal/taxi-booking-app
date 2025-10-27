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
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signupHandler } = useUser();

    const submitHandler = (e) => {
        e.preventDefault();
        try
        {
            const data = {
                fullName,
                email,
                password
            }
            signupHandler("/api/users/signup", data);
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
                    <Title text='Signup' size='lg' classes='text-center' />
                </div>
                <div>
                    <Input type='text' placeholder='Full Name' changeHandler={e => setFullName(e.target.value)} val={fullName} required={true} />
                </div>
                <div>
                    <Input type='email' placeholder='Email' changeHandler={e => setEmail(e.target.value)} val={email} required={true} />
                </div>
                <div>
                    <Input type='password' placeholder='Password' changeHandler={e => setPassword(e.target.value)} val={password} required={true} />
                </div>
                <div className='text-center'>
                    <Button type="submit" text='Signup' classes='w-full' />
                </div>
                <div className='text-center'>
                    <p className='text-base'>Already have an account? <Link className='font-medium underline' href="/login">Login</Link></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default page;
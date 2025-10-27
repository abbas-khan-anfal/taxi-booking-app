'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

function useUser() {

  const router = useRouter();

  const signupHandler = async (url, data) => {
    try
    {
        const response = await axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        });
        if(response.data.success)
        {
            toast.success(response.data.message);
            setTimeout(() => {
              router.push('/login');
            }, 1000);
        }
        else
        {
            toast.error(response.data.message || "Couldn't signup");
        }
    }
    catch (error)
    {
      toast.error(error?.response?.data?.message || error?.message || "Couldn't signup");
    }
  }
  const loginHandler = async (url, data) => {
    try
    {
        const response = await axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        });
        if(response.data.success)
        {
            toast.success(response.data.message);
            setTimeout(() => {
              router.push('/dashboard');
            }, 1000);
        }
        else
        {
            toast.error(response.data.message || "Couldn't login");
        }
    }
    catch (error)
    {
      toast.error(error?.response?.data?.message || error?.message || "Couldn't login");
    }
  }
  return {
    signupHandler,
    loginHandler
  };

}

export default useUser;
'use client';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

function useBooking() {

    const [pLocations, setPLocations] = useState([]);
    const [dLocations, setDLocations] = useState([]);
    const router = useRouter();

  const findLocationHandler = async (searchTerm = "", type) => {
    try
    {
        const response = await axios.get(`https://nominatim.openstreetmap.org/search?q=${searchTerm}&format=json&addressdetails=1`);
        if(type === "pickup")
        {
            setPLocations(response.data);
        }
        else if(type === "dropoff")
        {
            setDLocations(response.data);
        }
    }
    catch(err)
    {
      console.log(err);
    }
  }

  const confirmBookingHandler = async (data) => {
    try
    {
        const response = await axios.post(`/api/bookings/add`, data, {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        });
        // store data in localstorage in array format
        const orders = JSON.parse(localStorage.getItem("orders")) || [];
        orders.push(data);
        localStorage.setItem("orders", JSON.stringify(orders));


       if(response.data.success)
        {
          toast.success(response.data.message || "Your ride booked successfully");
          setTimeout(() => {
            router.push("/thankyou");
          }, 1000);
        }
    }
    catch(err)
    {
      toast.error(err?.response?.data?.message || err?.message || "Something went wrong");
    }
  }

  return {
    findLocationHandler,
    pLocations,
    setPLocations,
    dLocations,
    setDLocations,
    confirmBookingHandler
  }

}

export default useBooking;
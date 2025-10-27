'use client';
import React, { useContext, useEffect } from 'react';
import ThankYou from '../components/BookingService/ThankYou';
import bookingContext from '@/app/context/booking/Context';

function page() {

    const {
        setPickupDate,
        setPickupTime,
        setPickupLocation,
        setPickupDetails,
        setDropoffLocation,
        setDropoffDetails,

        setVehicle,
        setSmLuggage,
        setLgLuggage,
        setTotalPsgrs,

        setFullName,
        setEmail,
        setPhone,
        setPaymentMethod
    } = useContext(bookingContext);

    useEffect(() => {
      setPickupDate("");
            setPickupTime("");
            setPickupLocation("");
            setPickupDetails("");
            setDropoffLocation("");
            setDropoffDetails("");
            setVehicle("");
            setSmLuggage(0);
            setLgLuggage(0);
            setTotalPsgrs(4);
            setFullName("");
            setPhone("");
            setPaymentMethod("");
            setEmail("");
    }, []);
  
  return (
    <ThankYou />
  )
}

export default page;
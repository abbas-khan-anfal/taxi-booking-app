'use client';
import React, { useContext, useState } from 'react';
import Context from './Context';

function Provider({children}) {

    const [pickupDate, setPickupDate] = useState("");
    const [pickupTime, setPickupTime] = useState("");
    const [pickupLocation, setPickupLocation] = useState("");
    const [pickupDetails, setPickupDetails] = useState("");
    const [dropoffLocation, setDropoffLocation] = useState("");
    const [dropoffDetails, setDropoffDetails] = useState("");

    const [vehicle, setVehicle] = useState("");
    const [smLuggage, setSmLuggage] = useState(0);
    const [lgLuggage, setLgLuggage] = useState(0);
    const [totalPsgrs, setTotalPsgrs] = useState(4);

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");

  return (
    <Context.Provider value={{
      pickupDate, setPickupDate,
      pickupTime, setPickupTime,
      pickupLocation, setPickupLocation,
      pickupDetails, setPickupDetails,
      dropoffLocation, setDropoffLocation,
      dropoffDetails, setDropoffDetails,

      vehicle, setVehicle,
      smLuggage, setSmLuggage,
      lgLuggage, setLgLuggage,
      totalPsgrs, setTotalPsgrs,

      fullName, setFullName,
      email, setEmail,
      phone, setPhone,
      paymentMethod, setPaymentMethod
      
    }}>
        {children}
    </Context.Provider>
  )
}

export default Provider;
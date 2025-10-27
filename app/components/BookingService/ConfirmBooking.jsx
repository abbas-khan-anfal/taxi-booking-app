'use client';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';
import Title from '../Title/Title';
import Button from '../Button/Button';
import BookingContext from '@/app/context/booking/Context';
import useBooking from '@/app/hooks/booking/useBooking';
import toast from 'react-hot-toast';

function ConfirmBooking() {

  const [btnStatus, setBtnStatus] = useState(true);
  const router = useRouter();

  const {
      pickupDate,
      pickupTime,
      pickupLocation,
      pickupDetails,
      dropoffLocation,
      dropoffDetails,

      vehicle,
      smLuggage,
      lgLuggage,
      totalPsgrs,

      fullName,
      email,
      phone,
      paymentMethod
  } = useContext(BookingContext);
  const { confirmBookingHandler } = useBooking();

  const submitHandler = async () => {
    const data = {vehicle, smLuggage, lgLuggage, totalPsgrs, fullName, email, phone, paymentMethod, pickupDate, pickupTime, pickupLocation, pickupDetails, dropoffLocation, dropoffDetails};

    if(vehicle?.trim() === "" || !totalPsgrs || fullName?.trim() === "" || email?.trim() === "" || phone?.trim() === "" || paymentMethod?.trim() === "" || pickupDate?.trim() === "" || pickupTime?.trim() === "" || pickupLocation?.trim() === "" || dropoffLocation?.trim() === "")
    {
        toast.error("Please fill all the fields");
        return;
    }
    
    try
    {
      confirmBookingHandler(data);
    }
    catch(err)
    {
      toast.error(err?.message || "Something went wrong");
    }
  }

  useEffect(() => {
    if(vehicle?.trim() === "" || !totalPsgrs || fullName?.trim() === "" || email?.trim() === "" || phone?.trim() === "" || paymentMethod?.trim() === "" || pickupDate?.trim() === "" || pickupTime?.trim() === "" || pickupLocation?.trim() === "" || dropoffLocation?.trim() === "")
    {
        setBtnStatus(true);
        router.push("/booking?ride_details");
    }
    else
    {
        setBtnStatus(false);
    }
  }, [vehicle, smLuggage, lgLuggage, totalPsgrs, fullName, email, phone, paymentMethod, pickupDate, pickupTime, pickupLocation, dropoffLocation]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Booking Summary */}
        <div>
          <div className="mb-5">
            <Title text="Booking Summary" size="md" />
          </div>
          <table className="w-full border border-gray-200 rounded-lg overflow-hidden bg-gray-light">
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-medium">Pickup Location</td>
                <td className="p-3 text-right">{pickupLocation || ""}</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium">Drop Location</td>
                <td className="p-3 text-right">{dropoffLocation || ""}</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium">Pickup Date</td>
                <td className="p-3 text-right">{pickupDate || ""}</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium">Pickup Time</td>
                <td className="p-3 text-right">{pickupTime || ""}</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium">Vehicle</td>
                <td className="p-3 text-right">{vehicle || ""}</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium">Passenger Name</td>
                <td className="p-3 text-right">{fullName || ""}</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium">Passenger Email</td>
                <td className="p-3 text-right">{email || ""}</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium">Passenger Phone</td>
                <td className="p-3 text-right">{phone || ""}</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium">Payment Method</td>
                <td className="p-3 text-right">{paymentMethod || ""}</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium">Total Passengers</td>
                <td className="p-3 text-right">{totalPsgrs || ""}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Totals */}
        <div>
          <div className="mb-5">
            <Title text="Subtotal" size="md" />
          </div>
          <table className="w-full border border-gray-200 rounded-lg overflow-hidden bg-gray-light">
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-medium">Base Fare</td>
                <td className="p-3 text-right">$100</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium">Tax</td>
                <td className="p-3 text-right">$10</td>
              </tr>
              <tr className="border-b bg-gray-200">
                <td className="p-3 font-bold">Total</td>
                <td className="p-3 text-right font-bold">$110</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer buttons */}
      <div className="flex justify-between items-center mt-8">
        <Button text="<< Prev" link="/booking?contact_info" />
        <Button text="Confirm Booking" clickHandler={submitHandler} disabled={btnStatus} />
      </div>
    </>
  );
}

export default ConfirmBooking;

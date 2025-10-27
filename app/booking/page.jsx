'use client';
import React from 'react';
import LinkedTitles from '../components/BookingService/LinkedTitles';
import RideDetails from '../components/BookingService/RideDetails';
import ChooseVehicle from '../components/BookingService/ChooseVehicle';
import ContactInfo from '../components/BookingService/ContactInfo';
import ConfirmBooking from '../components/BookingService/ConfirmBooking';
import { useSearchParams } from 'next/navigation';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

function page() {

    const searchParams = useSearchParams();
    const currentKey = searchParams?.keys()?.next()?.value?.toString();

  return (
    <>
    <Navbar/>
    <section className='p-10'>

        <LinkedTitles/>

        {
            !currentKey && <RideDetails/>
        }

        {
            currentKey === "ride_details" && <RideDetails/>
        }

        {
            currentKey === "choose_vehicle" && <ChooseVehicle/>
        }

        {
            currentKey === "contact_info" && <ContactInfo/>
        }

        {
            currentKey === "confirm_booking" && <ConfirmBooking/>
        }

    </section>
    <Footer />
    </>
  )
}

export default page;
"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import LinkedTitles from "../components/BookingService/LinkedTitles";
import RideDetails from "../components/BookingService/RideDetails";
import ChooseVehicle from "../components/BookingService/ChooseVehicle";
import ContactInfo from "../components/BookingService/ContactInfo";
import ConfirmBooking from "../components/BookingService/ConfirmBooking";

// Separate component for using useSearchParams (must be inside Suspense)
function BookingContent() {
  const searchParams = useSearchParams();
  const currentKey = searchParams?.keys()?.next()?.value?.toString();

  return (
    <section className="p-10">
      <LinkedTitles />

      {!currentKey && <RideDetails />}

      {currentKey === "ride_details" && <RideDetails />}

      {currentKey === "choose_vehicle" && <ChooseVehicle />}

      {currentKey === "contact_info" && <ContactInfo />}

      {currentKey === "confirm_booking" && <ConfirmBooking />}
    </section>
  );
}

export default function BookingPage() {
  return (
    <>
      <Navbar />

      {/* ✅ Suspense fixes build error on Vercel */}
      <Suspense fallback={<p className="p-10 text-gray-600">Loading booking...</p>}>
        <BookingContent />
      </Suspense>

      <Footer />
    </>
  );
}

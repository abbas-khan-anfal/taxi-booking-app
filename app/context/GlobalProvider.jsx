'use client';
import React from 'react';
import BookingProvider from '@/app/context/booking/Provider';

function GlobalProvider({children}) {
  return (
    <BookingProvider>
        {children}
    </BookingProvider>
  )
}

export default GlobalProvider;
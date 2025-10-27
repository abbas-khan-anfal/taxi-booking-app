import React from 'react';
import Dashboard from './components/Dashboard/Dashboard';

export const metadata = {
    title : "Dashboard",
    description : "Booking.com Dashboard"
}

export default function DashboardRootLayout({ children }) {
  return (
        <Dashboard component={children} />
  )
}
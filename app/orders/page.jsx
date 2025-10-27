"use client";
import React, { useEffect, useState } from "react";
import Title from "../components/Title/Title";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function page() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const ordersData = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(ordersData);
  }, []);
  return (
    <>
    <Navbar/>
      <section className="p-10">
        <Title text="Orders" size="md" classes="mb-5" />

        {
          orders && orders?.length > 0
          ?
          (
            orders?.map((ord, ind) => (
              <div key={ind + 1} className="space-y-6">
                  <details className="group border rounded-xl shadow-md overflow-hidden transition">
                    {/* Summary (Order Header Row) */}
                    <summary className="cursor-pointer bg-gray-50 px-4 py-3 flex items-center justify-between hover:bg-gray-100 transition">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="text-gray-500 font-semibold">
                            <th className="px-3 py-2 text-left">Order ID</th>
                            <th className="px-3 py-2 text-left">Date</th>
                            <th className="px-3 py-2 text-left">Total</th>
                            <th className="px-3 py-2 text-left">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="font-medium text-gray-800 group-open:text-blue-600">
                            <td className="px-3 py-2">#{ind + 1}</td>
                            <td className="px-3 py-2">{ord?.pickupDate}</td>
                            <td className="px-3 py-2">$120.00</td>
                            <td className="px-3 py-2">
                              <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">
                                Pending
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </summary>

                    {/* Expanded Content (Vertical Table Style) */}
                    <div className="p-5 bg-white border-t animate-fadeIn">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* LEFT COLUMN */}
                        <table className="w-full text-sm">
                          <tbody className="divide-y divide-gray-200">
                            <tr>
                              <th className="px-4 py-3 bg-gray-50 text-left font-semibold w-1/3">
                                Passenger Name
                              </th>
                              <td className="px-4 py-3">{ord?.fullName}</td>
                            </tr>
                            <tr>
                              <th className="px-4 py-3 bg-gray-50 text-left font-semibold">
                                Passenger Email
                              </th>
                              <td className="px-4 py-3">{ord?.email}</td>
                            </tr>
                            <tr>
                              <th className="px-4 py-3 bg-gray-50 text-left font-semibold">
                                Passenger Phone
                              </th>
                              <td className="px-4 py-3">{ord?.phone}</td>
                            </tr>
                            <tr>
                              <th className="px-4 py-3 bg-gray-50 text-left font-semibold">
                                Payment Method
                              </th>
                              <td className="px-4 py-3">{ord?.paymentMethod}</td>
                            </tr>
                            <tr>
                              <th className="px-4 py-3 bg-gray-50 text-left font-semibold">
                                Pickup Time
                              </th>
                              <td className="px-4 py-3">{ord?.pickupTime}</td>
                            </tr>
                            <tr>
                              <th className="px-4 py-3 bg-gray-50 text-left font-semibold">
                                Pickup Date
                              </th>
                              <td className="px-4 py-3">{ord?.pickupDate}</td>
                            </tr>
                          </tbody>
                        </table>

                        {/* RIGHT COLUMN */}
                        <table className="w-full text-sm">
                          <tbody className="divide-y divide-gray-200">
                            <tr>
                              <th className="px-4 py-3 bg-gray-50 text-left font-semibold w-1/3">
                                Pickup Location
                              </th>
                              <td className="px-4 py-3">{ord?.pickupLocation}</td>
                            </tr>
                            <tr>
                              <th className="px-4 py-3 bg-gray-50 text-left font-semibold">
                                Pickup Details
                              </th>
                              <td className="px-4 py-3">{ord?.pickupDetails}</td>
                            </tr>
                            <tr>
                              <th className="px-4 py-3 bg-gray-50 text-left font-semibold">
                                Dropoff Location
                              </th>
                              <td className="px-4 py-3">{ord?.dropoffLocation}</td>
                            </tr>
                            <tr>
                              <th className="px-4 py-3 bg-gray-50 text-left font-semibold">
                                Dropoff Details
                              </th>
                              <td className="px-4 py-3">{ord?.dropoffDetails}</td>
                            </tr>
                            <tr>
                              <th className="px-4 py-3 bg-gray-50 text-left font-semibold">
                                Vehicle
                              </th>
                              <td className="px-4 py-3">{ord?.vehicle}</td>
                            </tr>
                            <tr>
                              <th className="px-4 py-3 bg-gray-50 text-left font-semibold">
                                Total Passengers
                              </th>
                              <td className="px-4 py-3">{ord?.totalPsgrs}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      {/* Extra Row for Luggage + Totals below full width */}
                      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <table className="w-full text-sm">
                          <tbody className="divide-y divide-gray-200">
                            <tr>
                              <th className="px-4 py-3 bg-gray-50 text-left font-semibold w-1/3">
                                Small Luggage
                              </th>
                              <td className="px-4 py-3">{ord?.smLuggage}</td>
                            </tr>
                            <tr>
                              <th className="px-4 py-3 bg-gray-50 text-left font-semibold">
                                Large Luggage
                              </th>
                              <td className="px-4 py-3">{ord?.lgLuggage}</td>
                            </tr>
                          </tbody>
                        </table>

                        <table className="w-full text-sm">
                          <tbody>
                            <tr>
                              <th className="px-4 py-3 bg-gray-50 text-left font-semibold w-1/3">
                                Totals
                              </th>
                              <td className="px-4 py-3">
                                <ul className="list-disc pl-5 space-y-1">
                                  <li>
                                    <span className="font-medium">iPhone 14</span> – $999
                                  </li>
                                  <li>
                                    <span className="font-medium">AirPods Pro</span> – $199
                                  </li>
                                </ul>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>


                  </details>
                </div>
            ))
          )
          :
          (
            <div>
              <p className="text-gray-500">No orders yet.</p>
            </div>
          )

        }

      </section>
    <Footer/>
    </>
  );
}

export default page;

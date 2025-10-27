'use client';
import React, { useEffect } from "react";
import Button from "@/app/components/Button/Button";
import Title from "@/app/components/Title/Title";
import useCar from "@/app/hooks/car/useCar";

function page() {

  const { fetchCarsHandler, cars, fetchLoading, deleteCarHandler } = useCar();

  useEffect(() => {
    fetchCarsHandler('/api/cars/fetch');
  },[])

  return (
    <div>
      <Title text="Bookings" size="md" classes="mb-5" />
      <div className="overflow-x-auto">
        <table>
          <thead className="border-b-2 border-b-gray text-left font-medium text-xl">
            <tr className="bg-gray-light">
              <th className="py-2 px-3">Sr:no</th>
              <th className="py-2 px-3">Vehicle</th>
              <th className="py-2 px-3">Total Persons</th>
              <th className="py-2 px-3">Total Price</th>
              <th className="py-2 px-3">Delete</th>
            </tr>
          </thead>
          <tbody className="text-base text-left">
            {
              !fetchLoading
              ?
              (
                cars && cars?.length > 0
                ?
                (
                  cars.map((car, index) => (
                    <tr key={index} className="bg-gray-light border-b border-b-gray-200">
                      <td className="py-1 px-3">{index + 1}</td>
                      <td className="py-1 px-3">{car.name}</td>
                      <td className="py-1 px-3">{car.seats}</td>
                      <td className="py-1 px-3">{car.price}</td>
                      <td className="py-1 px-3">
                        <button className="bg-red-800 text-white text-base rounded-md h-8 w-8  font-medium hover:opacity-85 active:opacity-50 transition-all duration-400 cursor-pointer" onClick={() => deleteCarHandler(`/api/cars/delete/${car?._id}`)}>&#10005;</button>
                      </td>
                    </tr>
                  ))
                )
                :
                (
                  <tr className="bg-gray-light border-b border-b-gray-200">
                    <td className="py-1 px-3 text-center" colSpan={5}>No bookings found</td>
                  </tr>
                )
              )
              :
              (
                <tr className="bg-gray-light border-b border-b-gray-200">
                  <td className="py-1 px-3 text-center" colSpan={5}>Loading...</td>
                </tr>
             )
            }

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default page;
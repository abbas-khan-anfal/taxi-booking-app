'use client';
import React from "react";
import Button from "@/app/components/Button/Button";
import Title from "@/app/components/Title/Title";

function page() {

  return (
    <div>
      <Title text="Messages" size="md" classes="mb-5" />
      <div className="overflow-x-auto">
        <table>
          <thead className="border-b-2 border-b-gray text-left font-medium text-xl">
            <tr className="bg-gray-light">
              <th className="py-2 px-3">Sr:no</th>
              <th className="py-2 px-3">Vehicle</th>
              <th className="py-2 px-3">Total Persons</th>
              <th className="py-2 px-3">Total Price</th>
              <th className="py-2 px-3">Route</th>
              <th className="py-2 px-3">Status</th>
              <th className="py-2 px-3">Delete</th>
            </tr>
          </thead>
          <tbody className="text-base text-left">
            <tr className="bg-gray-light border-b border-b-gray-200">
              <td className="py-1 px-3">Sr:no</td>
              <td className="py-1 px-3">Boston 4 seats</td>
              <td className="py-1 px-3">6</td>
              <td className="py-1 px-3">599</td>
              <td className="py-1 px-3">one way</td>
              <td className="py-1 px-3">Pending</td>
              <td className="py-1 px-3">
                <button className="bg-red-800 text-white text-base rounded-md h-8 w-8  font-medium hover:opacity-85 active:opacity-50 transition-all duration-400 cursor-pointer">&#10005;</button>
              </td>
            </tr>

            <tr className="bg-gray-light border-b border-b-gray-200">
              <td className="py-1 px-3">Sr:no</td>
              <td className="py-1 px-3">Boston 4 seats</td>
              <td className="py-1 px-3">6</td>
              <td className="py-1 px-3">599</td>
              <td className="py-1 px-3">one way</td>
              <td className="py-1 px-3">Pending</td>
              <td className="py-1 px-3">
                <button className="bg-red-800 text-white text-base rounded-md h-8 w-8  font-medium hover:opacity-85 active:opacity-50 transition-all duration-400 cursor-pointer">&#10005;</button>
              </td>
            </tr>

            <tr className="bg-gray-light border-b border-b-gray-200">
              <td className="py-1 px-3">Sr:no</td>
              <td className="py-1 px-3">Boston 4 seats</td>
              <td className="py-1 px-3">6</td>
              <td className="py-1 px-3">599</td>
              <td className="py-1 px-3">one way</td>
              <td className="py-1 px-3">Pending</td>
              <td className="py-1 px-3">
                <button className="bg-red-800 text-white text-base rounded-md h-8 w-8  font-medium hover:opacity-85 active:opacity-50 transition-all duration-400 cursor-pointer">&#10005;</button>
              </td>
            </tr>

            <tr className="bg-gray-light border-b border-b-gray-200">
              <td className="py-1 px-3">Sr:no</td>
              <td className="py-1 px-3">Boston 4 seats</td>
              <td className="py-1 px-3">6</td>
              <td className="py-1 px-3">599</td>
              <td className="py-1 px-3">one way</td>
              <td className="py-1 px-3">Pending</td>
              <td className="py-1 px-3">
                <button className="bg-red-800 text-white text-base rounded-md h-8 w-8  font-medium hover:opacity-85 active:opacity-50 transition-all duration-400 cursor-pointer">&#10005;</button>
              </td>
            </tr>

            <tr className="bg-gray-light border-b border-b-gray-200">
              <td className="py-1 px-3">Sr:no</td>
              <td className="py-1 px-3">Boston 4 seats</td>
              <td className="py-1 px-3">6</td>
              <td className="py-1 px-3">599</td>
              <td className="py-1 px-3">one way</td>
              <td className="py-1 px-3">Pending</td>
              <td className="py-1 px-3">
                <button className="bg-red-800 text-white text-base rounded-md h-8 w-8  font-medium hover:opacity-85 active:opacity-50 transition-all duration-400 cursor-pointer">&#10005;</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default page;
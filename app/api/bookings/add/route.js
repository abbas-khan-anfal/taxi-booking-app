import { NextResponse as res } from "next/server";
import connectDB from "@/lib/db";
import mongoose from "mongoose";
import carModel from "@/app/models/car/car";
import bookingModel from "@/app/models/booking/booking";

export async function POST(req)
{
    try
    {   
        await connectDB();
        const { vehicle, smLuggage, lgLuggage, totalPsgrs, fullName, email, phone, paymentMethod, pickupDate, pickupTime, pickupLocation, pickupDetails, dropoffLocation, dropoffDetails } = await req.json();

        if(vehicle.trim() === "" || !totalPsgrs || fullName.trim() === "" || email.trim() === "" || phone.trim() === "" || paymentMethod.trim() === "" || pickupDate.trim() === "" || pickupTime.trim() === "" || pickupLocation.trim() === "" || dropoffLocation.trim() === "")
        {
            return res.json({
                success : false,
                message : "Please fill all the fields"
            }, {status : 400});
        }

        if(!mongoose.isValidObjectId(vehicle))
        {
            return res.json({
                success : false,
                message : "Invalid vehicle selected"
            }, {status : 400});
        }

        const vehicleData = await carModel.findById(vehicle);
        
        const totalPrice = vehicleData?.price;

        const booking = await bookingModel.create({
            pickup_time : pickupTime,
            pickup_date : pickupDate,
            pickup_location : pickupLocation,
            pickup_details : pickupDetails,
            dropoff_location : dropoffLocation,
            dropoff_details : dropoffDetails,
            vehicle,
            payment_method : paymentMethod,
            small_luggage : smLuggage,
            large_luggage : lgLuggage,
            fullName,email,phone,
            total_passengers : totalPsgrs,
            total_price : totalPrice
        });

        return res.json({
            success : true,
            message : "Your ride has been booked successfully"
        }, {status : 200});
    }
    catch(error)
    {
        console.log(error);
        return res.json({
            success : false,
            message : error.message
        }, {status : 500});
    }
}
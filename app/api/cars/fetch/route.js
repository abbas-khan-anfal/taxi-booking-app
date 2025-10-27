import connectDB from "@/lib/db";
import carModel from "@/app/models/car/car";
import { NextResponse as res } from "next/server";

export async function GET(req) {
  try {
    // Connect to database
    await connectDB();

    const cars = await carModel.find({});

    // Return success response
    return res.json({
      success: true,
      cars : cars || []
    }, { status : 200 });

  }catch (error)
  {
    return res.json({
      success: false,
      error: error.message
    }, { status : 200 });
  }
}
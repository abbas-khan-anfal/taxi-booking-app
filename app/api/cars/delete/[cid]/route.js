import connectDB from "@/lib/db";
import carModel from "@/app/models/car/car";
import { NextResponse as res } from "next/server";
import mongoose from "mongoose";
import cloudinary from "@/lib/cloudinary";

export async function DELETE(req, { params }) {
  try {
    // Connect to database
    await connectDB();

    // Find car by id
    const { cid } = await params;
    if(!mongoose.isValidObjectId(cid))
    {
      return res.json({
        success: false,
        message: "Invalid car id"
      }, { status : 400 });
   }

    const car = await carModel.findById(cid);

    if(!car)
    {
      return res.json({
        success: false,
        message: "Car not found"
      }, { status : 404 });
    }

    // delete image
    if(car?.img_pub_id && car?.img_pub_id?.length > 0)
    {
      const deletedImgs = car?.img_pub_id?.map((pubid) => (
        cloudinary.uploader.destroy(pubid)
      ));
      await Promise.all(deletedImgs);
    }

    // Delete car
    await carModel.findByIdAndDelete(cid);


    // Return success response
    return res.json({
      success: true,
      message : "Car deleted successfully"
    }, { status : 200 });

  }catch (error)
  {
    return res.json({
      success: false,
      error: error.message
    }, { status : 500 });
  }
}
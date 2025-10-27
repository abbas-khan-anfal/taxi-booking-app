import connectDB from "@/lib/db";
import carModel from "@/app/models/car/car";
import { NextResponse as res } from "next/server";
import cloudinary from "@/lib/cloudinary";

export async function POST(req) {
  try {
    // Connect to database
    await connectDB();

    // Get data from request body
    const formData = await req.formData();
    const file = formData.get("file");
    const name = formData.get("name");
    const price = formData.get("price");
    const seats = formData.get("seats");

    if(!name?.trim() || !price?.trim() || !seats?.trim())
    {
        return res.json({
            success: false,
            error: "Please fill all the fields"
        }, { status : 400 });
    }

    let imgPubId = [];
    let imgPath = [];

    if(file && typeof file.arrayBuffer === "function")
    {
      if(!(file instanceof Blob)) {
                    return NextResponse.json({
                        success: false,
                        message: "Invalid file type"
                    }, { status : 400 });
                }
      const buffer = await file.arrayBuffer();
      const bytes = new Uint8Array(buffer);
      const base64 = Buffer.from(bytes).toString('base64');
      const dataUri = `data:${file.type};base64,${base64}`;
      const cloudRes = await cloudinary.uploader.upload(
        dataUri,
        {
          folder : '/taxibooking/cars',
          allowed_formats : ['png','jpg','jpeg'],
          public_id : `${Date.now()}-${Math.floor(999999 + Math.random() * 100000).toString().substring(0, 7)}`
        }
      );
      imgPubId.push(cloudRes.public_id);
      imgPath.push(cloudRes.secure_url);
    }

    const car = new carModel({
      name,
      price,
      seats,
      img_pub_id : imgPubId,
      img_path : imgPath
    });
    await car.save();


    // Return success response
    return res.json({
      success: true,
      message : "Car saved successfully"
    }, { status : 200 });

  } catch (error) {
    return res.json({
      success: false,
      message: error.message
    }, { status : 500 });
  }
}
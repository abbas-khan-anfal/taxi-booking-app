import userModel from "@/app/models/user/user";
import { NextResponse as res } from "next/server";
import bcrypt from "bcrypt";
import connectDB from "@/lib/db";

export async function POST(req)
{
    try
    {   
        await connectDB();
        const { fullName, email, password } = await req.json();
        if(fullName.trim() === "" || email.trim() === "" || password.trim() === "")
        {
            return res.json({
                success : false,
                message : "Please fill all the fields"
            }, {status : 400});
        }

        const user = await userModel.findOne({email : email});
        if(user)
        {
            return res.json({
                success : false,
                message : "User already exists"
            }, {status : 400});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await userModel.create({
            name : fullName,
            email : email,
            password : hashedPassword
        });

        return res.json({
            success : true,
            message : "Signup successfull"
        }, {status : 200});
    }
    catch(error)
    {
        return res.json({
            success : false,
            message : error.message
        }, {status : 500});
    }
}
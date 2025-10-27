import userModel from "@/app/models/user/user";
import { NextResponse as res } from "next/server";
import bcrypt from "bcrypt";
import { generateToken } from "@/lib/token";
import connectDB from "@/lib/db";
import { cookies } from "next/headers";

export async function POST(req)
{
    try
    {   
        await connectDB();
        const { email, password } = await req.json();
        if(email.trim() === "" || password.trim() === "")
        {
            return res.json({
                success : false,
                message : "Please fill all the fields"
            }, {status : 400});
        }

        const user = await userModel.findOne({email : email});
        if(!user)
        {
            return res.json({
                success : false,
                message : "Incorrect email & password"
            }, {status : 400});
        }

        const isMatchPass = await bcrypt.compare(password, user?.password);
        if(!isMatchPass)
        {
            return res.json({
                success : false,
                message : "Incorrect email & password"
            }, {status : 400});
        }

        const token = await generateToken(user?._id);
        const cookieStore = await cookies();
        cookieStore.set("token", token, {
            httpOnly : true,
            maxAge : 7 * 24 * 60 * 60 * 1000
        });

        return res.json({
            success : true,
            message : "Login successfull"
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
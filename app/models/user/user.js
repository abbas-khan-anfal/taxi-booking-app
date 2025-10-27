import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : { type : String , required : true, default : "Guest" },
    email : { type : String , required : true , unique : true },
    password : { type : String , required : true },
}, { timestamps : true });

const userModel = mongoose.models.users || mongoose.model("users", userSchema);

export default userModel;
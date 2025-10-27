import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
    name : { type : String, required : true },
    price : { type : Number, required : true },
    seats : { type : Number, required : true },
    img_pub_id : { type : [String]},
    img_path : { type : [String]},
    user : { type : mongoose.Schema.Types.ObjectId, ref : "users" } 
}, { timestamps : true });

const carModel = mongoose.models.cars || mongoose.model("cars", carSchema);

export default carModel;
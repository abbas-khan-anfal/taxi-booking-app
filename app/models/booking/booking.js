import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    pickup_time : { type : String, required : true },
    pickup_date : { type : String, required : true },
    pickup_location : { type : String, required : true },
    pickup_details : { type : String, required : true, default : "" },
    dropoff_location : { type : String, required : true },
    dropoff_details : { type : String, required : true, default : "" },
    vehicle : { type : mongoose.Schema.Types.ObjectId, ref : "cars", required : true },
    total_price : { type : Number, required : true, default : 0 },
    total_passengers : { type : Number, required : true },
    small_luggage : { type : Number, required : true, default : 1 },
    large_luggage : { type : Number, required : true, default : 1 },
    fullName : { type : String, required : true },
    email : { type : String, required : true },
    phone : { type : String, required : true },
    status : { type : String, required : true, default : "pending" },
    payment_method : { type : String, required : true, default : "cash" }
}, { timestamps : true });

const bookingModel = mongoose.models.bookings || mongoose.model("bookings", bookingSchema);

export default bookingModel;
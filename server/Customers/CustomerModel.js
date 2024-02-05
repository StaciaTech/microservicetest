import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema(
    {
        name: String,
        address: String,
        age: Number,
        img: String
    },
    {
        timestamps: true,
        toObject: { virtuals: true },
        toJSON: { virtuals: true }
    }
);


const CustomerModel = mongoose.model("customers", CustomerSchema);
export default CustomerModel;
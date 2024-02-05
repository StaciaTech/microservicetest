import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
    {
        customerId: {
            type: "ObjectId"
        },
        bookId: {
            type: "ObjectId"
        },
        initialDate: {
            type: "String"
        },
        deliveryDate: {
            type: "String"
        }
    },
    {
        timestamps: true,
        toObject: { virtuals: true },
        toJSON: { virtuals: true }
    }
);


const OrderModel = mongoose.model("orders", OrderSchema);
export default OrderModel;
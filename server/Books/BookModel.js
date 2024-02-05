import mongoose from "mongoose";

const BookSchema = new mongoose.Schema(
    {
        title: String,
        author: String,
        publisher: String,
        yearOfPublication: Number,
        img: String
    },
    {
        timestamps: true,
        toObject: { virtuals: true },
        toJSON: { virtuals: true }
    }
);


const BookModel = mongoose.model("books", BookSchema);
export default BookModel;
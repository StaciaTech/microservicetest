//load express
import express from "express"
import mongoose from "mongoose";
import bodyParser from "body-parser";
import BookModel from "./BookModel.js"
import cors from "cors";
import book from "./Data.js"

const app = express()
app.use(bodyParser.json())

app.use(cors())

try {
    mongoose.connect("mongodb+srv://Procurement:mongoaws@cluster.4dq7x2u.mongodb.net/bookservice");
    console.log("Conneted to The MongoDB dataBase");
} catch (error) {
    console.log(error);
}

app.get('/', (req, res) => {
    return res.send("This is our end point")
})


// create a new book
app.post('/test/book-store', async (req, res) => {
    // console.log(req.body)
    const { title, author, publisher, yearOfPublication, img } = req.body

    const book = new BookModel()
    book.title = title
    book.author = author
    book.publisher = publisher
    book.yearOfPublication = yearOfPublication
    book.img = img

    await book.save()
    return res.send("new book created")
})


// list of books

app.get('/test/book-index', async (req, res) => {

    const books = await BookModel.find()
    return res.send(books)
})


app.get('/test/book-show/:id', async (req, res) => {

    const book = await BookModel.findOne({ _id: req.params.id })
    return res.send(book)
})






//listen port
app.listen(4000, () => {
    console.log("Running......!, This is our Books Service port 4000")
})

//load express
import express from "express"
import mongoose from "mongoose";
import bodyParser from "body-parser";
import axios from "axios"
import OrderModel from "./OrderModel.js"
import cors from "cors";

const app = express()
app.use(bodyParser.json())
app.use(cors())

try {
    mongoose.connect("mongodb+srv://Procurement:mongoaws@cluster.4dq7x2u.mongodb.net/orderservice");
    console.log("Conneted to The MongoDB DataBase");
} catch (error) {
    console.log(error);
}

// app.get('/',(req, res)=>{
//     return res.send("This is our end point")
// })


// create a new order
app.post('/create-order', async (req, res) => {

    const { bookId, customerId, initialDate, deliveryDate } = req.body

    const order = new OrderModel()
    order.bookId = bookId
    order.customerId = customerId
    order.initialDate = initialDate
    order.deliveryDate = deliveryDate

    await order.save()
    return res.send("new order created")
})


// list of orders

app.get('/orders', async (req, res) => {

    const orders = await OrderModel.find()
    return res.send(orders)
})


app.get("/order/:id", async (req, res) => {

    let order = await OrderModel.findOne({ _id: req.params.id })

    // console.log("order", order.customerId)

    let customerData

    await axios.get(`http://localhost:4001/customer/${order.customerId}`).then((cust) => {
        // console.log("res", cust.data)
        customerData = cust.data
    }).catch((err) => console.log(err))


    let bookData
    await axios.get(`http://localhost:4000/book/${order.bookId}`).then((book) => {
        // console.log("res", book.data)
        bookData = book.data

    }).catch((err) => console.log(err))



    let response = {}

    response.order = order
    response.customerDetails = customerData
    response.bookDetails = bookData

    return res.json({ response })

})




//listen port
app.listen(4002, () => {
    console.log("Running......!, This is our order Service port: 4002")
})

//load express
import express from "express"
import mongoose from "mongoose";
import bodyParser from "body-parser";
import CustomerModel from "./CustomerModel.js"
import cors from "cors";

const app = express()
app.use(bodyParser.json())


app.use(cors())


try {
  mongoose.connect("mongodb+srv://Procurement:mongoaws@cluster.4dq7x2u.mongodb.net/customerservice");
  console.log("Conneted to The MongoDB DataBase");
} catch (error) {
  console.log(error);
}

// app.get('/',(req, res)=>{
//     return res.send("This is our end point")
// })


// create a new customer
app.post('/test/customer-store', async (req, res) => {

  const { name, address, age, img } = req.body

  const customer = new CustomerModel()
  customer.name = name
  customer.address = address
  customer.age = age
  customer.img = img

  await customer.save()
  return res.send("new customer created")
})


// list of customers

app.get('/test/customer-index', async (req, res) => {

  const customers = await CustomerModel.find()
  return res.send(customers)
})


app.get('/test/customer-show/:id', async (req, res) => {
  const customer = await CustomerModel.findOne({ _id: req.params.id })
  return res.send(customer)
})








//listen port
app.listen(4001, () => {
  console.log("Running......!, This is our Customer Service port: 4001 ")
})

// --------------------------lecture7----------------------------------------


const express = require('express');
const morgan = require('morgan');
const app = express();
const mongoose = require("mongoose");
const userRoutes = require('./routes/user.routes');
const productRoutes = require('./routes/product.routes');
// console.log(users)

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send("Welcome To Express Server...")
})

app.use("/api/user" , userRoutes);

app.use("/api/product" , productRoutes);

app.listen(1412, () => {
    // Database Connection
    mongoose
    .connect('mongodb://localhost:27017/ecommerce')
    .then(() => console.log("Database connection established  successfully"))
    .catch(() => console.log(err))
    console.log("Server Start At http://localhost:1412")
})
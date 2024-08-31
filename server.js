// --------------------------lecture13(Upload Image)----------------------------------------
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT;
const userRoutes = require('./routes/user.routes');
const productRoutes = require('./routes/product.routes');
// console.log(users)
// const cors = require('cors');
const path = require('path');

// app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/public/images" , express.static(path.join(__dirname , "public/images")))
app.get('/', (req, res) => {
    res.send("Welcome To Express Server...")
})

app.use("/api/user" , userRoutes);

app.use("/api/product" , productRoutes);

app.listen(port, () => {
    // Database Connection
    mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
    console.log("Database connection established  successfully")
    })
    .catch((err) => console.log(err))
    console.log(`Server Start At http://localhost:${port}`)
})
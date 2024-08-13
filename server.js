// --------------------------lecture6----------------------------------------


const express = require('express')
const morgan = require('morgan')
const app = express()
const userRoutes = require('./routes/user.routes')
const productRoutes = require('./routes/product.routes')
// console.log(users)

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send("Welcome To Express Server...")
})

app.use("/user" , userRoutes);

app.use("/product" , productRoutes);

app.listen(1412, () => {
    console.log("Server Start At http://localhost:1412")
})
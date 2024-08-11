const express = require('express')
const morgan = require('morgan')
const app = express()
const product = require('./product.json')

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/',(req,res) => {
    res.send('Welcome To Express Server 1412')
})

// CRUD
// Create Product data

app.post('/product' , (req,res) => {
    // console.log(req.body);
    product.push(req.body);
    res.json({message : "Product added Successfully"})
})

// Read Product data - get all products

app.get('/product' , (req,res) => {
    res.json(product)
})

// Get Single Product

app.get('/product/:id' , (req,res) => {
    let id = +req.params.id;
    let pro = product.find(item => item.id === id);
    res.json(pro)
})

// Replace Data - put
app.put('/product/:id' , (req,res) => {
    let id = +req.params.id;
    let index = product.findIndex((item) => item.id === id);
    product.splice(index , 1 , req.body);
    res.json({message : "Product Replaced Successfully"});
})

// Update data - PATCH

app.patch('/product/:id' , (req,res) => {
    let id = +req.params.id;
    let index = product.findIndex((item) => item.id === id);
    let product2 = product[index];
    product.splice(index , 1 ,{...product2 , ...req.body});
    res.json({message : "Product Updated Successfully"});
})

// Delete Data - DELETE

app.delete("/product/:id" , (req,res) => {
    let id = +req.params.id;
    let index = product.findIndex((item) => item.id === id);
    product.splice(index , 1);
    res.json({message: "Product Delete Successfully" });
})

app.listen(1412, () => {
    console.log("Server Start At http://localhost:1412")
})
// --------------------------lecture4----------------------------------------


const express = require('express')
const morgan = require('morgan')
const app = express()
const users = require('./friend.json')
// console.log(users)

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send("Welcome To Express Server...")
})

// CRUD 
// Creat User 

app.post('/user', (req, res) => {
    // console.log(req.body) 
    users.push(req.body)
    res.json({ message: "User Added Success" })
})

// READ - Get All Users 

app.get('/user', (req, res) => {
    res.json(users)
})

// Get Single User   

app.get('/user/:id', (req, res) => {
    let id = +req.params.id
    let item = users.find((user) => user.id === id)
    res.json(item)
})

app.listen(1111, () => {
    console.log("Server Start At http://localhost:1111")
})
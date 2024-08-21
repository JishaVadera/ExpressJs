const User = require("../model/user.model")
const bcrypt = require('bcrypt')

exports.registerUser = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email, isDelete: false })
        if (user) {
            return res.json({ message: "User Already Exists..." })
        }
        let hashpassword = await bcrypt.hash(req.body.password,10)
        // console.log(hashpassword)
        user = await User.create({...req.body, password:hashpassword})
        res.status(201).json({user, message:"Register Successfully..." })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: "Server Error" })
    }
}

exports.loginUser = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email, isDelete: false })
        if (!user) {
            return res.json({ message: "User Not Found..." })
        }
        let comparedPassword = await bcrypt.compare(req.body.password, user.password)
        // console.log(comparedPassword)
        if (!comparedPassword) {
            return res.json({ message: "Email Or Password Not Match..." })
        }
        res.status(200).json({ message: "Login Success...", user })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: "Server Error..." })
    }
}
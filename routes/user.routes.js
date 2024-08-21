const express = require('express');
const userRoutes = express.Router();

const {
   registerUser , loginUser
} = require('../controller/user.controller');

userRoutes.post('/register' , registerUser);

userRoutes.post('/loginUser' , loginUser);

module.exports = userRoutes;

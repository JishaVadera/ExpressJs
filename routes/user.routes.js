const express = require('express');
const userRoutes = express.Router();

const {
    addNewUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
} = require('../controller/user.controller');

userRoutes.post('/' , addNewUser);

userRoutes.get('/' , getAllUsers);

userRoutes.get('/getuser',getUser);

userRoutes.patch("/update" , updateUser);

userRoutes.delete("/delete" , deleteUser);

module.exports = userRoutes;

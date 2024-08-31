const express = require("express");
const userRoutes = express.Router();

const {
  registerUser,
  loginUser,
  getProfile,
  updateProfile,
  deleteUser,
  updatePassword,
  specialUser
} = require("../controller/user.controller");
const { verifyToken } = require("../helpers/verifyToken");
const {upload} = require("../helpers/imageUpload");

userRoutes.post("/registerUser",upload.single('profileImage'), registerUser);

userRoutes.post("/loginUser", loginUser);

userRoutes.get("/profile", verifyToken, getProfile);

userRoutes.put("/update", verifyToken, updateProfile);

userRoutes.delete("/deleteUser", verifyToken, deleteUser);

userRoutes.put("/Update-passwordUser", verifyToken, updatePassword);


module.exports = userRoutes;


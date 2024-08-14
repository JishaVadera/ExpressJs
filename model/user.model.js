const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName : {
        String
    },
    lastName : String , //short hand method
    email :  String,
    age : {
        type : Number
    },
    Hobbies : {
        type : String
    }
});

module.exports = mongoose.model('users', userSchema);
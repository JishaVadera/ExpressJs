const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    pName : {
        type : String
    },
    pDescrip : {
        type : String
    },
    pRate : {
        type : Number
    },
    pWarranty : {
        type : Number
    }
});

module.exports = mongoose.model('products', productSchema);
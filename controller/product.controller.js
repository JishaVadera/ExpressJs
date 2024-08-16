const Product = require("../model/product.model");

exports.addNewUserPro = async (req,res) => {
   try{
    const product = await Product.create(req.body);
    res.status(201).json({product , message : "Product Added Successfully"});
   }
   catch(err){
    console.log(err);
    res.status(500).json({message:"Internal Server Error"});
   }
};

// exports.getAllUsersPro = (req,res) => {
//     res.json(product)
// };

// exports.getUserPro = (req,res) => {
//     let id = +req.params.id;
//     let pro = product.find(item => item.id === id);
//     res.json(pro)
// };

// exports.replaceUserPro = (req,res) => {
//     let id = +req.params.id;
//     let index = product.findIndex((item) => item.id === id);
//     product.splice(index , 1 , req.body);
//     res.json({message : "Product Replaced Successfully"});
// };

// exports.updateUserPro = (req,res) => {
//     let id = +req.params.id;
//     let index = product.findIndex((item) => item.id === id);
//     let product2 = product[index];
//     product.splice(index , 1 ,{...product2 , ...req.body});
//     res.json({message : "Product Updated Successfully"});
// };

// exports.deleteUserPro = (req,res) => {
//     let id = +req.params.id;
//     let index = product.findIndex((item) => item.id === id);
//     product.splice(index , 1);
//     res.json({message: "Product Delete Successfully" });
// };
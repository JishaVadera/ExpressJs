const product = require('../product.json');

exports.addNewUserPro = (req,res) => {
    // console.log(req.body);
    product.push(req.body);
    res.json({message : "Product added Successfully"})
};

exports.getAllUsersPro = (req,res) => {
    res.json(product)
};

exports.getUserPro = (req,res) => {
    let id = +req.params.id;
    let pro = product.find(item => item.id === id);
    res.json(pro)
};

exports.replaceUserPro = (req,res) => {
    let id = +req.params.id;
    let index = product.findIndex((item) => item.id === id);
    product.splice(index , 1 , req.body);
    res.json({message : "Product Replaced Successfully"});
};

exports.updateUserPro = (req,res) => {
    let id = +req.params.id;
    let index = product.findIndex((item) => item.id === id);
    let product2 = product[index];
    product.splice(index , 1 ,{...product2 , ...req.body});
    res.json({message : "Product Updated Successfully"});
};

exports.deleteUserPro = (req,res) => {
    let id = +req.params.id;
    let index = product.findIndex((item) => item.id === id);
    product.splice(index , 1);
    res.json({message: "Product Delete Successfully" });
};
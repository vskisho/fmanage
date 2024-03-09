//product scheema 
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        requried:true
    },
    price:{
        type:Number,
        required:true
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
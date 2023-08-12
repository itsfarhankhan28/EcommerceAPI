const mongoose = require('mongoose')

const EcommerceSchema = mongoose.Schema({
    name:String,
    company:String,
    price:Number,
    colors:String,
    imageurl:String,
    description:String,
    category:String,
    featured:String,
    rating:Number
})

module.exports = mongoose.model("EcommerceSchema",EcommerceSchema)
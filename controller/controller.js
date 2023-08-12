const Schema = require('../model/schema')

const Createproduct = async(req,res)=>{
    const {name , company , price , colors , description , category , featured , rating}= req.body
    try{
        if(req.files){
            const imageurl = req.files["image"][0].path

            const createdproduct = new Schema({
                name:name,
                company:company,
                price:price,
                colors:colors,
                imageurl:imageurl,
                description:description,
                category:category,
                featured:featured,
                rating:rating,
            })

            const savedproducts = await createdproduct.save()
            res.json(savedproducts)
        }
    }catch(err){
        console.log(err)
    }
}

const Getproduct = async(req,res)=>{
    try{
        const getproducts = await Schema.find()
        res.json(getproducts)
        console.log(getproducts)
    }catch(err){
        console.log(err)
    }
}

const DeleteProduct = async(req,res)=>{
    const id = req.params.id
    try{
        const deletedproduct = await Schema.findByIdAndDelete(id)
        res.json(deletedproduct)
    }catch(err){
        console.log(err)
    }
}

module.exports = {Createproduct,Getproduct,DeleteProduct}
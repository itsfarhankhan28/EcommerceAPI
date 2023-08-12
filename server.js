const express = require('express')
const mongoose = require('mongoose')
const {cloudinaryConfig} = require('./config/cloudinaryconfig')
const productrouter = require('./route/route')
const app = express()
const PORT = 5000

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.use('*',cloudinaryConfig)

app.use('/product',productrouter)

app.get('/',(req,res)=>{
    res.send("This is the ecommerc api")
})

const DB = 'mongodb+srv://fk28:farhankhan123@cluster0.fq2ibrs.mongodb.net/'

mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("connection successful")
}).catch(()=>{
    console.log("connection unsuccessful")
})

app.listen(PORT,()=>{
    console.log(`listening to port ${PORT}`)
})
const express = require('express')
const upload = require('../middleware/multer')
const {Createproduct , Getproduct , DeleteProduct} = require('../controller/controller')
const router = express.Router()

router.post('/create',upload.fields([
    {name:'image',maxCount:1}
]),Createproduct)

router.get('/get',Getproduct)

router.delete('/delete/:id',DeleteProduct)

module.exports = router
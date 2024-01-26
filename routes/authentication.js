const express = require('express');
const router = express.Router()
const path = require('path');
const {userAuthenticationHandler} = require('../controllers/userAuthentication');

router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"..","views","authentication.html"))
})

router.post("/",userAuthenticationHandler)

module.exports = router
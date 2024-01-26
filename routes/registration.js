const express = require('express');
const router = express.Router()
const path = require('path');
const {userRegistrationHandler} = require('../controllers/userRegistration');

router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"..","views","registration.html"))
})

router.post("/",userRegistrationHandler)

module.exports = router
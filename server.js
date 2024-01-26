const express = require('express');
const path = require('path');
const app = express()

app.use(express.json())
app.use("/public",express.static(path.join(path.join(__dirname,"public"))))

app.get("/",require('./routes/authentication'))

app.listen(3500,()=>{
    console.log("Server is running");
})
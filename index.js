const express=require("express");
const app=express();
const https = require("https");
const bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended:true}));

app.get("/",function (req,res) {
    res.sendFile(__dirname+"/index.html");
});
app.post("/",function (req,res) {
    var a=req.body.city;
    
})

app.listen(3000,function () {
    console.log("server started at port number 3000");
})
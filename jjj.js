var express=require("express")
var app=express()

app.get("/",(req,res)=>{
res.send("hello")
})

app.listen(3000,()=>{
    console.log("applistening on 3000")
})

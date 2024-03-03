const express = require("express")
const app = express()
const port = 3000
const file = require('./products2.json')
app.get("/products",(req,res)=>{
    const data = file.filter((e)=>{
        if(e.category==req.query.category){
            return e ; 
        }
    })
    res.send(data);
})
app.get("/filterproducts",(req,res)=>{
    const data = file.filter((e)=>{
        if((e.category==req.query.category) && (e.price>=req.query.price)){
            return e ; 
        }
    })
    res.send(data)
})
app.listen(port,(err)=>{
    if(err) console.log("Server not started")
    else console.log("Server Started..")
})
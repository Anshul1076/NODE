const express = require("express")
const app = express()
const port = 3001
const json = require('./products.json')
app.get("/",(req,res)=>{ 
    const newdata = json.products.filter((e)=>{
        if(e.category==req.query.category){
            return e ; 
        }
    })
    res.send(newdata)
})
app.listen(port,(err)=>{
     if(err) console.log("unable to start server")
     else console.log("server started..")
})
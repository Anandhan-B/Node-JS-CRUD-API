import express from "express";
const app = express()
app.listen(7000,()=>console.log('Server running in port 7000'))
app.get('/',(req,res)=>{
    res.send('Success')
})
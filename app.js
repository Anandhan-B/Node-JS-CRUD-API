import express from "express"
import mongoose from "mongoose"
import add from "./Models/tagsModel.js"
const app = express()
app.use(express.json())
await mongoose.connect('mongodb://127.0.0.1:27017/db1').then(()=>{
    app.listen(7000,()=>console.log('Server running in port 7000'))
}).catch(err=>console.log(err.message))
app.all('/',async(req,res)=>{
  //  res.send('api working')
    res.json(await add.find({}))
})
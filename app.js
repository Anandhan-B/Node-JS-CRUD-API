import express from "express"
import mongoose from "mongoose"
import bookRoutes from "./Routes/bookRoutes.js"
import prodRoutes from "./Routes/prodRoutes.js"
import orderRoutes from "./Routes/orderRoutes.js"
import movieRoutes from "./Routes/movieRoutes.js"
import tagRoutes from "./Routes/tagsRouts.js"
import addressRoutes from "./Routes/addressRoutes.js"
import discountRoutes from "./Routes/discountRoutes.js"
const app = express()
app.use('/book',bookRoutes)
app.use('/prod',prodRoutes)
app.use('/order',orderRoutes)
app.use('/movie',movieRoutes)
app.use('/tag',tagRoutes)
app.use('/address',addressRoutes)
app.use('/discount',discountRoutes)
await mongoose.connect('mongodb://127.0.0.1:27017/db1').then(()=>{
    app.listen(7000,()=>console.log('Server running in port 7000'))
}).catch(err=>console.log(err.message))
app.all('/',(req,res)=>{
    res.send('api working')
})
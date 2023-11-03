import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
    products:[{
        type:String,
        required:true
    }],
    totalAmount:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required:true
    },
})

export default mongoose.model('orders',orderSchema,'orders')
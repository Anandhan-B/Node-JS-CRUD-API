import { Decimal128 } from "mongodb";
import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    product:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    color:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        immutable:true
    },
    quantity:{
        type:Number,
        required:true
    },
})

export default mongoose.model('prod',productSchema,'prod')
import mongoose from "mongoose";
const discountSchema = new mongoose.Schema({
    product:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    discount:{
        type:Number,
        required:true
    },
})

export default mongoose.model('discount',discountSchema,'discount')
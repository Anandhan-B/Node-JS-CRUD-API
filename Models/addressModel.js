import mongoose from "mongoose";
const addressSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        street:{
            type:String,
            required:true
        },
        city:{
            type:String,
            required:true
        },
        country:{
            type:String,
            required:true
        },
    }
})

export default mongoose.model('data',addressSchema,'data')
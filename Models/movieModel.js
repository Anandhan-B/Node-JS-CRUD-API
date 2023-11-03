import mongoose from "mongoose";
const movieSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
})

export default mongoose.model('movie',movieSchema,'movie')
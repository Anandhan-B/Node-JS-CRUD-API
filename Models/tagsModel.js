import mongoose from "mongoose";
const tagsSchema = new mongoose.Schema({
    tags:[{
        type:String,
        required:true
    }]
})

export default mongoose.model('tags',tagsSchema,'tags')
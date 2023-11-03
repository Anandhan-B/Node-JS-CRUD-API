import movieModel from "../Models/movieModel.js"

 async function removeDescription(req,res){
    try{
        const id = req.body.id
        const result = await movieModel.findByIdAndUpdate(id,{$unset:{"description":1}})
        if(!result){
            return res.status(404).send('id not found')
        }
       return res.send('removed successfully')
    }
    catch{
        return res.status(500).send('cant remove field description')
    }
}
 

export default {
    removeDescription
}
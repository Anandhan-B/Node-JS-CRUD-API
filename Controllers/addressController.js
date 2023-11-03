import addressModel from "../Models/addressModel.js"

 async function  updateCity(req,res){
    try{
        const id = req.body.id
        const city = req.body.city
        const result = await addressModel.findByIdAndUpdate(id,{$set:{"address.city":city}})
        if(!result){
            return res.status(404).send('id not found')
        }
       return res.send('city updated successfully')
    }
    catch{
        return res.status(500).send('cant update city')
    }
}

 
export default {
 updateCity
}
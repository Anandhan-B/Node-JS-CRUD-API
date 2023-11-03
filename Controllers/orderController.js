import orderModel from "../Models/ordersModel.js"

 async function updateStatus(req,res){
    try{
    const id = req.body.id
    const result = await orderModel.findByIdAndUpdate(id,{"status":"inactive"})
    if(!result){
        return res.status(404).send('id not found')
    }
    return res.send('update success')
    }
    catch{
        return res.status(500).send('cant update status')
    }
}
 async function updateStatusByAmount(req,res){
    try{
    const amount = req.body.amount
    const result = await orderModel.updateMany({"totalAmount":{$gt:amount}},{$set:{"status":"shipped"}})
    if(!result){
        return res.status(404).send('no orders match the amount')
    }
    return res.send('update success')
    }
    catch{
        return res.status(500).send('cant update status')
    }
}

export default {
   updateStatus,
   updateStatusByAmount
}
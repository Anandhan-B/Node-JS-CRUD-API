import discountModel from "../Models/discountModel.js"

 async function discount(req,res){
    try{
        const price = req.body.price
        console.log(price);
        const result = await discountModel.updateMany({"price":{$gt:price}},{$mul:{"Discount":1.05}})
        console.log(result);
        if(!result){
            return res.status(404).send('no product found')
        }
       return res.send('discount increased successfully')
    }
    catch{
        return res.status(500).send('cant change discount')
    }
}

export default {
    discount  
}
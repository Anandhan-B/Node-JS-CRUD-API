import prodModel from "../Models/productModel.js"

 async function price(req,res){
    try{
    let price = req.query.price
    const result = await prodModel.find({"price":{$gt:price}})
    if(result.length === 0){
        return res.status(404).send('No Products Found')
    }
    res.send(result)
    }
    catch{
        return res.status(500).send('cant get products')
    }
}
 async function color(req,res){
    try{
    const result = await prodModel.find({"color":{$not:{$in:['red','green','blue']}}})
    if(result.length === 0){
        return res.status(404).send('No Products matches the requested color')
    }
    res.send(result)
    }
    catch{
        return res.status(500).send('cant get products')
    }
}
 async function rating(req,res){
    try{
    let min = req.query.min
    let max = req.query.max
    const result = await prodModel.find({
        $and:[{"rating":{$gte:min}},{"rating":{$lt:max}}]
    })
    if(result.length === 0){
        return res.status(404).send('No Products matches the requested rating')
    }
    res.send(result)
    }
    catch{
        return res.status(500).send('cant get products')
    }
}
 async function categoryAndPrice(req,res){
    try{
    let category = req.query.category
    let price = req.query.price
    const result = await prodModel.find({category,"price":{$lt:price}})
    if(result.length === 0){
        return res.status(404).send('No Products matches the requested price and category')
    }
    res.send(result)
    }
    catch{
        return res.status(500).send('cant get products')
    }
}
 async function date(req,res){
    try{
    const result = await prodModel.find({}).sort({"createdAt":-1})
    if(result.length === 0){
        return res.status(404).send('No Products found ')
    }
    res.send(result)
    }
    catch{
        return res.status(500).send('cant get products')
    }
}
 async function sort(req,res){
    try{
    const result = await prodModel.find({}).sort({"product":1})
    if(result.length === 0){
        return res.status(404).send('No Products found ')
    }
    res.send(result)
    }
    catch{
        return res.status(500).send('cant get products')
    }
}
 async function highPrice(req,res){
    try{
    const result = await prodModel.find({}).sort({"price":-1}).limit(5)
    if(result.length === 0){
        return res.status(404).send('No Products found')
    }
    res.send(result)
    }
    catch{
        return res.status(500).send('cant get products')
    }
}
 async function quantity(req,res){
    try{
    const id = req.body.id
    const units = req.body.units
    const result = await prodModel.findByIdAndUpdate(id,{$inc:{"quantity":units}})
    if(!result){
        return res.status(404).send('id not found')
    }
    return res.send('update success')
    }
    catch{
        return res.status(500).send('cant update quantity')
    }
}

export default {
    price,
    color,
    rating,
    categoryAndPrice,
    date,
    sort,
    highPrice,
    quantity
}
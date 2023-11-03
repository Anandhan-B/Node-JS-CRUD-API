import tagsModel from "../Models/tagsModel.js"

 async function newTag(req,res){
    try{
        const id = req.body.id
        const tag = req.body.tag
        const result = await tagsModel.findByIdAndUpdate(id,{$push:{"tags":tag}})
        if(!result){
            return res.status(404).send('id not found')
        }
       return res.send('tag added successfully')
    }
    catch{
        return res.status(500).send('cant add tag')
    }
}

 async function removeTag(req,res){
    try{
        const id = req.body.id
        const result = await tagsModel.findByIdAndUpdate(id,{$pop:{"tags":1}})
        if(!result){
            return res.status(404).send('id not found')
        }
       return res.send('tag removed successfully')
    }
    catch{
        return res.status(500).send('cant remove tag')
    }
}
 
async function newDistinctTag(req,res){
    try{
        const id = req.body.id
        const tag = req.body.tag
        const result = await tagsModel.findByIdAndUpdate(id,{$addToSet:{"tags":tag}})
        if(!result){
            return res.status(404).send('id not found')
        }
       return res.send('tag added successfully')
    }
    catch{
        return res.status(500).send('cant add tag')
    }
}
async function removeAllSameTag(req,res){
    try{
        const id = req.body.id
        const tag = req.body.tag
        const result = await tagsModel.findByIdAndUpdate(id,{$pull:{"tags":tag}})
        if(!result){
            return res.status(404).send('id not found')
        }
       return res.send('tag removed successfully')
    }
    catch{
        return res.status(500).send('cant remove tag')
    }
}

export default {
    newTag,
    removeTag,
    newDistinctTag,
    removeAllSameTag
}
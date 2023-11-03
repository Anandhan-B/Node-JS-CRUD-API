import express from "express";
import controller from "../Controllers/tagsController.js"
const route = express.Router()
route.use(express.json())
route.put('/newTag',(req,res)=>controller.newTag(req,res))  //Task 15
route.put('/removeTag',(req,res)=>controller.removeTag(req,res))  //Task 16
route.put('/newDistinctTag',(req,res)=>controller.newDistinctTag(req,res))  //Task 17
route.put('/removeAllSameTag',(req,res)=>controller.removeAllSameTag(req,res))  //Task 18

export default route
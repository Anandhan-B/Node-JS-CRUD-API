import express from "express";
import controller from "../Controllers/movieController.js"
const route = express.Router()
route.use(express.json())
route.put('/removeDescription',(req,res)=>controller.removeDescription(req,res))  //Task 13
export default route
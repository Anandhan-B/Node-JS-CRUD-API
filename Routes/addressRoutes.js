import express from "express";
import controller from "../Controllers/addressController.js"
const route = express.Router()
route.use(express.json())
route.put('/updateCity',(req,res)=>controller.updateCity(req,res))  //Task 20
export default route
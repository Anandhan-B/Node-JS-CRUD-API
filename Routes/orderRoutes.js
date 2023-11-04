import express from "express";
import controller from "../Controllers/orderController.js"
const route = express.Router()
route.use(express.json())
route.patch('/updateStatus',(req,res)=>controller.updateStatus(req,res))  //Task 12
route.patch('/updateStatusByAmount',(req,res)=>controller.updateStatusByAmount(req,res))  //Task 19
export default route
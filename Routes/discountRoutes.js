import express from "express";
import controller from "../Controllers/discountController.js"
const route = express.Router()
route.use(express.json())
route.put('/discountByPrice',(req,res)=>controller.discount(req,res))  //Task 21
export default route
import express from "express";
import controller from "../Controllers/bookController.js"
const route = express.Router()
route.use(express.json())
route.get('/category',(req,res)=>controller.category(req,res))  //Task 1
route.get('/year',(req,res)=>controller.year(req,res))  //Task 2
route.get('/yearAndCategory',(req,res)=>controller.yearAndCategory(req,res))  //Task 3
route.get('/sort',(req,res)=>controller.sort(req,res))  //Task 9
export default route
import express from "express";
import controller from "../Controllers/prodController.js"
const route = express.Router()
route.use(express.json())
route.get('/price',(req,res)=>controller.price(req,res))  //Task 4
route.get('/color',(req,res)=>controller.color(req,res))  //Task 5
route.get('/rating',(req,res)=>controller.rating(req,res))  //Task 6
route.get('/categoryAndPrice',(req,res)=>controller.categoryAndPrice(req,res))  //Task 7
route.get('/date',(req,res)=>controller.date(req,res))  //Task 8
route.get('/sort',(req,res)=>controller.sort(req,res))  //Task 10
route.get('/highPrice',(req,res)=>controller.highPrice(req,res))  //Task 11
route.put('/quantity',(req,res)=>controller.quantity(req,res))  //Task 14

export default route
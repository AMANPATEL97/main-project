import express from 'express'
import { GetAllProduct } from '../controller/productFiltercontroller.js';
let routes = express.Router();

routes.get("/", GetAllProduct)

export default routes;
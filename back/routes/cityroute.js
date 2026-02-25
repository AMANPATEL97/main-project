import express from 'express';
import {getall,sendmail,DoPayment} from '../citycontroller/citycon.js';


let routes=express.Router()
routes.get("/",getall)
routes.get("/sendmail",sendmail)
routes.get("/payment",DoPayment)

export default routes;
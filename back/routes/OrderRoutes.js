import express from 'express';
import {payment,Confirm,getallorderbyuserid,ChangeStatus,
    getallorder,GetAllDelivered,GetAllPlacedOrder,GetAllOutForDel,GetAllShipped} from '../controller/Ordercontroller.js';

import Isuserloggedin from '../util/Isuserloggedin.js'
import Isadminloggedin from '../util/Isadminloggedin.js'
let routes=express.Router();

routes.post("/payment",Isuserloggedin,payment)
routes.post("/Confirm",Isuserloggedin,Confirm)
routes.get("/getall",Isuserloggedin,getallorderbyuserid)

routes.get("/getallorder",Isadminloggedin,getallorder)
routes.get("/getallpalced", Isadminloggedin, GetAllPlacedOrder);
routes.get("/getalldevelivered", Isadminloggedin, GetAllDelivered);
routes.get("/getalloutfordel", Isadminloggedin, GetAllOutForDel);
routes.get("/getallshipped", Isadminloggedin, GetAllShipped);


routes.put("/changestatus/:id",Isadminloggedin, ChangeStatus)

export default routes;
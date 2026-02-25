import express from 'express';
import { otp,checkmail,changepassword} from '../citycontroller/forgetpassword.js';
let routes=express.Router();

routes.post("/checkmail",checkmail)
routes.post("/update",changepassword)
routes.post("/otp",otp)

export default routes;
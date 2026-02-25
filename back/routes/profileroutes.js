import express from 'express';
import {Myprofile, Myprofilepic,updateprofile,changepassword} from '../citycontroller/profilecontrol.js';
let routes= express.Router()

routes.get("/",Myprofile)
routes.get("/profilepic", Myprofilepic)
routes.put("/", updateprofile)
routes.put("/changepassword", changepassword)

export default routes;
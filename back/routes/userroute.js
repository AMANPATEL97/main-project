import express from 'express';
import { saveuser, deleteall, getall, profilepic,changestatus } from '../citycontroller/usercontroller.js';
import Isadminloggedin from '../util/Isadminloggedin.js'

let ans=express.Router()
ans.get("/",Isadminloggedin,getall)
ans.post("/",saveuser)
ans.get("/deleteall",deleteall)
ans.put("/profilepic",profilepic)
ans.put("/changestatus/:id",changestatus)
export default ans;
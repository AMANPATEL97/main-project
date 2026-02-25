import express from 'express'
import {saveAdmin,getallAdmin,getbyidAdmin,deleteAdmin,updatepassAdmin,getloggedInadmin,updateAdmin} from '../citycontroller/Admincontroller.js';
let routes =express.Router();


routes.get("/",getallAdmin)
routes.get("/getadmin",getloggedInadmin)

routes.get("/:id",getbyidAdmin)
routes.post("/",saveAdmin)
routes.put("/updatepassword/:id",updatepassAdmin)
routes.put("/:id",updateAdmin)
routes.delete("/:id",deleteAdmin)

export default routes;
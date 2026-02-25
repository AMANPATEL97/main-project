import {deleteproduct,updateproduct,saveproduct,
    deleteAllproduct,getbyidproductforedit,
    getallproduct,getbyidproduct,uploadimage,} 
from '../citycontroller/productcontroller.js';
import Isadminloggedin from '../util/Isadminloggedin.js'

import express from 'express';

let router=express.Router();

router.get("/",getallproduct)
router.get("/deleteall",deleteAllproduct)
router.get("/:id",getbyidproduct)
router.put("/:id",updateproduct)
router.get("/edit/:id",getbyidproductforedit)


router.put("/uploadimage/:id",Isadminloggedin,uploadimage)
router.delete("/:id",Isadminloggedin,deleteproduct)
router.post("/",Isadminloggedin,saveproduct)

export default router;
import express from 'express';
import {getallcategory,getbyidcategory,getallcategoryAndsubcate,updatecategory,deletecategory,savecategory} from '../citycontroller/categorycontroller.js';
import Isadminloggedin from '../util/Isadminloggedin.js';
let router=express.Router()

router.get("/",getallcategory)
router.get("/subcate",getallcategoryAndsubcate)
router.get("/:id",getbyidcategory)


router.put("/:id", Isadminloggedin,updatecategory)
router.delete("/:id", Isadminloggedin,deletecategory)
router.post("/", Isadminloggedin,savecategory)

export default router;
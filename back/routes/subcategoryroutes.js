import express from 'express';
import {subsavecategory,deleteallsubcate,getallsubcategory,getallsubcatebycateId,getbyidsubcategory,deletesubcategory,updatesubcategory} from '../citycontroller/subcategorycontroller.js';
import Isadminloggedin from '../util/Isadminloggedin.js'
let sub=express.Router()

sub.get("/",getallsubcategory)
sub.get("/deleteall",deleteallsubcate)
sub.get("/getsubcatebycateid/:id",getallsubcatebycateId)
sub.get("/:id",getbyidsubcategory)


sub.put("/:id",Isadminloggedin ,updatesubcategory)
sub.delete("/:id",Isadminloggedin ,deletesubcategory)
sub.post("/",Isadminloggedin ,subsavecategory)

export default sub;
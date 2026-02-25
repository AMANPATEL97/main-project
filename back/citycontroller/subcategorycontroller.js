import subcate from "../citymodule/subcategory.js";
import Product  from '../citymodule/productmodel.js';


let getallsubcatebycateId=async(req,res)=>{
    console.log(req.params);
    let cid = req.params.id;
    let result= await subcate.find({categoryId : cid});
   res.send({success:true,result})

}

let subsavecategory = async(req, res)=>{
    console.log(req.body);
    console.log(req.headers)
    let result = await subcate.create(req.body);
    res.send({success: true, result});
}
let getallsubcategory=async(req,res)=>{
    let result=await subcate.find().populate("categoryId").exec()
    res.send({success:true,result})
}
let getbyidsubcategory= async(req, res)=>{
    let id = req.params.id;
    let result = await subcate.find({_id : id });
    res.send({success: true, result : result[0]});
}
let updatesubcategory = async(req, res)=>{
    let id = req.params.id;
    let result = await subcate.updateMany({_id : id }, req.body);
    res.send({success: true, result});
}
let deletesubcategory=async(req,res)=>{
     let id=req.params.id;
    let result=await subcate.deleteMany({_id:id})
    await Product.deleteMany({ subcategoryId:id})
    res.send({success:true,result});
}

let deleteallsubcate=async(req,res)=>{
    let result=await subcate.deleteMany()
     res.send({success:true,result});
}
export{deletesubcategory,deleteallsubcate,updatesubcategory,getallsubcatebycateId,subsavecategory,getallsubcategory,getbyidsubcategory}
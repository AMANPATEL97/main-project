import cate from "../module/category.js";
import jwt from 'jsonwebtoken';
// import { ENC_KEY } from "../config/conn.js";
import subcate from '../module/subcategory.js'
import Product from '../module/productmodel.js';


let savecategory=async(req,res)=>{
    if(req.headers.authorization){
        let token= req.headers.authorization;
        let obj = jwt.decode(token,process.env.ENC_KEY)
        if (obj){         
            let result=await cate.create(req.body)
            res.send({success:true,result})
        }else{
          res.send({successs:false})   
        }
    }else{
         res.send({successs:false})
        }
}
let getallcategory=async(req,res)=>{
    let result=await cate.find()
    res.send({success:true,result})
}



let  getallcategoryAndsubcate = async(req, res)=>{
    let result = await cate.find();
    let allresult = await Promise.all(
        result.map(async(item)=>{
        let result2 = await subcate.find({categoryId : item._id});
        return {category :item, info : result2}
        })
    )
    res.send({success: true, result:allresult});
}


let getbyidcategory = async(req, res)=>{
    let id = req.params.id;
    let result = await cate.find({_id : id });
    res.send({success: true, result : result[0]});
}
let updatecategory = async(req, res)=>{
    let id = req.params.id;
    let result = await cate.updateMany({_id : id }, req.body);
    res.send({success: true, result});
}
let deletecategory=async(req,res)=>{
    let id=req.params.id;
    await Product.deleteMany({categoryId : id});
    await subcate.deleteMany({categoryId : id});
    let result=await cate.deleteMany({_id:id});
    res.send({success:true,result})
}
export{deletecategory,updatecategory,getallcategoryAndsubcate,savecategory,getallcategory,getbyidcategory}
import pro from '../module/productmodel.js';
import jwt from 'jsonwebtoken';
// import { ENC_KEY } from "../config/conn.js";
import PATH from 'path';

let saveproduct=async(req,res)=>{
    if(req.headers.authorization){
        let token= req.headers.authorization;
        let obj = jwt.decode(token,process.env.ENC_KEY)
        if (obj){
             req.body.f_price =req.body.price - (req.body.price*req.body.discount/100)
            let result=await pro.create(req.body)
            res.send({success:true,result})
        }else{
          res.send({successs:false})   
        }
    
    }else{
        
         res.send({successs:false})
        }
}
let getallproduct=async(req,res)=>{
    let result=await pro.find().populate("categoryId").populate("subcategoryId").exec();
    res.send({success:true,result:result})
}
let getbyidproduct=async(req,res)=>{
    let id=req.params.id;
    let result=await pro.find({_id:id}).populate("categoryId").populate("subcategoryId").exec();

    res.send({success:true,result:result[0]})
}

let getbyidproductforedit=async(req,res)=>{
    let id=req.params.id;
    let result=await pro.find({_id:id})

    res.send({success:true,result:result[0]})
}


let updateproduct=async(req,res)=>{
    let id=req.params.id;

    req.body.f_price =req.body.price - (req.body.price*req.body.discount/100)
    let result=await pro.updateMany({_id:id},req.body)
    res.send({success:true,result})
}
let deleteproduct=async(req,res)=>{
     let id=req.params.id;
    let result=await pro.deleteMany({_id:id})
    res.send({success:true,result})
}

let deleteAllproduct =async(req,res)=>{
       await pro.deleteMany();
   res.send({success:true})   
}

let uploadimage=async(req,res)=>{
    // console.log(req.files);
      let pid=req.params.id;
    let image=req.files.phota;
    await pro.updateMany({_id:pid}, {image : image.name});
    image.mv(PATH.resolve()+"/assets/product_images/"+image.name,(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("********* success",)
        }
        
    });
  
}

export{deleteproduct,updateproduct,
    deleteAllproduct,getbyidproductforedit,
    saveproduct,getallproduct,getbyidproduct,uploadimage}

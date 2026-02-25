import user from '../module/usermodel.js';
// import jwt from 'jsonwebtoken';
// import { ENC_KEY } from '../config/conn.js';
// import { syncIndexes } from 'mongoose';
import sha1 from 'sha1';

let Myprofile = async(req, res)=>{
    // console.log(req.userobj);   
       let result = await user.find({_id : req.userobj.id})
       console.log(result[0])
    res.send({success:true, result : result[0]});
   
}

    // if(req.headers.authorization){
    //  let token= req.headers.authorization;
    //  let obj =jwt.decode(token, ENC_KEY);
    //  if(obj){
    //         let result= await user.find({_id:obj.id},)
    //         res.send({success:true,result : result[0]})

    //  }else{
    //      res.send({success:false})
    //  }
    // }else{
    //     res.send({success:false})
    // }
    


let Myprofilepic = async(req,res)=>{
    console.log(req.headers)
  
    let result= await user.find({_id:req.userobj.id})
            res.send({success:true,result : result[0]})
}

let updateprofile=async(req,res)=>{
let id=req.userobj.id;
        await user.updateMany({_id:id},req.body)
    res.send({success:true})
}

let changepassword= async(req,res)=>{
//     console.log(req.userobj);
// console.log(req.body);
let id=req.userobj.id;
let result= await user.find({_id:id})
if(result[0].password ==sha1 (req.body.curr_pass)){
    console.log(req.body);
   await user.updateMany({_id:id},{password:sha1(req.body.new_pass)});
         res.send({success:true})  
}else{
  res.send({success:false})   
}
}



export {Myprofile,Myprofilepic,updateprofile,changepassword}
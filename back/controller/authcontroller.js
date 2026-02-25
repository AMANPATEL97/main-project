import user from '../module/usermodel.js'
import sha1 from 'sha1';
import jwt from 'jsonwebtoken';
// import { ENC_KEY } from '../config/conn.js';
let auth =async(req,res)=>{
    console.log(req.body);
    
    let {email,password}=req.body;

    let result=await user.find({email : email})
    // console.log(result)
    if(result.length > 0){

        if(result[0].password == sha1(password)){
            if(result[0].status==1){
            // res.send({success:true,name : result[0].name})
            let userobj= { id : result[0]._id}
            // console.log(userobj)
            let token=jwt.sign(userobj,process.env.ENC_KEY)
            res.send({success:true, name: result[0].name,token : token});
            }else{
                  res.send({success:false,errtype :3});
            }
        }else{
            res.send({success:false,errtype :2});
        }
    }else{
        res.send({success:false,errtype :1})
    }
}
export default auth;
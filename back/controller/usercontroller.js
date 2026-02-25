import user from "../module/usermodel.js";
import sha1 from 'sha1';
import jwt  from 'jsonwebtoken';
import Path from 'path'
// import { ENC_KEY } from "../config/conn.js";
import   dosendMail from '../helper/semdmailhelper.js'
import WelcomeEmail from '../Email/WelcomeEmail.js';


let saveuser=async(req,res)=>{
    delete req.body.repasword;
    req.body.password = sha1(req.body.password)
   
    let result=await user.create(req.body)
    await dosendMail(req.body.email ,"successfuly regsition : Email.com",WelcomeEmail);
    res.send({success:true,result})
}

let getall=async(req,res)=>{

    let result=await user.find()
    res.send({success:true,result})

}
let deleteall=async(req,res)=>{
    await user.deleteMany()
    res.send({success:true})
}
let profilepic =async(req,res)=>{
    //  console.log("*********". req.headers)
    if(req.headers.authorization){
        let token=req.headers.authorization;
         let obj= jwt.decode(token,process.env.ENC_KEY);
         if(obj){
             let phota=req.files.image;
             let name=phota.name;
              await user.updateMany({_id: obj.id},{image : name})
              phota.mv(Path.resolve()+"/assets/user_images/"+name,(err)=>{

                res.send({success:true, name: name});
              });
         }else{
            res.send({success:false,msg : "un-authorized user1"}); 
         }
    }else{
         res.send({success:false,msg : "un-authorized user2"}); 
    }
}

let changestatus=async (req,res)=>{
    //   console.log(req.params)
    //   console.log(req.body)
    await user.updateMany({_id : req.params.id},req.body);
    res.send({success:true})
}

export {getall,saveuser,changestatus,deleteall,profilepic}
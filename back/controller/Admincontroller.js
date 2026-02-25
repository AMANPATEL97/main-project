import Admin from '../module/Adminauth.js';
import sha1 from 'sha1';

let saveAdmin=async(req,res)=>{
    delete req.body.repassword;
    req.body.password = sha1(req.body.password);
     let result=await Admin.create(req.body)
    res.send({success:true,result})
}
let getallAdmin=async(req,res)=>{
    let result=await Admin.find({},"-password")
    res.send({success:true,result})
}

let getloggedInadmin=async(req,res)=>{
     let aid= req.userobj.id;
         let result=await Admin.find({_id : aid},"-password")
    res.send({success:true,result})
}

let getbyidAdmin = async(req, res)=>{
    let id = req.params.id;
    let result = await Admin.find({_id : id });
    res.send({success: true, result : result[0]});
}
let updatepassAdmin=async(req,res)=>{
    let id = req.params.id;
    let result = await Admin.find({_id : id});
    if(result[0].password == sha1(req.body.password)){
           await Admin.updateMany({_id : id},{password : sha1(req.body.repass)})
   res.send({success:true})
        }else{
        res.send({success:false})
    }
}
let updateAdmin = async(req, res)=>{
    let id = req.params.id;
    let result = await Admin.updateMany({_id : id }, req.body);
    res.send({success: true, result});
}
let deleteAdmin=async(req,res)=>{
    let id=req.params.id;
    //  await Admin.deleteMany({})
    let result=await Admin.deleteMany({_id:id});
    res.send({success:true,result})
}

export {getallAdmin,getloggedInadmin,getbyidAdmin,deleteAdmin,updateAdmin,updatepassAdmin,saveAdmin};
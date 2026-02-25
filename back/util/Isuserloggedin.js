import jwt from 'jsonwebtoken';
// import { ENC_KEY } from '../config/conn.js';

let Isuserloggedin=(req,res,next)=>{
  if(req.headers.authorization){
    let token=req.headers.authorization;
    let obj= jwt.decode(token,process.env.ENC_KEY);
    if(obj){
        req.userobj = obj;

    next();
  }else{
   res.send({success:false,msg : "un-authorization user***"})
   return;     
  }
}
  else{
    res.send({success:false,msg : "un-authorization user ---"})
    return;
  }
}


export default Isuserloggedin;
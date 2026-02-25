import user from '../module/usermodel.js'
import uniqueOtp from 'random-int';
import sha1 from 'sha1';
import Semdmailhelper from '../helper/semdmailhelper.js'
let checkmail=async(req,res)=>{
   // console.log(req.body)
  
 let {email} =req.body;
 let result = await user.find({email : email})
//  console.log(result)
 if(result.length ==1){
    let otp = uniqueOtp(100000,1000000)
   //  console.log(otp)
    
      await user.updateMany({email : email}, {otp : otp})
      Semdmailhelper(email, "otp",`<h1>your otp ${otp}</h1>`);
      res.send({success:true , email : email});
    
   }else{
      res.send({success:false});
   }
   
}
let  otp=async(req,res)=>{
let {otp,email}=req.body;
let result = await user.find({email :email});
if(result[0].otp == otp){
   res.send({success: true})

}else{
   res.send({success:false})
}

}

let changepassword=async(req,res)=>{
  let {email, password} = req.body;
  await user.updateMany({email : email},{password : sha1(password)}) 
  res.send({success:true});
}



export{changepassword,otp,checkmail}




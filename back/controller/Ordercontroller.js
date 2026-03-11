import Order from '../module/Oreder.js';
import pdf from 'pdf-creator-node';
import Product  from '../module/productmodel.js'
import user from '../module/usermodel.js';
import createOption from '../helper/CreateReceipt.js'
// import { RAZORPAY_KEY,RAZORPAY_SECRET } from "../config/conn.js";
import Razorpay from 'razorpay';

let rzpy = new Razorpay({
    key_id :process.env.RAZORPAY_KEY,
    key_secret :process.env.RAZORPAY_SECRET
})

let payment =async(req,res)=>{
    // console.log(req.body);
    let {amount} = req.body;
     try{
        const order = await rzpy.orders.create({
            amount : amount*100,
            currency : 'INR'
        });
        res.send({success:true, orderId : order.id})
    }catch(err){
        res.send({success:false})
    }
}

let Confirm = async(req, res)=>{
    let result_user = await user.find({_id : req.body.user_id});
    let result_product = await Product.find({_id : req.body. product_id});
    let pdfData = createOption(req.body, result_user[0], result_product[0]);
    // console.log(req.body);
    // return;
    // send a mail to custer

     pdf
  .create(pdfData.document, pdfData.options)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error("-----------", error);
  });
    await Order.create(req.body);
    res.send({success:true});

}


let getallorderbyuserid = async(req, res)=>{
       let id = req.userobj.id;
    let result = await Order.find({user_id : id}).populate("product_id").exec();
    res.send({success: true, result});
}
let getallorder = async(req, res)=>{
      let id = req.userobj.id;
    let result = await Order.find({}).populate("user_id").populate("product_id").exec();
    res.send({success: true, result});
}

let GetAllPlacedOrder = async(req, res)=>{
    let total = await Order.find({ status:1}).populate("user_id").populate("product_id").exec();
    res.send({total : total})
}
let GetAllShipped = async(req, res)=>{
    let total = await Order.find({ status:2}).populate("user_id").populate("product_id").exec();
    res.send({total : total})
}
let GetAllOutForDel = async(req, res)=>{
    let total = await Order.find({ status:3}).populate("user_id").populate("product_id").exec();
    res.send({total : total})
}
let GetAllDelivered = async(req, res)=>{
     let total = await Order.find({ status:4}).populate("user_id").populate("product_id").exec();
    res.send({total : total})
}

let ChangeStatus = async(req, res)=>{
    let id = req.params.id;
    await Order.updateMany({_id : id}, req.body);
    res.send({success:true})
}




export {ChangeStatus,payment,Confirm,getallorderbyuserid,getallorder,GetAllDelivered,GetAllPlacedOrder,GetAllOutForDel,GetAllShipped}                    
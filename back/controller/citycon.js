import city from "../module/citymodel.js";
import dosendMail from "../helper/semdmailhelper.js";
import Razorpay from 'razorpay';


const RAZORPAY_KEY = "rzp_test_Rek8z2OtrReaiV";
const RAZORPAY_SECRET = "c3QZBCHSmaMmuLK9Gc9y1MtK";

let rzpy = new Razorpay({
    key_id : RAZORPAY_KEY,
    key_secret : RAZORPAY_SECRET
})

let getall=async(req,res)=>{

    let result=await city.find()

    res.send(result)
}
let sendmail=async(req,res)=>{
   await dosendMail("abhishekpatel71773@gmail.com","hello",`<h1>hello world</h2>`);
res.send({success:true});

}
let DoPayment = async(req, res)=>{
    let amount = 100;
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


export {getall,sendmail,DoPayment}
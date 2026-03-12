import React from 'react'
import { useState} from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Buynow= () => {

    let [user, setUser]=useState({});
    let [ pro,setpro]=useState({});
    let param =useParams();
       let Navigate=useNavigate();
   useEffect(()=>{
    // console.log("*****************")
    axios
    .get(`${import.meta.env.VITE_Api_url}/profile`,{headers : {Authorization : localStorage.getItem("access_user")}})
    .then(response=>{
      console.log(response.data.result)
     
      setUser(response.data.result);

    })
  },[])

  useEffect(()=>{
    axios
    .get(`${import.meta.env.VITE_Api_url}/product/${param.id}`)
    .then(response=>{
          // console.log(response.data)
      setpro(response.data.result);
    })
  },[])
  
  let makePayment = (p)=>{

    axios
    .post(`${import.meta.env.VITE_Api_url}/order/payment`,{amount : p},{headers : {Authorization : localStorage.getItem("access_user")}})
    .then(response=>{
      console.log(response.data)
          if(response.data.success==true){
           let option = {
             key : "rzp_test_Rek8z2OtrReaiV",
             amount : p*100,
             currency : 'INR',
             order_id : response.data.orderId,
             handler : async(data)=>{
               console.log(data)

               let paymentObj= {
                   user_id: user._id,
                   product_id: pro._id,   
                   razorpay_order_id : data.razorpay_order_id,
                   razorpay_payment_id : data.razorpay_payment_id,
                   razorpay_signature : data.razorpay_signature,
                   price : pro.price,
                   address : user.address,
                   discount : pro.discount,
                   charge : 100.00,
                   amount :p,
               }
               axios.post(`${import.meta.env.VITE_Api_url}/order/Confirm`,paymentObj,{headers : {Authorization : localStorage.getItem("access_user")}})
              .then(response=>{
                // console.log(response.data)
                Navigate("/myorder")
              })
            }
         }
          let rzpy = window.Razorpay(option);
        rzpy.open();
      }
    })
    } 
     return (
   <> 
   <div className="container my-4">
        <div className="row">
            <div className="col-md-8">
              
              {
                user
                ?
                
                <div className="card p-4" style={{backgroundColor : "#a5d4e7ff"}}>
                    <h5 className='p-2 bg-dark text-white'><span className='badge bg-light text-dark'>1</span> Login</h5>
                    <p className='py-2 my-0 mx-2'><i className='fa fa-user'></i>{user.name}</p>
                    <p className='py-2 my-0 mx-2'><i className='fa fa-phone'></i>{user.contact}</p>

                    <h5 className='p-2 bg-dark text-white'><span className='badge bg-light text-dark'>2</span> Address</h5>
                    <p className='py-2 my-0 mx-2'><i className='fa fa-book'></i> {user.address} {user.city}</p>
                    
                </div>
                :
                ''
              }
            </div>
            {
              pro
              ?
            <div className="col-md-4">
                <div className='card p-4' style={{backgroundColor : "#a5d4e7ff"}}>
                    <h6>Price Detail</h6>
                    <div className='card p-3' style={{backgroundColor : "#ccc"}}>
                        <div className='d-flex justify-content-between'>
                        <p>Price</p>
                        <p>{pro.price ? pro.price.toFixed(2) : ''}</p>

                        </div>
                        
                        <div className='d-flex justify-content-between'>
                        <p>Discount({pro.discount}%)</p>
                        <p>-{pro.price ? (pro.price * pro.discount/100).toFixed(2) : ''}</p>

                        </div>
                        <div className='d-flex justify-content-between'>
                        <p>Delivery</p>
                        <p>+100.00</p>

                        </div>
                        <hr />
                        <div className='d-flex justify-content-between'>
                        <p><b>Payble Amount</b></p>
                        <p><b>{pro.price ? (pro.price - (pro.price* pro.discount/100)+ 100).toFixed(2) : ''}</b></p>

                        </div>
                    </div>
                    <button onClick={()=>makePayment(pro.price - (pro.price* pro.discount/100)+ 100)} className='btn btn-warning m-2'>Make Payment</button>
                </div>
            </div>
                :
                ''
            }
        </div>
    </div>
    </>
  )
}


export default Buynow





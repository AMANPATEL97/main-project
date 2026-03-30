// import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom'
// // import { Api_url } from '../config/api'
// import axios from 'axios'
// import 'bootstrap/dist/css/bootstrap.min.css';

// const About = () => {
    
//    let [msg,setmsg]=useState("")
//   let  send =()=>{
//    axios
//    .get(`${import.meta.env.VITE_Api_url}/city/sendmail`)
//    .then(response=>{
//       console.log(response.data)
      
//       setmsg(" send successfuly.......")
//    })
//   }

//    let checkout = async()=>{
   
//      axios.get(`${import.meta.env.VITE_Api_url}/city/payment`)
//     .then(response=>{
//        if(response.data.success==true){
//            let option = {
//              key : "rzp_test_Rek8z2OtrReaiV",
//              amount : 100*100,
//              currency : 'INR',
//              order_id : response.data.orderId,
//              handler : async(rzpyRes)=>{
//                console.log(rzpyRes)
//             }
//          }
//           let rzpy = window.Razorpay(option);
//         rzpy.open();
//       }
//     })
//    }

//   return (
//    <>
//    </>
//   )
// }

// export default About

import React from "react";

function About() {
  return (
    <div>

  
      <div className="bg-dark text-white text-center py-5">
        <h1>About Our Company</h1>
        <p className="lead">
          Delivering quality products with trust and innovation
        </p>
      </div>

      <div className="container my-5">
        <div className="row align-items-center">
          
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
              alt="about"
              className="img-fluid rounded shadow"
            />
          </div>

          <div className="col-md-6">
            <h3>Who We Are</h3>
            <p>
              We are a leading e-commerce platform providing a wide range of
              products including electronics, fashion, and lifestyle items.
              Our focus is on quality, affordability, and customer satisfaction.
            </p>

            <h5>Our Vision</h5>
            <p>
              To become the most trusted online shopping destination worldwide.
            </p>

            <h5>Our Mission</h5>
            <p>
              Deliver products quickly with secure payments and seamless user
              experience.
            </p>
          </div>

        </div>
      </div>

      <div className="container my-5">
        <div className="row text-center">
          
          <div className="col-md-3">
            <h5>🚚 Fast Delivery</h5>
            <p>Quick and reliable shipping</p>
          </div>

          <div className="col-md-3">
            <h5>🔒 Secure Payment</h5>
            <p>100% safe transactions</p>
          </div>

          <div className="col-md-3">
            <h5>💯 Quality Products</h5>
            <p>Best quality guaranteed</p>
          </div>

          <div className="col-md-3">
            <h5>📞 24/7 Support</h5>
            <p>Always here to help</p>
          </div>

        </div>
      </div>

     
     

      

    </div>
  );
}

export default About;
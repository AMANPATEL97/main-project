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

const About = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      
      {/* Hero Section */}
      <div style={{
        background: "url('https://images.unsplash.com/photo-1521335629791-ce4aec67dd47') center/cover no-repeat",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff"
      }}>
        
      </div>
      {/* About Content */}
      <div style={{ padding: "50px 20px", maxWidth: "1100px", margin: "auto" }}>
        
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Who We Are
        </h2>

        <p style={{ textAlign: "center", lineHeight: "1.8", color: "#555" }}>
          We are a modern fashion brand dedicated to providing stylish,
          comfortable, and affordable clothing for men. Our mission is to
          redefine everyday fashion by combining quality fabrics with
          trending designs.
        </p>

        {/* Section 2 */}
        <div style={{ display: "flex", flexWrap: "wrap", marginTop: "40px", gap: "20px" }}>
          
          <div style={{ flex: "1" }}>
            <img
              src="https://images.unsplash.com/photo-1516826957135-700dedea698c"
              alt="fashion"
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </div>

          <div style={{ flex: "1", display: "flex", alignItems: "center" }}>
            <div>
              <h3>Our Mission</h3>
              <p style={{ color: "#555", lineHeight: "1.7" }}>
                Our mission is to deliver high-quality fashion that boosts
                confidence and reflects personality. We believe fashion
                should be accessible to everyone.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div style={{ display: "flex", flexWrap: "wrap", marginTop: "40px", gap: "20px" }}>
          
          <div style={{ flex: "1", display: "flex", alignItems: "center" }}>
            <div>
              <h3>Why Choose Us?</h3>
              <ul style={{ color: "#555", lineHeight: "1.8" }}>
                <li>✔ Premium Quality Fabric</li>
                <li>✔ Latest Fashion Trends</li>
                <li>✔ Affordable Pricing</li>
                <li>✔ Fast Delivery</li>
              </ul>
            </div>
          </div>

          <div style={{ flex: "1" }}>
            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b"
              alt="clothes"
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
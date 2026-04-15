import React from 'react'
import Product from './Product'
import { useState,useEffect } from 'react';
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import Homeshop from './users/homeshop';

const Home = () => {
 let [product ,setproduct]= useState([]);
useEffect(()=>{
    axios
   .get(`${import.meta.env.VITE_Api_url}/product`,{Headers :{Authorization :localStorage.getItem("access_user")}})
   .then(response=>{ 
      setproduct(response.data.result)
   })
},[])
  return (
   <>
    <section className="slider_section ">
            <div className="slider_bg_box">
               {/* <img src="images/slider-bg.jpg" alt=""/> */}
               <img src="images/slider.png" alt=""/>
            </div>
            <div id="customCarousel1" className="carousel slide" data-ride="carousel">   
               <div className="carousel-inner">
                  <div className="carousel-item active">
                     <div className="container ">
                        <div className="row">
                           <div className="col-md-7 col-lg-6 ">
                              <div className="detail-box">
                                 <h1>
                                    <span>
                                    Sale 20% Off
                                    </span>
                                    <br/>
                                    On Everything
                                 </h1>
                                 <p>
                                    Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto delectus repellat modi impedit sequi.
                                 </p>
                                 <div className="btn-box">
                                    <a href="" className="btn">
                                    Shop Now
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  
                  <div className="carousel-item ">
                     <div className="container ">
                        <div className="row">
                           <div className="col-md-7 col-lg-6 ">
                              <div className="detail-box">
                                 <h1>
                                    <span>
                                    {/* Sale 30% Off */}
                                    </span>
                                    <br/>
                                    {/* On Everything */}
                                 </h1>
                                 <p>
                                    {/* Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi. */}
                                 </p>
                                 <div className="btn-box">
                                    <a href="" className="btn1">
                                    Shop Now
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <div className="container ">
                        <div className="row">
                           <div className="col-md-7 col-lg-6 ">
                              <div className="detail-box">
                                 <h1>
                                    <span>
                                    {/* Sale 40% Off */}
                                    </span>
                                    <br/>
                                    {/* On Everything */}
                                 </h1>
                                 <p>
                                    {/* Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi. */}
                                 </p>
                                 <div className="btn-box">
                                    <a href="" className="btn1">
                                    Shop Now
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="container">
                  <ol className="carousel-indicators">
                     <li data-target="#customCarousel1" data-slide-to="0" className="active"></li>
                     <li data-target="#customCarousel1" data-slide-to="1"></li>
                     <li data-target="#customCarousel1" data-slide-to="2"></li>
                  </ol>
               </div>
            </div>
         </section>

             <section className="product_section layout_padding">
         <div className="container-fluid">
            <div className='row'>

               <div className="heading_container heading_center">
            <div className="d-flex justify-content-between align-items-center my-5 ">
            <h2>Product</h2>
            <NavLink  to="/all-products" className="text-decoration-none" style={{marginLeft:"320px"}}>
               View All
            </NavLink>
            </div>
            </div>
         
            </div>

              <section className="product_section layout_padding p-5 justify-content-center">
                  <div className='row '>
                     {
                        product.map(item=>{
                           return(
                              <Product item={item}/>  
                           )
                        })
                     }
                     </div>            
               </section>
              
                 
         </div>
      </section> 
      <br/>
 
   </>
  )
}
export default Home

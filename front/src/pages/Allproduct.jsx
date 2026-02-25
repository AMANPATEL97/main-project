import React from 'react'
import "./Allproduct.css"
import Product from './Product';
import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios'
// import {Api_url  } from '../config/API'
const Allproduct = () => {

  let [product,setproduct]=useState([]);

  useEffect(()=>{
    axios
    .get(`${import.meta.env.VITE_Api_url}/product`)
    .then(response=>{
        setproduct(response.data.result)
    })
  })

  return (
    <>
    <div className='container'>
        <div className='row'>
            <div className='col-md-3 '>
              <div className='card  bg-dark text-light' >
                <div className='card-header'>
                    <h5>FILTER</h5>
                </div>
               <div className='card-body'>
                <h5 className='text-light'>categories</h5>
                <ul className='nav'>
                    <li className='nav-item'>
                        <a className='nav-link'>formal shirt</a>
                    </li>
                        <li className='nav-item'>
                        <a className='nav-link'>formal shirt</a>
                    </li>
                      <li className='nav-item'>
                        <a className='nav-link'>formal shirt</a>
                    </li>
                </ul>
                <div className='saperator'>
                    
                </div>
               
                  <br/>
                   <br/>
                 <h5 className='text-light'>price</h5>
                   <br/>
                 <div className='saperator'></div>
               <br/>
                  <br/>
                 <h5 className='text-light'>color</h5>
                 <span className='color red'></span>
                  <span className='color blue'></span>
                   <span className='color green'></span>
                    <span className='color yellow'></span>
                     <span className='color white'></span>
                      <span className='color black'></span>
                   <br/>
                     <div className='saperator'></div>
               <br/>
               <h5 className='text-light'>Discount</h5>
               <select style={{width:'180px'}} className='from-control'>
              <option>select</option>
              <option>10% and more</option>
              <option>20% and more</option>
              <option>30% and more</option>
              <option>40% and more</option>
              <option>50% and more</option>
              
               <br/>
               </select>
               <br/>
                   <div className='saperator'></div>
                 <br/>
               <h5 className='text-light'>Size</h5>
               <select style={{width:'180px'}} className='from-control'>
              <option>ALL</option>
              <option>S</option>
              <option>L</option>
              <option>M</option>
              <option>XL</option>
              <option>XXl</option>
              
               <br/>
               </select>
                   <br/>
               </div>
              </div>
            </div>
            <div className='col-md-9 '>
                <h4>ALL PRODUCT</h4>
              <section class="product_section layout_padding">
                <div className="row mt-3">
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
        </div>
    </div>
    </>
  )
}

export default Allproduct
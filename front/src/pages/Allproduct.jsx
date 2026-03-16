
import React, { useEffect, useState } from 'react'
import 'react-range-slider-input/dist/style.css';
import RangeSlider from 'react-range-slider-input';
import axios from 'axios'
import "./Allproduct.css"
import Product from './Product'
import {useSearchParams } from 'react-router-dom';
const Allproduct = () => {

    

    const [price, setPrice] = useState([100, 10000]);
    const [dprice, setDPrice] = useState([100, 10000]);
    let [searchParam, setSearchParam] = useSearchParams();
    let [product, setProduct] = useState([]);
    let [showLoading, setShowLoading] = useState(false);
    let [allCate, setAllCate] = useState([])
     let [filteredLable, setFilteredLable] = useState([]);


    useEffect(() => {
        let currUrlObj = Object.fromEntries(searchParam.entries())
        if (currUrlObj.min && currUrlObj.max) {
            let x = currUrlObj.min;
            let y = currUrlObj.max;
            setPrice([x, y])
        }
        getFilteredProduct();
    }, [])

    useEffect(() => {

        axios
            .get(import.meta.env.VITE_Api_url + "/category/subcate")
            .then(response => {
                console.log(response.data.result)
                setAllCate(response.data.result);
            })
    }, [])

    let getFilteredProduct = (obj = {}) => {
        let currUrlObj = Object.fromEntries(searchParam.entries())
        let newUrlObj = { ...currUrlObj, ...obj };
          let arr = [];
        for(let x in newUrlObj){
            let a = <button className='btn btn-sm m-1 btn-secondary'>{newUrlObj[x]}<i className='fa fa-close'></i> </button>
            arr.push(a)
            
        }
        
        setFilteredLable(arr);
        let query = new URLSearchParams(newUrlObj).toString();
        axios
            .get(`${import.meta.env.VITE_Api_url}/filter?${query}`)
            .then(response => {
                setProduct(response.data.result);
            })

    }


    let getProductByColor = (value) => {
        let obj = { color: value }
        updateFilteredUrl(obj)
    }
    let getProductBySize = (value) => {
        let obj = { size: value }
        updateFilteredUrl(obj)

    }
    let getProductByDiscount = (value) => {
        let obj = { discount: value }
        updateFilteredUrl(obj)

    }
    let getProductByPrice = () => {
        let obj = { min: price[0], max: price[1] };
        updateFilteredUrl(obj);
    }
    let getProductByCategory = (title)=>{
        let obj = { category : title }
        updateFilteredUrl(obj);
    }
    let getProductBySubCategory=(cate, subcate)=>{
        let obj = {category : cate, subcategory : subcate}
        updateFilteredUrl(obj);
    }

      let getProductByBrand = (brand)=>{
        let obj = {brand : brand}
        updateFilteredUrl(obj);
    }

    let updateFilteredUrl = (obj) => {
        let currUrlObj = Object.fromEntries(searchParam.entries())
        let newUrlObj = { ...currUrlObj, ...obj };
        setSearchParam(newUrlObj)
        getFilteredProduct(obj);


    }
    return (
        <>

            {
                showLoading
                    ?
                    <div className='overlay'>
                        <i class="fa fa-hourglass-half" aria-hidden="true"></i>
                        <img src='/images/loading.gif' />
                        
                        
                    </div>
                    :
                    ''
            }
            <section className="product_section layout_padding">
                <div className="container my-5" style={{ minHeight: "600px" }}>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card bg-dark">
                                <div className="card-header">
                                    <h4 className='text-light'>Filters</h4>
                                </div>
                                <div className="card-body">
                                    <h5 className='text-light'>Categories</h5>
                                    
                                    <div class="accordion" id="accordionExample">
                                        {
                                            allCate.map((item, index)=>{

                                                return(
                                                    <div class="card border-0">
                                                    <div class="card-header bg-dark m-0 p-0" id="headingOne">
                                                        <h5 class="mb-0">
                                                            <button onClick={()=>getProductByCategory(item.category.name)} class="btn btn-link text-light m-0 py-1 px-4" type="button" data-toggle="collapse" data-target={"#collapse"+index} aria-expanded="true" aria-controls="collapseOne">
                                                                {item.category ? item.category.name : ''}&nbsp;&nbsp;&nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i>
                                                            </button>
                                                        </h5>
                                                    </div>

                                                    <div id={"collapse"+index} class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                        <div class="card-body bg-dark">
                                                            {
                                                               item.info && item.info.map((item2, index2)=>{
                                                                return(
                                                                       <button onClick={()=>getProductBySubCategory(item.category.name, item2.name)} style={{fontSize : 14}} className='btn btn-link text-light'>{item2.name}</button> 
                                                                )
                                                               })
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                                )
                                            })
                                        }
                                        

                                    </div>
                                      <div className='saperator'></div>
                                      <h5 className='text-light'>Brand</h5>
                                    <div className='d-flex flex-column align-items-start'>
                                      <button onClick={()=>getProductByBrand('Addidas')} className='btn btn-link text-light'>Addidas</button>
                                    <button onClick={()=>getProductByBrand('Nike')} className='btn btn-link text-light'>Nike</button>
                                    <button className='btn btn-link text-light' onClick={()=>getProductByBrand('Red Tape')}>Red Tape</button>
                                    <button className='btn btn-link text-light' onClick={()=>getProductByBrand('Campus')}>Campus</button>
                                    <button className='btn btn-link text-light' onClick={()=>getProductByBrand('Action')}>Action</button>
                                    <button className='btn btn-link text-light' onClick={()=>getProductByBrand('Bata')}>Bata</button>
                                    <button className='btn btn-link text-light' onClick={()=>getProductByBrand('Woodland')}>Woodland</button>
                                    <button className='btn btn-link text-light' onClick={()=>getProductByBrand('Other')}>Other</button>
                                     </div>






                                <button className='btn btn-link text-light'></button>
                                    <div className='saperator'></div>
                                    <br />
                                    <h5 className='text-light'>Price</h5>
                                    <br />
                                    <RangeSlider min={50} step={50} max={10000} onThumbDragEnd={getProductByPrice} value={price} onInput={(e) => setPrice(e)} />
                                    <br />
                                    <div className='d-flex justify-content-between'>
                                        <p className='text-light'>{price[0]}</p>
                                        <p className='text-light'>{price[1]}</p>

                                    </div>
                                    <br />
                                    <div className='saperator'></div>
                                    <br />
                                    <h5 className='text-light'>Color</h5>
                                    <span onClick={() => getProductByColor('Red')} className='color red'></span>
                                    <span onClick={() => getProductByColor('Black')} className='color black'></span>
                                    <span onClick={() => getProductByColor('White')} className='color white'></span>
                                    <span onClick={() => getProductByColor('Yellow')} className='color yellow'></span>
                                    <span onClick={() => getProductByColor('Blue')} className='color blue'></span>
                                    <span onClick={() => getProductByColor('Brown')} className='color brown'></span>
                                    <span onClick={() => getProductByColor('Green')} className='color green'></span>
                                    <br />
                                    <div className='saperator'></div>
                                    <br />
                                    <h5 className='text-light'>Discount</h5>
                                    <select onChange={(e) => getProductByDiscount(e.target.value)} className='form-control'>
                                        <option>Select</option>
                                        <option value="10">10% and More</option>
                                        <option value="20">20% and More</option>
                                        <option value="30">30% and More</option>
                                        <option value="40">40% and More</option>
                                        <option value="50">50% and More</option>

                                    </select>
                                    <br />
                                    <div className='saperator'></div>
                                    <br />
                                    <h5 className='text-light'>Size</h5>
                                    <select onChange={(e) => getProductBySize(e.target.value)} className='form-control'>
                                        <option>All</option>
                                        <option>S</option>
                                        <option>M</option>
                                        <option>L</option>
                                        <option>XL</option>
                                        <option>XXL</option>


                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <h3>All Products</h3>
                             {
                                filteredLable
                            }
                            

                            <div className="row">
                                {
                                    product.map(item => {
                                        return (
                                            <Product key={item._id} item={item} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Allproduct









// import React from 'react'
// import "./Allproduct.css"
// import Product from './Product';
// import { useState } from 'react'
// import { useEffect } from 'react';
// import axios from 'axios'
// import { useSearchParams } from 'react-router-dom';
// // import {Api_url  } from '../config/API'
// const Allproduct = () => {
// let [searchparam,setsearchparam]= useSearchParams();
//   let [product,setproduct]=useState([]);
//   let [showLoading, setShowLoading] = useState(false);
//   useEffect(()=>{
//     axios
//     .get(`${import.meta.env.VITE_Api_url}/product`)
//     .then(response=>{
//         setproduct(response.data.result)
//     })
//   })


// // useEffect(()=>{
// //    getFilteredproduct();
// // },[])
//    useEffect(() => {
      
//       axios
//          .get(import.meta.env.VITE_Api_url + "/category/subcate")
//          .then(response => {
//             // console.log(response.data.result)
//             setAllCate(response.data.result);
//          })
//    }, [])

//    let getFilteredproduct=(obj)=>{
//     let currurlobj= Object.fromEntries(searchparam.entries())
//    let newurlObj = {...currurlobj,...obj}
//   let query= new URLSearchParams(newurlObj).toString();

//     axios.get(`${import.meta.env.VITE_Api_url}/filter?${query}`)
//     .then(response=>{
//         setproduct(response.data.result)
//     })
//    }
  


// //    


// let getProductByDiscount =(value)=>{
//     let obj= {discount : value}
//     getFilteredproductNew(obj)
// }
// let getProductBysize =(value)=>{
//    let obj= {size : value}
//    getFilteredproductNew(obj)
// }

// let getProductByColor =(value)=>{
//    let obj= {color : value}
//    getFilteredproductNew(obj)
// }

// let getFilteredproductNew =(obj)=>{
//    let currurlobj= Object.fromEntries(searchparam.entries())
//    let newurlObj = {...currurlobj,...obj}
//    setsearchparam(newurlObj)
//     getFilteredproduct();
// }

//   return (
//     <>
//      {
//         showLoading
//         ?
//     <div className='overlay'>
//         <img src='/images/loading.gif' />
//     </div>
//     :
//     ''
//      }
//     <div className='container'>
//         <div className='row'>
//             <div className='col-md-3 '>
//               <div className='card  bg-dark text-light' >
//                 <div className='card-header'>
//                     <h5>FILTER</h5>
//                 </div>
//                <div className='card-body'>
//                 <h5 className='text-light'>categories</h5>
//                 <ul className='nav'>
//                     {/* <li className='nav-item'>
//                         <a className='nav-link'>formal shirt</a>
//                     </li>
//                         <li className='nav-item'>
//                         <a className='nav-link'>formal shirt</a>
//                     </li>
//                       <li className='nav-item'>
//                         <a className='nav-link'>formal shirt</a>
//                     </li> */}
//                 </ul>
//                 <div className='saperator'>
                    
//                 </div>
               
//                   <br/>
//                    <br/>
//                  <h5 className='text-light'>price</h5>
//                    <br/>
//                  <div className='saperator'></div>
//                <br/>
//                   <br/>
//                  <h5 className='text-light'>color</h5>
//                         <span onClick={()=>getProductByColor('Red')} className='color red'></span>
//                         <span onClick={()=>getProductByColor('Black')} className='color black'></span>
//                         <span onClick={()=>getProductByColor('White')} className='color white'></span>
//                         <span onClick={()=>getProductByColor('Yellow')} className='color yellow'></span>
//                         <span onClick={()=>getProductByColor('Blue')} className='color blue'></span>
//                         <span onClick={()=>getProductByColor('Green')} className='color green'></span>
//                    <br/>
//                      <div className='saperator'></div>
//                <br/>
//                <h5 className='text-light'>Discount</h5>
//                <select onClick={(e)=>getProductByDiscount(e.target.value)} style={{width:'180px'}} className='from-control'>
//               <option>select</option>
//               <option value="10">10% and more</option>
//               <option value="20">20% and more</option>
//               <option value="30">30% and more</option>
//               <option value="40">40% and more</option>
//               <option value="50">50% and more</option>
              
//                <br/>
//                </select>
//                <br/>
//                    <div className='saperator'></div>
//                  <br/>
//                <h5 className='text-light'>Size</h5>
//                <select onChange={(e)=>getProductBysize(e.target.value)} style={{width:'180px'}} className='from-control'>
//               <option>ALL</option>
//               <option>S</option>
//               <option>L</option>
//               <option>M</option>
//               <option>XL</option>
//               <option>XXl</option>
              
//                <br/>
//                </select>
//                    <br/>
//                </div>
//               </div>
//             </div>
//             <div className='col-md-9 '>
//                 <h4>ALL PRODUCT</h4>
//               <section class="product_section layout_padding">
//                 <div className="row mt-3">
//                      {
//                         product.map(item=>{
//                               return(
//                               <Product item={item}/>

//                            )
//                         })
//                      }
//                      </div>
//                      </section>
//             </div>
//         </div>
//     </div>
//     </>
//   )
// }

// export default Allproduct

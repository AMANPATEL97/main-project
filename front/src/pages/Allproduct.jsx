
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

    let removeFilteredlabe=(value)=>{
        // console.log(value)
        // console.log(filteredLable)
        let [...arr] = filteredLable;
        let newarr = arr.filter(item=>item.lableName != value);
        setFilteredLable(newarr);
        let currUrlObj = Object.fromEntries(searchParam.entries())
        console.log(currUrlObj)
        let {[value]:temp, ...newUrlObj} = currUrlObj;
        setSearchParam(newUrlObj)
        getFilteredProduct(); 
    }

    let getFilteredProduct = (obj = {}) => {
         let currUrlObj = Object.fromEntries(searchParam.entries())
        let newUrlObj = { ...currUrlObj, ...obj };
        let arr = [];
        for (let x in newUrlObj ){
            let a={labelname : x,labelvalue: newUrlObj[x]}
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
                        <img src='/images/loading.gif.gif' />
                        {/* <img src='/front/public/images/loading.gif.gif' /> */}
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
                                      <button onClick={()=>getProductByBrand('Regular')} className='btn btn-link text-light'>Regular</button>
                                    <button onClick={()=>getProductByBrand('daily dress')} className='btn btn-link text-light'>daily dress</button>
                                    <button className='btn btn-link text-light' onClick={()=>getProductByBrand('normal dress')}>normal dress</button>
                                    <button className='btn btn-link text-light' onClick={()=>getProductByBrand('formal dress')}>formal dress</button>
                                    <button className='btn btn-link text-light' onClick={()=>getProductByBrand('fashion dress')}>fashion dress</button>
                                    <button className='btn btn-link text-light' onClick={()=>getProductByBrand('Winter cost')}>Winter cost</button>
                                    <button className='btn btn-link text-light' onClick={()=>getProductByBrand('Rain cost')}>Rain cost</button>
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
                                filteredLable.map(item=><button  onClick={()=>removeFilteredlabe(item.labelname)} className='btn btn-sm m-1 btn-secondary'>{item.labelname}-{item.labelvalue}<i className='fa fa-close'></i> </button>)
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

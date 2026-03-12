
import React, { useEffect, useState } from 'react'
import {useFormik} from 'formik'
import axios from 'axios'
import {APi_URl} from '../../config/API'
import {useNavigate, useParams} from 'react-router-dom'

const AddProducts = () => {
  let [ShowOtherInput,setShowOtherInput] = useState(false);
  let param=useParams();
  let navigate = useNavigate();
  let [allCate, setAllCate] = useState([])
  let [allSubCate, setAllSubCate] = useState([]);
  let [pro,setpro]=useState({
    price:"",
    categoryId:"",
    subcategoryId:"",
    brand:"",
    quantity:"",
    costprice:"",
    discount:"",
    color:"",
    size:"",
    detail:""
  });

  useEffect(()=>{
    if(param.id){
      axios
      .get(`${import.meta.env.VITE_APi_URl}/product/edit/${param.id}`)
      .then(response=>{
      //  console.log(response.data)
      setpro(response.data.result);
      getSubCateById(response.data.result.categoryId)
})

    }

  },[])

  useEffect(()=>{
    axios
    .get(`${import.meta.env.VITE_APi_URl}/category`)
    // .get(`${API_URL}/category`)
    .then(response=>{
      // console.log(response.data.result)
      setAllCate(response.data.result);
      
    })
  },[]) 

  let ProFrm = useFormik({
    enableReinitialize:true,
    initialValues : pro,
    
    
    onSubmit : (formData)=>{
   if(param.id){
 axios
     .put(`${import.meta.env.VITE_APi_URl}/product/${param.id} `, formData, {headers : {Authorization : localStorage.getItem("sseccanimda")}})
     .then(response=>{
       navigate("/product/list")
      })
   }else{

     axios
     .post(`${import.meta.env.VITE_APi_URl}/product`, formData, {headers : {Authorization : localStorage.getItem("sseccanimda")}})
     .then(response=>{
       navigate("/product/list")
      })
    }
    }
  })

  let getSubCateById = (cid)=>{
    // console.log(e.target.value)
    // let cid = e.target.value; 
    axios
    .get(`${import.meta.env.VITE_APi_URl}/subcategory/getsubcatebycateid/${cid}`)
    .then(response=>{
      // console.log(response.data)
      setAllSubCate(response.data.result);
    })
  }
  let handlechange=(e)=>{
    console.log(e.target.value)
  }


  return (
    <div className="main-panel">
          <div className="content-wrapper pb-0">
            <form onSubmit={ProFrm.handleSubmit}>
            <div className="page-header flex-wrap">
              <div className="col-md-12 col-lg-12 col-sm-12 stretch-card grid-margin">
                <div className="card">
                    <div className="card-header">
                        <h4>Add New Product</h4>
                    </div>
                    <div className="card-body">
                      <div className="my-4">
                        <label htmlFor="">Product Title</label>
                        <input  value={ProFrm.values.title} name='title' onChange={ProFrm.handleChange} type='text' className={'form-control'} />
                      </div>
                      <div className="my-4">
                        <label htmlFor="">Product Cost Price</label>
                        <input value={ProFrm.values.costprice} name='costprice' onChange={ProFrm.handleChange} type='text' className={'form-control'} />
                      </div>
                      <div className="my-4">
                        <label htmlFor="">Product Selling Price (M.R.P.)</label>
                        <input value={ProFrm.values.price} name='price' onChange={ProFrm.handleChange} type='text' className={'form-control'} />
                      </div>
                        <div className="my-4">
                        <label htmlFor="">Discount(%)</label>
                        <input value={ProFrm.values.discount} name='discount' onChange={ProFrm.handleChange} type='text' className={'form-control'} />
                      </div>
                      <div className="my-4">
                        <label htmlFor="">Category</label>
                        <select value={ProFrm.values.categoryId} className='form-control' name='categoryId' onChange={(e)=>{ProFrm.handleChange(e); getSubCateById(e.target.value)}}>
                          <option>Select</option>
                          {
                            allCate.map(item=><option value={item._id}>{item.name}</option>)
                          }
                        </select>
                      </div>
                      <div className="my-4">
                        <label htmlFor="">Sub-Category</label>
                        <select value={ProFrm.values.subcategoryId} className='form-control' name='subcategoryId' onChange={ProFrm.handleChange}>
                          <option>Select</option>
                          {
                            allSubCate.map(item=><option value={item._id}>{item.name}</option>)
                          }
                        </select>
                      </div>
                      <div className="my-4">
                        <label>Brand/Company</label>
                        {/* <input value={ProFrm.values.brand} name='brand' onChange={ProFrm.handleChange} type='text' className={'form-control'} /> */}
                      <select className={'form-control'} name='brand'value={ProFrm.values.brand} onChange={(e)=>handlechange(e)} >
                      <option value=''>select</option>
                      <option value='Addidas'>Addidas</option>
                      <option value='Nike'>Nike</option>
                      <option value='Red Tape'>Red Tape</option>
                      <option value='Campus'>Campus</option>
                      <option value='Action'>Action</option>
                      <option value='Bata'>Bata</option>
                      <option value='Woodland'>Woodland</option>
                      <option value='Other'>Other</option>
                      </select>
                      <br/>
                      {
                        ShowOtherInput
                        ?
                          <div >
                       
                        <input type='text' placeholder='Type Brand Name' className='form-control'></input>
                      </div>
                      :
                      ''
                      }
                     
                    
                      </div>
                      <div className="my-4">
                        <label htmlFor="">Size</label>
                        <select value={ProFrm.values.size} name='size' onChange={ProFrm.handleChange} className='form-control'>
                          <option>Select</option>
                          <option>S</option>
                          <option>M</option>
                          <option>L</option>
                          <option>XL</option>
                          <option>XXL</option>
                          <option>Free Size</option>
                        </select>
                      </div>
                      <div className="my-4">
                        <label htmlFor="">Color</label>
                        <select value={ProFrm.values.color} name='color' onChange={ProFrm.handleChange} className='form-control'>
                         <option>Select</option>
                          <option>White</option>
                          <option>Black</option>
                          <option>Red</option>
                          <option>Blue</option>
                          <option>Green</option>
                          <option>Brown</option>
                          <option>Yellow</option>
                        </select>
                      </div>
                      <div className="my-4">
                        <label htmlFor="">Quantity</label>
                        <input value={ProFrm.values.quantity} name='quantity' onChange={ProFrm.handleChange} type='text' className={'form-control'} />
                      </div>
                    
                      <div className="my-4">
                        <label htmlFor="">Detail</label>
                        <textarea value={ProFrm.values.detail} name='detail' onChange={ProFrm.handleChange} className={'form-control'} ></textarea>
                      </div>
                    </div>

                    <div className="card-footer">
                      <button type='submit' className='btn btn-success'>{param.id ? 'update' : 'Add'}</button>
                    </div>
                </div>
              </div>
            </div>
            </form>  
        </div>
    </div>
  )
}

export default AddProducts


import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useFormik } from 'formik';
import {useNavigate,useParams}   from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';

import categoryschema from '../../schema/categoryschema';
const Addcategory = () => {

  let param = useParams();
  let [cate,setcate]=useState({
     name:""
  })
   useEffect(()=>{
      if(param.id){
        axios.get(`${import.meta.env.VITE_Api_url}/category/${param.id}`, {headers:{Authorization : localStorage.getItem("sseccanimda")}})
        .then(response=>{
         
       setcate(response.data.result)
        })
      }
   },[])
    let Navgate=useNavigate();
        let showNotification = ()=>{
        toast("you are successfuly logged In.....")
      }
   let catefrm = useFormik({
    validationSchema:categoryschema,
    enableReinitialize:true,
    initialValues :cate,
     
    
    onSubmit:(formData)=>{
      if(param.id){
          axios.put(`${import.meta.env.VITE_Api_url}/category/${param.id}`,formData, {headers:{Authorization : localStorage.getItem("sseccanimda")}})
        .then(Response=>{
            console.log(Response.data)
            Navgate("/category/list")
            })
      }else{

      
        axios.post(import.meta.env.VITE_Api_url+"/category",formData, {headers:{Authorization : localStorage.getItem("sseccanimda")}})
        .then(Response=>{
            console.log(Response.data)
            Navgate("/category/list")
        })
      }
    }
   })
  return (
    <>
      <div class="container ">
        <div class="row ">             
            <div class="col-md-6 my-5">
             <form onSubmit={catefrm.handleSubmit}>
                <div class="card  my-5">
                    <div class="card-header bg-success">
                        <h4 class="mb-0">{param.id ? 'update' : 'Add new'}</h4>
                    </div>
                    <div class="card-body">
                      <div className='my-2'>
                        <label htmlFor=''>category Name</label>
                        <input  value={catefrm.values.name} name='name'  onChange={catefrm.handleChange} type='text' className={'form-control ' + (catefrm.errors.name && catefrm.touched.name ? 'is-invalid' : '') } />
                        {
                          catefrm.errors.name && catefrm.touched.name
                          ?
                          <small className='text-danger'>{catefrm.errors.name}</small>
                          :
                          ''
                        }
                      </div>
                    </div>
                    <div class="card-footer ">
                      <ToastContainer/>
                            <button onClick={showNotification} type="submit" class="btn btn-success rounded-pill ">{param.id ? 'update' : 'Add'}</button>
                   
                    </div>
                </div>
             </form>
            </div>
        </div>
    </div>
            
    
    </>
  )
}

export default Addcategory

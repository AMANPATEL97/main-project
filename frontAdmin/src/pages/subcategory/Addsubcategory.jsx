import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useFormik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import * as YUP from 'yup';

let subcateschema= YUP.object({
   name : YUP.string().required("Inset name"),
   
   
 })

const Addsubcategory = () => {
  let param = useParams();
      let navigate=useNavigate();
      let[allcate,setallcate]=useState([]);
      let [subcate,setsubcate]=useState({})
      useEffect(()=>{
          if(param.id){
            axios
            .get(`${import.meta.env.VITE_Api_url}/subcategory/${param.id}`, {headers:{Authorization : localStorage.getItem("sseccanimda")}})
            .then(response=>{
             
              setsubcate(response.data.result)
            })
          }
      },[])

      
          let showNotification = ()=>{
          toast("you are successfuly logged In.....")
        }

      useEffect(()=>{ 
        axios.get(`${import.meta.env.VITE_Api_url}/category`, {headers:{Authorization : localStorage.getItem("sseccanimda")}})
        .then(Response=>{
          setallcate(Response.data.result)
        })
      })

      let catefrm=useFormik({
        enableReinitialize:true,
        validationSchema :subcateschema,
        initialValues:subcate,
        
         onSubmit : (formData)=>{
          if(param.id){
             axios
            .put(`${import.meta.env.VITE_Api_url}/subcategory/${param.id}`,formData, {headers:{Authorization : localStorage.getItem("sseccanimda")}})
            .then(response=>{
              console.log(response.data)
              return;
              navigate("/subcategory/list")
             
            })
          
          }else{

            axios
            .post(`${import.meta.env.VITE_Api_url}/subcategory`,formData, {headers:{Authorization : localStorage.getItem("sseccanimda")}})
            .then(response=>{
              navigate("/subcategory/list")
              
            })
          }
        }
        })
  return (
   <>
   <div className="container ">
        <div className="row ">
            <div className="col-md-6 my-5">
                < div className="card  my-5">
                 <form onSubmit={catefrm.handleSubmit}>
                    <div className="card-header bg-success">
                        <h4 className="mb-0">{param.id ? "update" : "Add new"} sub-category</h4>
                    </div>
                    <div className="card-body">
                      <div className='my-2'>
                         <label for="cars">Category Add</label>
                        <select value={catefrm.values.categoryId} name='categoryId' onChange={catefrm.handleChange} className="form-select rounded-pill" aria-label="Default select example"style={{width:"100%", height:"20%"}}>
                        <option selected>Select</option>
                        {
                          allcate.map(item=>{
                            return(
                              <option value={item._id}>{item.name}</option>
                              
                            )
                          })
                        }
                        </select>
                            <br/>
                          <br/>
                        <label htmlFor=''>subcategory Name</label>
                       
                        <input value={catefrm.values.name} name='name'  onChange={catefrm.handleChange} type='text' className={'form-control ' + (catefrm.errors.name && catefrm.touched.name ? 'is-invalid' : '') }/>
                      
                      </div>
                    </div>
                    <div className="card-footer ">
                      <ToastContainer/>
                            <button  onClick={showNotification}  type="submit" className="btn btn-success  rounded-pill">{param.id ? 'update' : 'Add'}</button>
                    </div>
                 </form>
                </div>
             
            </div>
        </div>
        </div>             
   </>
  )
}

export default Addsubcategory

import React from 'react'
import { NavLink } from 'react-router-dom'
import updateschema from '../../Schema/updateschema'
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react'
import {ToastContainer,toast} from 'react-toastify'
import axios from 'axios'
import { useFormik } from 'formik';

const Editprofile = () => {
  let Navigate=useNavigate();
  let [user,setuser]=useState({})
  let [allcity,setallcity]=useState([])
  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_Api_url}/profile`,{headers:{Authorization:localStorage.getItem("access_user")}})
    .then(response=>{
        // console.log(response.data)
         setuser(response.data.result)
    })
  },[]) 
  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_Api_url}/city`,{headers:{Authorization:localStorage.getItem("access_user")}})
    .then(response=>{
        // console.log(response.data)
        setallcity(response.data)
    })
  },[])
  let showNotification = ()=>{
      toast("you are successfuly Edit In.....")
    }

   let updatefrm=useFormik({
    validationSchema:updateschema,
    initialValues:user,
    enableReinitialize:true,
    onSubmit:(FormData)=>{
        axios.put(`${import.meta.env.VITE_Api_url}/profile`,FormData,{headers:{Authorization:localStorage.getItem("access_user")}})
   .then(response=>{
      
        localStorage.setItem("name",FormData.name);
        Navigate("/myprofile")
   })
      }
   })
  return (
   <>
     <div className="col-md-8">
            <div className="alert alert-dark"style={{backgroundColor : "#a5d4e7ff"}}>
              <h4>update your profile Information</h4>
        <form onSubmit={updatefrm.handleSubmit}>
              <NavLink to="/myprofile">back</NavLink>
              <br />
         <div className='row'>
            <div className='col-md-4'>
                <div className='my-1'>
                <label>Full name</label>
                <br/>
                <input type='text' value={updatefrm.values.name} name='name'onChange={updatefrm.handleChange} className={'form-control '+(updatefrm.errors.name && updatefrm.touched.name ? 'is-invalid' : '')}></input>
               {
                              updatefrm.errors.name && updatefrm.touched.name
                              ?
                              <span className='text-danger'>{updatefrm.errors.name} </span>
                              :
                              ''
                            }
                </div>
                <div className='my-1'>
                <label>Email</label>
                <br/>
                <input type='text'  disabled  value={updatefrm.values.email} name='email'onChange={updatefrm.handleChange}className={'form-control '+(updatefrm.errors.email && updatefrm.touched.email ? 'is-invalid' : '')}></input>
                 {
                      updatefrm.errors.email && updatefrm.touched.email
                      ?
                     <span classemail='text-danger'>{updatefrm.errors.email} </span>
                      :  
                      ''
                        }
                </div>
             <br/>
                <div className='my-0'>
                <label>contact</label>
                <br/>
                <input type='text' value={updatefrm.values.contact} name='contact'onChange={updatefrm.handleChange} className={'form-control '+(updatefrm.errors.contact && updatefrm.touched.contact ? 'is-invalid' : '')}></input>
               {
                              updatefrm.errors.contact && updatefrm.touched.contact
                              ?
                              <span classcontact='text-danger'>{updatefrm.errors.contact} </span>
                              :
                              ''
                            }
                </div>
                <br/>
                <div className='my-0'>
                <label>Address</label>
                <br/>
              <textarea value={updatefrm.values.address} name='address'onChange={updatefrm.handleChange} className={'form-control '+(updatefrm.errors.address && updatefrm.touched.address ? 'is-invalid' : '')}></textarea>
                {
                              updatefrm.errors.address && updatefrm.touched.address
                              ?
                              <span classaddress='text-danger'>{updatefrm.errors.address} </span>
                              :
                              ''
                            }
                </div>
                <br/>
                <div className='my-0'>
                <label>GENDER</label>
                <br/>
               male<input type='radio' checked={updatefrm.values.gender=="male"} onChange={updatefrm.handleChange} name='gender' value={'male'}></input>
            
               female<input type='radio'  checked={updatefrm.values.gender=="female"}  onChange={updatefrm.handleChange} value={'female'}></input>
              
                               
                </div>
                <div className='my-0'>
                <label>city</label>
                <br/>
             <select  value={updatefrm.values.city}  name ='city' onChange={updatefrm.handleChange} style={{width:"150% ",height:"100%"}}className={'form-control '+(updatefrm.errors.city && updatefrm.touched.city ? 'is-invalid' : '')}>
                <option >select</option>
                {
                    allcity.map(item=><option>{item.name}</option>)
                }
             </select>
              {
                               updatefrm.errors.city && updatefrm.touched.city
                               ?
                               <span className='text-danger'>{updatefrm.errors.city}</span>
                               :
                               ''
                              }  
                </div>
       <br/>
       <ToastContainer/>
      <button type='submit' onClick={showNotification} className='btn btn-success'>update</button>

            </div>
            
         </div>
              </form>
              </div>
              </div>
   </>
  )
}

export default Editprofile ;


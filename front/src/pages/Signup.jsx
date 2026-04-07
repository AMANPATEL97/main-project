import React, { useEffect, useState} from 'react'
import axios from 'axios';
import { ToastContainer,toast } from 'react-toastify';
import { useFormik} from 'formik';
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import * as YUP from 'yup';

let SignupSchema= YUP.object({
   name : YUP.string().required("Inset name"),
   email: YUP.string().required("Insert your email"),
   password: YUP.string().required("Insert your password"),
   repassword: YUP.string().oneOf([YUP.ref("password")], "Password and Re-Password Should be same").required("Insert Re-Password"),
   city: YUP.string().required("Insert your city"),
   address: YUP.string().required("Insert your address"),
   contact: YUP.number().typeError("Only Number are accepted").min(1000000000, "Number Not Less Then 10").max(9999999999, "Number not more then 10").required("Insert Contact Number"),
   gender: YUP.string().required("Insert your gender")
 })
const Signup = () => {
let navigate = useNavigate();
          let [allcity,setcity]=useState([]);
         
    let showNotification = ()=>{
    toast("you are successfuly logged In.....")
  }  
         useEffect(()=>{
            console.log(import.meta.env.VITE_Api_url+"/city")
            axios.get(import.meta.env.VITE_Api_url+"/city")
      .then(response=>{
         console.log("**************",response.data)
         setcity(response.data)
      })
         },[])
   let signupfrm = useFormik({
      validationSchema : SignupSchema,
      initialValues: {
          name:"",
          email:"",
          password:"",
          city:"",
          address:"",
          gender:"",
          contact:"",
          repassword: ""
      },
      onSubmit: (formData)=>{
         axios
         .post(import.meta.env.VITE_Api_url+'/user',formData,{Headers :{Authorization :localStorage.getItem("access_user")}})
         .then(response=>{
            // console.log(response.data)
            navigate("/Login");
         })
      }
   })
  return (
   <>
   <section class="subscribe_section">
         <div class="container-fuild">
            <div class="box">
               <div class="row">
                  <div class="col-md-6 offset-md-3">
                     <div class="subscribe_form ">
                        <div class="heading_container heading_center">
                           <h3> User Regsition</h3>
                            <small className='text-light'> <NavLink className="text-orange" to="/Login">click here</NavLink></small>
                        </div>
                        <form  onSubmit={signupfrm.handleSubmit}>
                       
                          <input type='text'  name='name' onChange={signupfrm.handleChange} className={'form-control '+(signupfrm.errors.name && signupfrm.touched.name ? 'is-invalid' : '')}  placeholder='Enter Your Name'/>
                            {
                              signupfrm.errors.name && signupfrm.touched.name
                              ?
                              <span className='text-danger'>{signupfrm.errors.name} </span>
                              :
                              ''
                            }
 
                            <input type='text'  name='email' onChange={signupfrm.handleChange} className={'form-control '+(signupfrm.errors.email && signupfrm.touched.email ? 'is-invalid' : '')}  placeholder='Enter  your email'/>
                            {
                              signupfrm.errors.email && signupfrm.touched.email
                              ?
                              <span className='text-danger'>{signupfrm.errors.email}</span>
                              :
                              ''
                            }

                             <input type='text'  name='contact' onChange={signupfrm.handleChange} className={'form-control '+(signupfrm.errors.contact && signupfrm.touched.contact ? 'is-invalid' : '')}  placeholder='Enter  your contact'/>
                            {
                              signupfrm.errors.contact && signupfrm.touched.contact
                              ?
                              <span className='text-danger'>{signupfrm.errors.contact}</span>
                              :
                              ''
                            }
                             <input type='address'  name='address' onChange={signupfrm.handleChange}className={'form-control '+(signupfrm.errors.address && signupfrm.touched.address ? 'is-invalid' : '')} placeholder='Enter  your address'/>
                            {
                              signupfrm.errors.address && signupfrm.touched.address
                              ?
                              <span className='text-danger'>{signupfrm.errors.address}</span>
                              :
                              ''
                            }
                             <input type='password'  name='password' onChange={signupfrm.handleChange} className={'form-control '+(signupfrm.errors.password && signupfrm.touched.password ? 'is-invalid' : '')} placeholder='Enter  your password'></input>
                                <div className='input-group-append'>
                            {
                               signupfrm.errors.password && signupfrm.touched.password
                               ?
                               <span className='text-danger'>{signupfrm.errors.password}</span>
                               :
                               ''
                              }
                              </div>
                                  
                             <input type='text'  name='repassword' onChange={signupfrm.handleChange}
                             className={'form-control '+(signupfrm.errors.repassword && signupfrm.touched.repassword ? 'is-invalid' : '')} placeholder='Enter  your repassword'/> 
                            {
                               signupfrm.errors.repassword && signupfrm.touched.repassword
                               ?
                               <span className='text-danger'>{signupfrm.errors.repassword}</span>
                               :
                               ''
                              }
                           <select  name='gender' onChange={signupfrm.handleChange} className="form-select form-control rounded-pill">
                            <option value=''>Select Gender</option>  
                            <option value="male">male</option>
                           <option value="female">female</option>
                              
                                    </select><br></br>
                                 {
                               signupfrm.errors.gender && signupfrm.touched.gender
                               ?
                               <span className='text-danger'>{signupfrm.errors.gender}</span>
                               :
                               ''
                              }   
                                     <select name='city' onChange={signupfrm.handleChange} className={'form-control rounded-pill'+(signupfrm.errors.city && signupfrm.touched.city ? 'is-invalid' : '')} >
                                <option>Select City</option>
                                {
                                   allcity.map(item=>{
                                        return(
                                            <option>{item.name}</option>
                                        )
                                    })
                                }
                            </select>

                            {
                               signupfrm.errors.city && signupfrm.touched.city
                               ?
                               <span className='text-danger'>{signupfrm.errors.city}</span>
                               :
                               ''
                              }   
                              <ToastContainer/>
                              
                          <button onClick={showNotification} type='submit' className='btn btn-info'>Regsition</button>
                          
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   </>
  )
}

export default Signup



import { useState,useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import * as YUP from 'yup';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
// import { Api_url } from '../config/api';
import axios from 'axios';
import {ToastContainer,toast} from 'react-toastify'
import AuthContext from '../context/AuthContext'

let loginSchema= YUP.object({
   email : YUP.string().email("email id incorrect").required("insert your email"),
   password: YUP.string().required("insert your password")
})
   const Login = () => { 
    let logged = useContext(AuthContext);
   let navigate = useNavigate();
   let [errmsg,seterrmsg]=useState("");

  let showNotification = ()=>{
    toast("you are successfuly logged In.....")
  }
  let loginfrm= useFormik({
    validationSchema :loginSchema,
    initialValues:{
      email:"",
      password:""
    },  
    onSubmit:(formdata)=>{
     console.log(formdata)
     
     axios.post(`${import.meta.env.VITE_Api_url}/auth`,formdata)
     .then(Response=>{
        

      if(Response.data.success==true){
      
       
       localStorage.setItem("name",Response.data.name);
       localStorage.setItem("access_user",Response.data.token);
        logged[1](true)
      toast("you are successful logged In..")
      navigate("/myprofile");
      }
      
      // }
      else{
        if(Response.data.errtype==1){
          seterrmsg("This email id  and password is incorrect")
        }if(Response.data.errtype==2){
          seterrmsg("This password is incorrect")
          
        }
        if(Response.data.errtype==3){
          seterrmsg("you are dective now, please contact your team")
        }
      }
    })
    }
  })
  
  return (
    <>
    
      <div className="container my-5">
        <div className="row">
            <div className="col-md-6 mt-3 offset-md-3">
                <form onSubmit={loginfrm.handleSubmit}>
                <div className="card mt-5 border border-dark">
                 <div className="card-header bg-blue">
                  <h4 className='text-dark'>User Login</h4>
                   <small className='text-light'><NavLink to="/singup" className="text-orange">click here</NavLink></small>
                </div>
                 <div className="card-body">
                        <div className='my-4'>
                            <label>Username/Email</label>
                           <input type='text'  name='email' onChange={loginfrm.handleChange}  className={'form-control rounded-pill'+(loginfrm.errors.email && loginfrm.touched.email ? 'is-invalid' : '')} placeholder='email' />
                             {
                              loginfrm.errors.email && loginfrm.touched.email
                              ?
                              <span className='text-danger'>{loginfrm.errors.email} </span>
                              :
                              ''
                            }  
                       
                        </div>  
                             
                        <div className='my-4'>
                            <label>password</label>
                            <input type='text'  name='password' onChange={loginfrm.handleChange}  className={'form-control rounded-pill '+(loginfrm.errors.password && loginfrm.touched.password ? 'is-invalid' : '')} placeholder='password' />
                             {
                               
                               loginfrm.errors.password && loginfrm.touched.password
                               ?
                               <span className='text-danger'>{loginfrm.errors.password} </span>
                               :
                               ''
                              }    
                              </div> 
                          <p className='text-danger'>{errmsg}</p>   
                        </div>
                        <div className="card-footer bg-dark-blue">
                               <ToastContainer/>
                       
                        <button onClick={showNotification} type='submit' className='btn btn-info rounded-pill '>Login</button>
                       <br/>
                    <br/>
                  <NavLink className='btn btn-success rounded-pill ' to='/forgot-password'>forgot your password</NavLink>
                    </div>

            </div>
          </form>
          </div>
        </div>
      </div>
      <navigate to='/'/>
    </>
  )
}

export default Login

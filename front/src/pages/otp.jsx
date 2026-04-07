import React, { useState } from 'react'
// import {Api_url} from '../config/api';
import axios  from 'axios';
import { useNavigate,Navigate } from 'react-router-dom';
// import { useEffect } from 'react';
import { useFormik } from 'formik';



const otp = () => {

    let navigate =useNavigate ();
   
    if(! localStorage.getItem("efp")){
          return <Navigate to='/login'/>
    }


    let [ setErrMsg,errMsg] = useState();
    let otpfrm = useFormik({
        initialValues :{
            otp :"",
        },
        onSubmit :(FormData)=>{
            FormData.email =localStorage.getItem("efp");
       axios
       .post(`${import.meta.env.VITE_Api_url}/forgotpassword/otp`,FormData)
       .then(response=>{
         if(response.data.success==true){
                    localStorage.setItem("efp", response.data.email)
                    navigate("/update-password")
                }else{
                    setErrMsg("This Email id is not registered !")
                }
            })
       
        }

    })
  return (
     <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 mt-3">
                 <form onSubmit={otpfrm.handleSubmit}>               
                     <div className="card border boder-dark my-5">
                    <div className="card-header bg-dark">
                        <h4 className='text-light'>OTP</h4>
                    </div>
                    <div className="card-body">
                        <label  className='my-4'>OTP</label>
                        <input name='otp' onChange={otpfrm.handleChange} type='text' className='form-control' />
                    </div>
                     <small className='text-danger'>{errMsg}</small>
                    <div className="card-footer bg-dark">
                        <button type='submit' className='btn btn-light'>Next</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default otp

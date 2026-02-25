import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useFormik} from 'formik';
// import {Api_url  } from '../config/API'

let forgotpassword = () => {
      let [errMsg, setErrMsg] = useState("");
    let navigate =useNavigate ();
    let forgotPass = useFormik({
        initialValues : {
            email : ""
        },
        onSubmit : (formData)=>{
        //   console.log(formData)
           axios
            .post(`${import.meta.env.VITE_Api_url}/forgotpassword/checkmail`,formData)
            .then(response=>{
                console.log(response.data)
                  if(response.data.success==true){
                    localStorage.setItem("efp", response.data.email)
                    navigate("/otp")
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
                <form onSubmit={forgotPass.handleSubmit}>
                <div className="card border boder-dark my-5">
                    <div className="card-header bg-dark">
                        <h4 className='text-light'>Forgot Password</h4>
                    </div>
                    <div className="card-body">
                        <label className='my-4'>Registered Email Id</label>
                        <input type='text' name='email' onChange={forgotPass.handleChange}  className='form-control' />
                        <small className='text-danger'>{errMsg}</small>
                    </div>
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

export default forgotpassword


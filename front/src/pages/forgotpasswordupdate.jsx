import React from 'react'
// import {Api_url} from '../config/api';
import axios  from 'axios';
import { useNavigate,Navigate } from 'react-router-dom';

import { useFormik } from 'formik';


const forgetpasswordupdate = () => {
    let navigate =useNavigate ();
   if(! localStorage.getItem("efp")){
          return <Navigate to='/login'/>
    }

  let updatepassfrm= useFormik({
    initialValues: {
        password:"",
        repassword:""
    },
    onSubmit : (FormData)=>{
          FormData.email =localStorage.getItem("efp");
        //   console.log(FormData)
       axios
       .post(`${import.meta.env.VITE_Api_url}/forgotpassword/update`,FormData)
       .then(response=>{
        localStorage.removeItem("efp");
        navigate("/login")
       })
    }
  })
 return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 mt-3">
                 <form onSubmit={updatepassfrm.handleSubmit}>     
                <div className="card border boder-dark my-5">
                    <div className="card-header bg-dark">
                        <h4 className='text-light'>Change Password</h4>
                    </div>
                    <div className="card-body">
                        <div className="my-4">

                        <label>New Password</label>
                        <input name='password'onChange={updatepassfrm.handleChange} type='password' className='form-control' />
                        </div>
                        <div className="my-4">

                        <label>Confirm New Password</label>
                        <input name='repassword' onChange={updatepassfrm.handleChange} type='password' className='form-control' />
                        </div>
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

export default forgetpasswordupdate

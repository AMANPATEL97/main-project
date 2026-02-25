import React from 'react'
import axios from 'axios'
import { ToastContainer,toast } from 'react-toastify'
import { useState,useEffect } from 'react'
import { APi_URl } from '../../config/API'
import { Api_url } from '../../../../front/src/config/api'
const Listusers = () => {
 
  let [alluser,setalluser] = useState([]);



  useEffect(()=>{
  axios
  .get(`${import.meta.env.VITE_APi_URl}/user`,{headers:{Authorization: localStorage.getItem("sseccanimda")}})
  .then(response=>{
    setalluser(response.data.result);
    toast("user page successfuly")
  })
  },[])

    let changestatus=(obj,s)=>{
      // console.log(obj)
        // console.log(s)
        axios.put(`${import.meta.env.VITE_Api_url}/user/changestatus/${obj._id}`,{status :s})
        .then(response=>{
          console.log(response.data);
        })
    }

  return (
  <>
  <ToastContainer/>
       <div className="container ">
        <div className="row ">
            <div className="col-md-7 my-5">
              <br/>
              <br/>
             
              <br/>
                        <h4 className="mb-4">
                          USER LIST </h4>
                            <div className='table'>
                      <table className="table table-dark table-bordered table-hover table-striped">
                        <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>contact</th>
                                     <th>city</th>
                                    <th>Status</th>
                                    <th>ACTIVE/INACTIVE</th>
                                </tr>
                              </thead>
                              <tbody>
                                {
                                  alluser.map((item,index)=>{
                                    return(
                                      <tr>
                                      <td>{index+1}</td>
                                      <td>{item.name}</td>
                                      <td>{item.email}</td>
                                      <td>{item.contact}</td>
                                       <td>{item.city}</td>
                                       <td>{item.status==1 ? "Active":"Deactive"}</td>
                                       <td>
                                        {
                                          item.status==1
                                          ?

                                          <button  onClick={()=>changestatus(item,0)} className='btn btn-danger btn-sm'>DeActive</button>
                                          :
                                          <button onClick={()=>changestatus(item,1)} className='btn btn-info btn-sm'>Active</button>
                                        }
                                       </td>
                                      </tr>
                                    )
                                  })
                                }
                              </tbody>
                        </table>
                        </div>
                        </div>
                        </div>
                        </div>

  
  </>
  )
}

export default Listusers

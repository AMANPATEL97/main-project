import React from 'react'
import axios from 'axios'
import { ToastContainer,toast } from 'react-toastify'
import { useState,useEffect } from 'react'
const Listusers = () => {
  let [alluser,setalluser] = useState([]);

  useEffect(()=>{
  axios
  .get(`${import.meta.env.VITE_Api_url}/user`,
    {headers:{Authorization: localStorage.getItem("sseccanimda")}})
  .then(response=>{
    setalluser(response.data.result);
    toast("user page successfuly")
  })
  },[])
    let changestatus=(obj,s)=>{
        axios.put(`${import.meta.env.VITE_Api_url}/user/changestatus/${obj._id}`,{status :s})
        .then(response=>{
            setalluser(curr=>curr.map(item=>{
                if(item._id == obj._id){
                    item.status=s;
                    return item;
                }else{
                    return item;
                }
            }))
        })
    }
  return (
  <>
  <ToastContainer/>
       <div className="container ">
        <div className="row">
            <div className="col-md-7 my-5">
              <br/>
              <br/>
              <br/>
                        <h4 className="mb-3">
                            USER LIST </h4>
                            <div className='table'>
                      <table className="table table-dark table-bordered table-hover table-striped">
                        <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Contact</th>
                                     <th>City</th>
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

                                          <button  onClick={()=>changestatus(item,0)} className='btn btn-danger rounded-pill btn-sm'>DeActive</button>
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

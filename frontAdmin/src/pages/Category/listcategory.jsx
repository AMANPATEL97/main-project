import { useEffect, useState } from 'react'
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import {ToastContainer,toast} from 'react-toastify';
import { useNavigate } from 'react-router-dom'

const listcategory =()=> {
let navigate = useNavigate();
    let [allcate,setallcate]=useState([]);
    let [show,setshow]=useState(false);
    let [cate, setcate]= useState({});

    let [preloader,setproloader]=useState(false);

    useEffect(()=>{
    axios.get(import.meta.env.VITE_APi_URl+"/category", {headers:{Authorization : localStorage.getItem("sseccanimda")}})
    .then(Response=>{
     setallcate(Response.data.result)
    })
    },[])

    let askdelete= (obj)=>{
      console.log(obj);
      setcate(obj)
      setshow(true)
    }
    //  let showdeletebox= ()=>setshow(true)
     let hidedeletebox= ()=>setshow(false)   

    let confmDelete= ()=>{
      setproloader(true);
     axios.delete(`${import.meta.env.VITE_APi_URl}/category/${cate._id}`, {headers:{Authorization : localStorage.getItem("sseccanimda")}})
     .then(Response=>{
       setproloader(false);
       setshow(false);
       setallcate(curr=>curr.filter(item=>item._id != cate._id))
          toast("category deleted successfuly.....")
       
      
     })
    }
     let gotoedit=(obj)=>{
         navigate("/category/edit/"+obj._id)
        // console.log(obj)
     }

  return (
    <>
    <ToastContainer/>
    <Modal show={show}>
      <Modal.Header>
        <Modal.Title>delete category</Modal.Title>
      </Modal.Header>
        <Modal.Body>
          <h4>Are you want to Delete <b>{cate.name}</b></h4>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={confmDelete} className='btn btn-info'> confim
            {
              preloader==true
              ?
              <span className='spinner-border spinner-border-sm'></span>
               :
               ''
            }

          </button>
           <button  className='btn btn-succcess'onClick={hidedeletebox}>close</button>
        </Modal.Footer>
    </Modal>
     <div className="container ">
        <div className="row ">
            <div className="col-md-7 my-5">
             
                        
                        {
                         allcate.length > 0
                          ?
                         <>
                        <h4 className="mb-4">list  new category</h4>
                       
                          <br/>
                            <div className='table'>
                      <table className="table table-dark table-bordered table-hover table-striped">

                              <thead>
                                <tr>
                                    <th>#</th>
                                    <th>NAme</th>
                                    <th>Delete</th>
                                      <th>Update</th>
                                </tr>
                              </thead>
                              <tbody>
                                {
                                  allcate.map((item,index)=>{
                                    return(
                                      <tr>
                                                <td>{index+1}</td>
                                                <td>{item.name}</td>
                                                <td><button onClick={()=>askdelete(item)} className='btn btn-success'>
                                                  <i className='fa fa-trash '></i>
                                                </button> </td>
                                                 <td>
                                                  <button  onClick={()=>gotoedit(item)} className='btn btn-info'>
                                                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                                  </button>
                                                 </td>
                                                </tr>
                                    )
                                  })
                                }
                                               
                                       
                              </tbody>
                            </table>
                            </div>
                            </>
                            :
                            <div className='alert alert-warning'>No data found</div>
                      }
                        </div>
                    </div>
                    
    </div>

    </>
  )
}

export default listcategory

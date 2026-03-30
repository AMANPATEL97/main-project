import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Modal from 'react-bootstrap/Modal';
import {ToastContainer,toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom';

const ListSubCategory = () => {
let navigate = useNavigate();
    let [allSubCate, setAllSubCate] = useState([]);
    let [show,setshow]=useState(false);
    let [subcate, setsubcate]= useState({});
     let [preloader,setproloader]=useState(false);

    useEffect(()=>{
        axios
        .get(import.meta.env.VITE_APi_URl+"/subcategory")
        .then(response=>{
            // console.log(response.data);
            setAllSubCate(response.data.result)
        })
    },[])
    
     let askdelete= (obj)=>{
      console.log(obj);
      setsubcate(obj)
      setshow(true)
    }
    
     let hidedeletebox= ()=>setshow(false)   

    let confmDelete= ()=>{
      setproloader(true);
     axios.delete(`${import.meta.env.VITE_APi_URl}/subcategory/${subcate._id}`, {headers:{Authorization : localStorage.getItem("sseccanimda")}})
     .then(response=>{
       setproloader(false);
       setshow(false);
       setAllSubCate(curr=>curr.filter(item=>item._id != subcate._id));
        toast("subcategory deleted successfuly.....")
       
      // console.log(response.data)
     })
    }

    let gotoedit=(obj)=>{
      // console.log(obj)
      navigate("/subcategory/edit/"+obj._id)
    }

  return (
    <>
   <ToastContainer/>
    <Modal show={show}>
      <Modal.Header>
        <Modal.Title>Delete subcategory</Modal.Title>
      </Modal.Header>
        <Modal.Body>
           <h4>Are you want to Delete <b>{subcate.name}</b></h4>
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
   
    <div className="main-panel">
          <div className="content-wrapper pb-0">
   
            <div className="page-header flex-wrap">
                <h3>List of All Sub-Category</h3>
                <br/>
                
               {
                allSubCate.length > 0
                ?
                 <>
                <div className="table-responsive">
                  <table className="table table-dark table-bordered table-hover table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Sub-Category Name</th>
                            <th>Category Name</th>
                             <th>Edit</th>
                            <th>Delete</th>
                        </tr>

                    </thead>
                    <tbody>
                        
                           {
                            allSubCate.map((item, index)=>{
                                return(
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.categoryId ? item.categoryId.name:''}</td>
                                       <td>
                                                  <button  onClick={()=>gotoedit(item)} className='btn btn-info'>
                                                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                                  </button>
                                                 </td>
                                       <td><button onClick={()=>askdelete(item)} className='btn btn-success'>
                                                  <i className='fa fa-trash '></i>
                                                   </button> </td>
                                     
                                        
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                  </table>
                </div>
                </>
                :
                <div className='alert alert-warning'>NO data found</div>
               }
            </div>
        </div>
    </div>
    </>
  )
}


export default ListSubCategory


                
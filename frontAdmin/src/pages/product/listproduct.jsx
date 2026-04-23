import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import {ToastContainer,toast} from 'react-toastify';
import { useNavigate } from 'react-router-dom';
 
   const listproduct = () => {
  
   let navigate = useNavigate();
   let file = useRef(); 
   
   let [allpro,setallpro]= useState([])
   let[showoverLay,setshowoverLay]=useState("none");
   let [imagesrc,setimagesrc]= useState("");
   let [proId,setproId] = useState(null);
   let [pro,setpro]=useState({})
   let [preloader,setpreloader]= useState(false);
   let [show,setshow]=useState(false);   

 useEffect(()=>{
 axios
 .get(`${import.meta.env.VITE_Api_url}/prooduct`)
 .then(response=>{
  setallpro(response.data.result);
 })
 },[])

   let selectuploadImage = (id)=>{
    setproId(id)
    file.current.click();
   }
   let selectImage=()=>{
   setshowoverLay("block");
   let url= URL.createObjectURL(file.current.files[0])
   setimagesrc(url)
   }
  let hide=()=>{
  setshowoverLay("none")
  }
  let upload=()=>{
    // console.log(file.current.files[0])
    let  myfile=file.current.files[0];
    let x= new FormData();

    x.append("phota",myfile);
    axios.put(`${import.meta.env.VITE_Api_url}/product/uploadimage/${proId}`,x,{headers:{Authorization : localStorage.getItem("sseccanimda")}})
    .then(response=>{
      console.log(response.data);
        setshowoverLay("none")
    })
  }
let askdelete=(obj)=>{
  // console.log(obj)
  setpro(obj);
  setshow(true)
}
let confdelete=()=>{
  setpreloader(true);
  axios.delete(`${import.meta.env.VITE_Api_url}/product/${pro._id}`,{headers:{Authorization : localStorage.getItem("sseccanimda")}})
    .then(Response=>{
      setpreloader(false)
      setallpro(curr=>curr.filter(item=>item._id !=pro._id));
      setshow(false)
      toast("product deleted successfuly.....")
    })
    
}
let gotoedit=(obj)=>{
   navigate("/product/edit/"+obj._id)
}
  return (
    <>
    <ToastContainer/>
     <Modal show={show}>
      <Modal.Header>
        <Modal.Title>Delete product</Modal.Title>
      </Modal.Header>
        <Modal.Body>
           <h4>Are you want to Delete<b>{pro.title}</b></h4>
        </Modal.Body>
        <Modal.Footer>
           <button  onClick={confdelete} className='btn btn-info'> confim{preloader ? <span className='spinner-border spinner-border-sm'></span> : ''}</button>
           <button onClick={()=>setshow(false)} className='btn btn-succcess'>close</button>
        </Modal.Footer>
    </Modal>
    
   <div class="container ">
        <div class="row "> 
            <div class="col-md-12 my-5">
                <div class="card  my-5">
                        <h4 class="mb-0">LIST ALL PRODUCT </h4>
                        <input onChange={selectImage} accept='.jpg, .jpeg, .png, .image/jpeg, .image/png' ref={file} style={{display :"none"}}type='file'></input>
                       {
                        allpro.length > 0
                        ?
                         <>
                         <div className="table-responsive">
                    <div class="card-header ">
                  <table className="table table-dark table-bordered table-hover table-striped p-5">
                    <thead>
                        <tr>
                           <th>#</th>
                           <th>title</th>
                           <th>costprice /price</th>
                            <th>category</th>
                             <th>subcategory</th>
                              <th>uploadImage</th>
                              <th>Image</th>
                               <th>Edit</th>
                              <th>DELETE</th>
                        </tr>

                    </thead>
                    <tbody>
                      {
                        allpro.map((item,index)=>{
                          return(
                            <tr>
                               <td>{index+1}</td>
                               <td>{item.title}</td>
                               <td>{item.costprice}/{item.price}</td>
                               <td>{item.categoryId ? item.categoryId.name :''}</td>
                               <td>{item.subcategoryId ? item.subcategoryId.name :''}</td>
                               <td>
                                <li  onClick={()=>selectuploadImage(item._id)}className='fa fa-upload text-primary rounded-pill'></li>
                               </td>
                               <td>
                                <img src={item.image ? `${import.meta.env.VITE_API_PATH}/product_images/${item.image}`:`${import.meta.env.VITE_API_PATH}/product_images/pro_avatar.jpg`} style={{height:50,width:50}}></img>
                               </td>
                            <td>
                                                  <button  onClick={()=>gotoedit(item)} className='btn btn-info rounded-pill'>
                                                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                                  </button>
                                                 </td>
                               
                               <button  onClick={()=>askdelete(item)}className='btn btn-success btn-sm' >
                               <i className='fa fa-trash '></i>
                               </button>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                </table>
                        </div>
                        </div>
                      </>
                      :
                      <div className='btn btn-warning'>No data found</div>
                       }
                </div>
    </div>
     <div style={{position : "absolute", width : "100%", height : "100%", backgroundColor : "rgba(0, 0, 0, 0.8)", display :showoverLay}}></div>              
          <div style={{position : "absolute", zIndex : 999, backgroundColor : "#666161", left : "40%", top : "20%", display :showoverLay, border : "1px solid #FFF", padding : 10}}>
            <div className='d-flex justify-content-between'>
            <h3 className='text-light'>Preview</h3>
            <button className='close text-light' onClick={hide}>x</button>
            </div>
            <img src={imagesrc} style={{height : 300, width : 300}} />
            <br />
            <button onClick={upload} className='btn btn-info mt-2'>Upload</button>
          </div>
 </div>
 </div>
    </>
  )
}

export default listproduct
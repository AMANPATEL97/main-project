import { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink, useNavigate} from 'react-router-dom';
import { useParams } from 'react-router-dom';
// import { Api_url,API_PATH } from '../config/api';

import Modal from 'react-bootstrap/modal';

const deatail = () => {

     let navigate= useNavigate();
  let [pro,setpro]=useState({});
  let [show,setshow]=useState(false);
   let param =useParams();
   useEffect(()=>{
    axios
    .get(`${import.meta.env.VITE_Api_url}/product/${param.a}`)
    .then(response=>{
        //  console.log(response.data.result)
        setpro(response.data.result)
    })
   },[])
    let checkUserLoggedIn = ()=>{
        if(localStorage.getItem("access_user")){
            navigate("/buy-now/"+param.a)
        }else{
           setshow(true)
        }
    }
   let handleclose=()=>setshow(false);   
    let goToLoginPage = ()=>{
        setshow(false);
        navigate("/login");
 }
  return (
   <>
   <Modal show={show} onHide={handleclose}>
      <Modal.Header>
        <Modal.Title>Delete subcategory</Modal.Title>
      </Modal.Header>
        <Modal.Body>
           <h4>Are you want to  </h4>
        </Modal.Body>
        <Modal.Footer>
           <button onClick={goToLoginPage} className='btn btn-info'>Login</button>
          <button onClick={()=>setshow(false)} className='btn btn-danger'>Close</button>
        </Modal.Footer>
    </Modal>
    <div className="container my-5">
        <div className="row">
            <div className="col-md-5">
                <div className="px-4">
                    
                    <img src={pro.image ? `${import.meta.env.VITE_API_PATH}/product_images/${pro.image}` : `/picture/pro_avatar.jpg`} className='img-thumbnail' style={{height : 450, width : "100%"}}/>
                <div className='d-flex justify-content-around mt-3'>
                    <button onClick={checkUserLoggedIn} className='btn btn-success '><i class="fa fa-bolt" aria-hidden="true"></i> Buy Now</button>
                    <NavLink to='' className='btn btn-success '> <i class="fa fa-shopping-cart" aria-hidden="true"></i> Add To Cart</NavLink>
                </div>
                </div>
            </div>
        <div className='col-ms-7'>
            <h1>{pro.title}</h1>
            <small className='text-success'>special price</small>
          <h2>&#8377;  {pro.price ? (pro.price - (pro.price*pro.discount/100)).toFixed(2) : ''}</h2>
          <h4><del className='text-muted'>{pro.price ? pro.price.toFixed(2) : ''}</del> <span className='text-success'>{pro.discount}%</span>
          <span className='text-success'></span>
          </h4>
          <br/>
           <p>{pro.categoryId ? pro.categoryId.name : ''} &gt; {pro.subcategoryId ? pro.subcategoryId.name : ''}</p>

          <div className="img-box">
           
                                 {/* <img src={pro.image ? `${API_PATH}/product_images/${pro.image}` : `/picture/avatar.jpg`} style={{height : "100px"}} alt="" /> */}
                              </div>
          <p>{pro.deatail}</p>
              <h6>size: {pro.size}</h6>
              <h6>Color : <span style={{display : "inline-block", height : 15, width : 15, backgroundColor : pro.color, borderRadius : 50, verticalAlign : "center"}}></span> </h6>
            
        </div>
    </div>
             
   </div>
   </>
  )
}

export default deatail
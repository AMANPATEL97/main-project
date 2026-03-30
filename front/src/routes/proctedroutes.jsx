import axios from 'axios';
import React, {  useEffect, useRef, useState } from 'react'
import { Outlet,  NavLink } from 'react-router-dom'

const proctedroutes = () => {
    let file = useRef();
    let [user,setUser] = useState({});
    let [showCamera, setShowCamera] = useState("none");
    let [pic, setPic] = useState("")
    
    useEffect(() => {
   axios
      .get(`${import.meta.env.VITE_Api_url}/profile/profilepic`, {
        headers: { Authorization: localStorage.getItem("access_user") },
      })
      .then((response) => {
        setUser(response.data.result);
         let name = response.data.result.image == "" ? 
         import.meta.env.VITE_API_PATH+"/user_images/avatar.png":
          import.meta.env.VITE_API_PATH+"/user_images/"+response.data.result.image;
       setPic(name);
      
      });
  }, []);

    let showCameraIcon = ()=>{
      setShowCamera("block")
    }
    let hideCameraIcon = ()=>{
      setShowCamera("none")
    }

    let askImageUpload = ()=>{
      file.current.click();
    }

    let doUpload = ()=>{
      let filedata = file.current.files[0];
      let MyFormData = new FormData();
      MyFormData.append("image", filedata);
      axios
      .put(`${import.meta.env.VITE_Api_url}/user/profilepic`, MyFormData, { headers : {Authorization : localStorage.getItem("access_user")}})
      .then(response=>{
        // console.log(response.data);
        setPic(import.meta.env.VITE_API_PATH+"/user_images/"+response.data.name)
      })
    }
  return (
    <>
    <div className="container my-4">
      <div className="row">
        <div className="col-md-3">
            <input accept=".jpg, .jpeg, .png, image/jpeg, image/png" onChange={doUpload} type='file' ref={file} style={{display : "none"}}/>
            <div className="alert" style={{backgroundColor : "#a5d4e7ff"}}>
                <div className='d-flex'>
                  <div style={{height : 80}} onMouseOut={hideCameraIcon} onMouseOver={showCameraIcon}>
                    <img  src={pic} className='img-thumbnail' style={{height : "70px", width : "70px", margin : "0 10px"}} />
                    <div onClick={askImageUpload} style={{height : 69, width : 70, display : showCamera, position : "relative", backgroundColor : "rgba(0, 0, 0, .2)", top : -70, left : 10, textAlign : "center", zIndex : 99}}>
                     <i style={{marginTop : 20}} className='fa fa-camera fa-2x'></i>
                    </div>
                  </div>
                  <div>
                    <small>Hello</small>
                    <p style={{fontWeight : "bold"}}>{localStorage.getItem("name")}</p>
                  </div>
                </div>
            </div>
            <div className="alert" style={{backgroundColor : "#a5d4e7ff"}}>
              <ul className='nav flex-column'>
                <li className='nav-item'>
                  <NavLink to='/myprofile' className='nav-link'>My Profile</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to='/myorders' className='nav-link'>My Orders</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to='/myorders' className='nav-link'>Wishlist</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to='/myorders' className='nav-link'>Setting</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to='/logout' className='nav-link'>Logout</NavLink>
                </li>
                
              </ul>
            </div>
        </div>
        <Outlet />
      </div>
    </div>
    </>
  )
}
export default proctedroutes



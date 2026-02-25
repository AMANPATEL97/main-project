import React, { useEffect } from 'react'
import Topnav from '../components/Topnav';
import Sidenav from '../components/sidenav';
import { Navigate, Outlet } from 'react-router-dom';
const protocedRoutes = () => {
  useEffect(()=>{
    if(! localStorage.getItem("sseccanimda")){
      Navigate("/");
    }
  },[])
  return (
   <>
   <div class="container-scroller">
       <Sidenav/>
         <div class="container-fluid page-body-wrapper">
           
         <Topnav/>
         <Outlet/>
         </div>
         </div>
   
   </>
  )
}

export default protocedRoutes

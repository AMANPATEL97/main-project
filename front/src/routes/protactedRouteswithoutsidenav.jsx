import React from 'react'
import { useEffect } from 'react'
import { Outlet,useNavigate } from 'react-router-dom'

const protactedRouteswithoutsidenav = () => {
     let navigate= useNavigate();
      useEffect(()=>{
            if(! localStorage.getItem("access_user")){
                navigate("/login")
    
            }
         },[])
  return (
    
   <Outlet/>
  )
}

export default protactedRouteswithoutsidenav

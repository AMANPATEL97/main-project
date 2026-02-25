import React from 'react'
import { Navigate } from 'react-router-dom'

const logout = () => {
    localStorage.removeItem("sseccanimda")
   localStorage.removeItem("admin_name")
  return (
    <>
    <Navigate to="/"/>
    </>
  )
}

export default logout

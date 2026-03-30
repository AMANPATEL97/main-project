import React,{useContext} from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
const logout = () => {
   let logged = useContext(AuthContext);
  // let navigate= useNavigate();
   localStorage.removeItem("name");
   localStorage.removeItem("access_user");
   logged[1](false);
  return (
    <>
   <Navigate to="/login" />
 
    </>
  )
}

export default logout

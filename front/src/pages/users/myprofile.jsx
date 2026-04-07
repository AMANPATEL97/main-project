import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const myprofile = () => {
let[user,setUser]=useState();
  let file = useRef();
   useEffect(()=>{
    axios
    .get(`${import.meta.env.VITE_Api_url}/profile`,{headers:{Authorization:localStorage.getItem("access_user")}})
    .then(response=>{
      // console.log(response.data.result);
      setUser(response.data.result);
    })
  },[])
  return (
    <>
        <input  accept=".jpg, .jpeg, .png, image/jpeg, image/png "   type="file"ref={file}style={{ display: "none" }}/>
          <div className="col-md-8 ">
            <div className="alert alert-dark"style={{backgroundColor : "#a5d4e7ff"}}>
              <h4>profile Information</h4>
              <NavLink to="/myprofile/edit">Edit</NavLink><br/>
               <NavLink  to="/myprofile/changepassword">change update</NavLink>
              <br />
              <br />
              <div className="row" >
                <div className="col-md-6">
                  <input  type="text" className="form-control"  value={user ? user.name : ''}/>
                  <br />
                 your Gender
                    <br /> 
                     <br />   
                    Male &nbsp;&nbsp;&nbsp;&nbsp;
                  <input type="radio"  disabled checked={user?.gender === "male"}/> 
                  &nbsp;&nbsp;&nbsp;&nbsp; 
                    Female &nbsp;&nbsp;&nbsp;&nbsp;
                   <input type="radio"  disabled checked={user?.gender === "female"}/>
                  <br />
                  <br />
                  Email
                  <br />
                  <input  type="text" className="form-control"  disabled   value={user ? user.email : ''} />
                  <br />
                  Mobile Number
                  <br />
                  <input  type="text" className="form-control"  disabled  value={user ? user.contact : ''}  />
                  <br />
                  <br />
                  <h5>FAQs</h5>
                  <p>
                    <b>
                      What happens when I update my email address (or mobile
                      number)?
                    </b>
                  </p>
                  <p>
                    Your login email id (or mobile number) changes, likewise.
                    You'll receive all your account related communication on
                    your updated email address (or mobile number).
                  </p>
                  <p>
                    <b>
                      What happens when I update my email address (or mobile
                      number)?
                    </b>
                  </p>
                  <p>
                    Your login email id (or mobile number) changes, likewise.
                    You'll receive all your account related communication on
                    your updated email address (or mobile number).
                  </p>
                  <p>
                    <b>
                      What happens when I update my email address (or mobile
                      number)?
                    </b>
                  </p>
                  <p>
                    Your login email id (or mobile number) changes, likewise.
                    You'll receive all your account related communication on
                    your updated email address (or mobile number).
                  </p>
                </div>
              </div>
            </div>
          </div>
       
    </>
  )
}

export default myprofile;


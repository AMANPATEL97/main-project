import React from 'react';
import { NavLink } from 'react-router-dom';


const Footer = () => {
  return (
   <>
    <footer>
         <div class="container">
            <div class="row">
               <div class="col-md-4">
                   <div class="full">
                      <div class="logo_footer">
                        <a href="#"><img width="300" src="/images/logo.png" alt="#" /></a>
                      </div>
                      <div class="information_f">
                        <p><strong>ADDRESS:</strong> Dhar [Madhya pradesh] 454001</p>
                        <p><strong>TELEPHONE:</strong> +91 9752941368</p>
                        <p><strong>EMAIL:</strong> AMANPATEL97529@gmail.com</p>
                      </div>
                   </div>
               </div>
               <div class="col-md-8">
                  <div class="row">
                  <div class="col-md-7">
                     <div class="row">
                        <div class="col-md-6">
                     <div class="widget_menu">
                        <h3>Menu</h3>
                        <ul>
                           <li><NavLink to="/home">Home</NavLink></li>
                           <li><NavLink to="/About">About</NavLink></li>
                           {/* <li><NavLink to="#">Contact</NavLink></li> */}
                        </ul>
                     </div>
                  </div>
                  <div class="col-md-6">
                     <div class="widget_menu">
                        <h3>Account</h3>
                        <ul>
                           
                           <li><NavLink to="/login">Login</NavLink></li>
                           <li><NavLink to="/singup">Register</NavLink></li>
                           
                        </ul>
                     </div>
                  </div>
                     </div>
                  </div>     
                 
                  </div>
               </div>
            </div>
         </div>
      </footer>
     
      <div class="cpy_">
         <p class="mx-auto">© 2021 All Rights Reserved By <a href="https://html.design/">Free Html Templates</a><br/>
         
            Distributed By <a href="https://themewagon.com/" target="_blank">ThemeWagon</a>
         
         </p>
      </div>
   </>
  )
}

export default Footer

import React from 'react'
import { NavLink } from 'react-router-dom'

const sidenav = () => {
  return (
   <>
     <nav class="sidebar sidebar-offcanvas" id="sidebar">
        <div class="text-center sidebar-brand-wrapper ">
         
       <h3 className='text-center  mt-3 brand-logo'>Administrator</h3>
        <h3 className='text-center  mt-3 brand-logo-mini'>A</h3>
        </div>
        <ul class="nav">
          <li class="nav-item nav-profile">
            <a href="#" class="nav-link">
              <div class="nav-profile-image">
                <img src="/assets/images/faces/face1.jpg" alt="profile" />
                <span class="login-status online"></span>
              </div>
              <div class="nav-profile-text d-flex flex-column pr-3">
                <span class="font-weight-medium mb-2">{localStorage.getItem("admin_name")}</span>
                
              </div>
              
            </a>
          </li>
          <li class="nav-item">
            <NavLink class="nav-link" to="/">
              <i class="mdi mdi-home menu-icon"></i>
              <span class="menu-title">Dashboard</span>
            </NavLink>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#cate" aria-expanded="false" aria-controls="ui-basic">
          <i className="mdi mdi-view-list menu-icon"></i>
              <span class="menu-title">Category</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="cate">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  <NavLink className="nav-link" to="/Category">Add</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/Category/list">List</NavLink>
                </li>
                
              </ul>
            </div>
          </li>
         

           <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#subcate" aria-expanded="false" aria-controls="ui-basic">
               <i className="mdi mdi-format-list-checkbox menu-icon"></i>
              <span class="menu-title">subCategory</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="subcate">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  <NavLink class="nav-link" to="/subcategory">Add</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/subcategory/list">List</NavLink>
                </li>    
              </ul>
            </div>
          </li>

           <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#products" aria-expanded="false" aria-controls="ui-basic">
           <i className="mdi mdi-store menu-icon"></i>
              <span class="menu-title">Product</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="products">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  <NavLink class="nav-link" to="/product">Add</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/product/list">List</NavLink>
                </li>
                
              </ul>
            </div>
          </li>
           
            <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#user" aria-expanded="false" aria-controls="ui-basic">
           <i className="mdi mdi-account menu-icon"></i>
              <span class="menu-title">User</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="user">
              <ul class="nav flex-column sub-menu">
                
                <li class="nav-item">
                  <NavLink class="nav-link" to="users/list">List</NavLink>
                </li>
                
              </ul>
              {/* <li className='nav-item'>
                <NavLink className='nav-link' to="/Logout">
                  <i className='mdi mdi-logout menu-icon'></i>
                  <span className='menu-title'>logout</span>
                </NavLink>
              </li> */}
            </div>
          </li>
            <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#setting" aria-expanded="false" aria-controls="ui-basic">
           <i className="mdi mdi-tune menu-icon"></i>
              <span class="menu-title">Setting</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="setting">
              <ul class="nav flex-column sub-menu">
                
                <li class="nav-item">
                  <NavLink class="nav-link" to="/setting/list">List</NavLink>
                </li>
                
              </ul>
            </div>
          </li>
           <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#order" aria-expanded="false" aria-controls="ui-basic">
          <span class="mdi mdi-cart-arrow-down menu-icon">&nbsp;&nbsp;&nbsp;</span>
              <span class="menu-title">order</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="order">
              <ul class="nav flex-column sub-menu">
                
                <li class="nav-item">
                  <NavLink class="nav-link" to="/order/list">All order</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/order/shipped">shipped</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/order/placed">placed</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/order/outfor">out for</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/order/delivered">delivered</NavLink>
                </li>
               
                
              </ul>
            </div>
          </li>
           <li className='nav-item'>
                <NavLink className='nav-link' to="/Logout">
                  <i className='mdi mdi-logout menu-icon'></i>
                  <span className='menu-title'>logout</span>
                </NavLink>
              </li>
  
          <li class="nav-item sidebar-actions">
            <div class="nav-link">
              <div class="mt-4">
                <div class="border-none">
                
                </div>
                <ul class="mt-4 pl-0">
                  {/* <li>Sign Out</li> */}
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <div id="theme-settings" class="settings-panel">
          <i class="settings-close mdi mdi-close"></i>
          <p class="settings-heading">SIDEBAR SKINS</p>
          <div class="sidebar-bg-options selected" id="sidebar-default-theme">
            <div class="img-ss rounded-circle bg-light border mr-3"></div> Default
          </div>
          <div class="sidebar-bg-options" id="sidebar-dark-theme">
            <div class="img-ss rounded-circle bg-dark border mr-3"></div> Dark
          </div>
          <p class="settings-heading mt-2">HEADER SKINS</p>
          <div class="color-tiles mx-0 px-4">
            <div class="tiles light"></div>
            <div class="tiles dark"></div>
          </div>
        </div>
   
   </>
  )
}

export default sidenav

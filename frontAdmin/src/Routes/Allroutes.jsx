import React from 'react'
import { Route,Routes } from 'react-router-dom' ;
import Dasboard from '../pages/Dasboard';
import AddCategory from '../pages/Category/Addcategory';
import Listcategory from '../pages/Category/listcategory';
import Listsubcategory from '../pages/subcategory/listsubcategory';
import Login from '../pages/login';
import Addproduct from '../pages/product/Addproduct';
import Listproduct from '../pages/product/listproduct';
import Logout from '../pages/logout';
import ProtocedRoutes from './protocedRoutes';
import Addsubcategory from '../pages/subcategory/Addsubcategory';
import Listusers from '../pages/users/Listusers';
import Listorder from '../pages/order/listorder';
import Listsetting from '../pages/setting/listsetting';
import Placedorder from '../pages/order/placedorder';
import Shippedorder from '../pages/order/shippedorder';
import Outofdeliveryorder from '../pages/order/outofdeliveryorder';
import Deliveredorder from '../pages/order/deliveredorder';

const Allroutes = () => {
  return (
   <>
   <Routes>
     
      <Route path='/' element={<Login/>}></Route>
      <Route path='' element={<ProtocedRoutes/>}>
      <Route path='/Dasboard' element={<Dasboard/>}></Route>
      <Route path='/Product' element={<Addproduct/>}></Route>
      <Route path='/Product/list' element={<Listproduct/>}></Route>
      <Route path='/Product/edit/:id' element={<Addproduct/>}></Route>
      <Route path='/users/list' element={<Listusers/>}></Route>
      <Route path='/Logout' element={<Logout/>}></Route>
      <Route path='/Category' element={<AddCategory/>}></Route>
      <Route path='/Category/list' element={<Listcategory/>}></Route>
      <Route path='/Category/edit/:id' element={<AddCategory/>}></Route>
      <Route path='/subcategory' element={<Addsubcategory/>}></Route>
      <Route path='/subcategory/List' element={<Listsubcategory/>}></Route>
      <Route path='/subcategory/edit/:id' element={<Addsubcategory/>}></Route>
      <Route path='/setting/list' element={<Listsetting/>}></Route>
      <Route path='/setting/edit/:id' element={<Listsetting/>}></Route>
      <Route path='/order/list' element={<Listorder/>}></Route>
       <Route path='/order/placed' element={<Placedorder/>}></Route>
       <Route path='/order/shipped' element={<Shippedorder/>}></Route>
        <Route path='/order/outfor' element={<Outofdeliveryorder/>}></Route>
         <Route path='/order/delivered' element={<Deliveredorder/>}></Route>

    </Route>
   </Routes>
   
   </>
  )
}
export default Allroutes

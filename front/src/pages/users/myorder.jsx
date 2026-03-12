import React from 'react'
import axios from 'axios';
import useDateView from '../../Hooks/useuserDatetime';
import { useEffect,useState } from 'react';
const myorder = () => {
    let [allOrder, setAllOrder] = useState([]);
  useEffect(()=>{
    // console.log(`${import.meta.env.VITE_Api_url}/order/getall`)
    axios
    .get(`${import.meta.env.VITE_Api_url}/order/getall`,{headers : {Authorization : localStorage.getItem("access_user")}})
    .then(response=>{
      // console.log(response.data)
      setAllOrder(response.data.result)
    })
  },[])
  return (
  <>
   <div className='col-md-9'>
    <div className='alert' style={{backgroundColor :" #a5d4e7ff"}}>
      <h2>my order</h2>
    
       <table className='table table-light table-bordered table-striped'>
        <thead>
          <tr>
            <th>#</th>
            <th>product</th>
            <th>Payment</th>
            <th>Payment mode</th>
            <th>status</th>
            <th>Date</th>
             <th>Download</th>
          </tr>
        </thead>
         <tbody>
                      {
                      allOrder.map((item, index)=><tr>
                          <td>{index+1}</td>
                          <td>{item.product_id.title}</td>
                          <td>{item.amount}</td>
                          <td>{item.payment_mode == 1 ? 'Online' : 'COD'}</td>
                          <td>{item.status == 1 ? 'Ordered' : item.status==2 ? 'Shipped' : item.status==3 ? 'Out of Develiery' : 'Delivered'}</td>
                          <td>{useDateView(item.createdAt)}</td>
                          <td><a download href={`${import.meta.env.VITE_API_PATH}/invoices/${item.razorpay_order_id}_invoice.pdf`} className='btn btn-dark btn-sm'><i class="fa fa-download" aria-hidden="true"></i></a></td>
                        </tr>)
                    }
                  </tbody>
      </table>
     
    </div>
   </div>
   
  
  </>
  )
}

export default myorder


import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeAllItem, removeItem} from '../../Redux/CartSlice'

const mycart = () => {
    let disptach = useDispatch();
    let cartData = useSelector(state=>state.cartReducer);


    let deleteItem = (obj)=>{
        disptach(removeItem(obj));
    }
  return (
    <>
    <div className="container my-5" style={{minHeight : 800}}>
        <div className="row">
            <div className="col-md-12">
                <h3 className='text-center'>Your Cart</h3>
                        <button onClick={()=>disptach(removeAllItem())} className='btn btn-danger'>Clear Cart</button>
                <div className="row mt-5">
                    <div className="col-md-8">  
                        <div className="card bg-success p-3">
                            {
                                cartData.map(item=><div className="alert alert-light">
                                <div className="row">
                                    <div className="col-md-2">
                                        <img className='img-thumbnail' src={item.image ? `${import.meta.env.VITE_API_PATH}/product_images/${item.image}` : `/images/slider.png`} />
                                    </div>
                                    <div className="col-md-4">
                                        <h5>{item.title}</h5>
                                    </div>
                                    <div className="col-md-1">
                                        {item.price}
                                    </div>
                                    <div className="col-md-1">
                                        {/* {item.f_price} */}
                                    </div>
                                    <div className="col-md-1">
                                        <button onClick={()=>deleteItem(item)} className='btn btn-danger btn-sm'>Delete</button>
                                    </div>
                                </div>
                            </div>)
                            }
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card bg-primary p-3"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 
    </>
  )
}

export default mycart
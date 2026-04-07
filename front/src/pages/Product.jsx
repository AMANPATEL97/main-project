import React from "react";
import { NavLink } from "react-router-dom";

const Product = ({ item }) => {
  return (
    <>
     <div className="col-sm-6 col-md-3 col-lg-4" >
                           <div className="box" style={{minHeight : "330px"}}>
                              <div className="option_container">
                                 <div className="options">
                                    <NavLink to={"/deatail/"+item._id} className="option1">
                                       {item.categoryId ? item.categoryId.name : ''}
                                    </NavLink>
                                    <NavLink to={"/deatail/"+item._id} className="option2">
                                       Detail
                                    </NavLink>
                                 </div>
                              </div>
                              <div className="img-box">
                                 <img style={{width : "300px", height : "270px"}} src={item.image ? `${import.meta.env.VITE_API_PATH}/product_images/${item.image}` : `${import.meta.env.VITE_API_PATH}/product_images/pro_avatar.jpg`} alt="" />
                              </div>
                              <div className="detail-box">
                                 <p style={{marginTop : 20, marginLeft : 20, fontSize : 19, fontWeight : "bold"}}>
                                    {item.title} {item.price}
                                 </p>
                                 
                              </div>
                           </div>
                        </div>
      {/* <div className=" justify-content-space">
        <div class="box m-3" >
          <div class="option_container " style={{border:"1px"}}>
            <div class="options">
              <NavLink to={"/deatail/" + item._id} class="option1">
                {item.categoryId ? item.categoryId.name : ""}
              </NavLink>
              <NavLink to={"/deatail/" + item._id} class="option2">
                Details
              </NavLink>
            </div>
          </div>
          <div class="img-box  mt-3 ">
            <img
              src={
                item.image
                  ? `${import.meta.env.VITE_API_PATH}/product_images/${item.image}`
                  : `${import.meta.env.VITE_API_PATH}/product_images/pro_avatar.jpg`
              }
              // style={{ width: "250px", height: "150px" }}
            ></img>
          </div>
          <div class="detail-box">
            <p>{item.title}</p>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Product;

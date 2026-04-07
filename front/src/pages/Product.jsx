import React from "react";
import { NavLink } from "react-router-dom";


const Product = ({ item }) => {
  return (
    <>
      <div className=" justify-content-space">
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
      </div>
    </>
  );
};

export default Product;

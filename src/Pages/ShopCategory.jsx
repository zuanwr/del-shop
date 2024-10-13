import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import dropdown from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/item/Item";
import './style/ShopCategory.css'
import '../Components/Assets/all_product'

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className = "shop-category">
      <img src = {props.banner} alt = "" className="shop-banner"/>
      <div className = "index-short">
        <p>
          <span>Showing1-12</span>out of 36 product
        </p>
      <div className = "short">
        short by <img src = {dropdown} alt="" />
      </div>
      </div>
      <div className = "shopcategory-product">
        {all_product.map((item,i)=>{  
          if (props.category === item.category) {
            return <Item key = {i}
            name = {item.name}
            image = {item.image}
            new_price = {item.new_price}
            old_price = {item.old_price}
            />
          }
          else{
            return null
          }
        })}
         
      </div>
      <div className="explore">Explore More</div>
    </div>
  );
};

export default ShopCategory;

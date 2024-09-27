import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import dropdown from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/item/Item";
import './style/ShopCategory.css'

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img src={props.banner} alt="" />
      <div className="index-short">
        <p>
          <span>showing1-12</span>out of 36 product
        </p>
      </div>
      <div className="short">
        short by <img src={dropdown} alt="" />
      </div>
      <div className="shop-category-product">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          }
          else {
            return null
          }
        })}
      </div>
    </div>
  );
};

export default ShopCategory;

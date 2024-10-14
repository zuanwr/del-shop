// import React from 'react'
// import icon from '../Assets/breadcrum_arrow.png'

// const BreadCrump = (props) => {
//     const {product} = props

//   return (
//     <div className='breadcrump'>
//       HOME  <img src={icon} alt=""  />
//       SHOP <img src={icon} alt="" /> {product.category}
//     <img src={icon} alt="" />{product.name}
//     </div>
//   )
// }

// export default BreadCrump

import React from "react";
import icon from "../Assets/breadcrum_arrow.png";
import "./BreadCrump.css";

const BreadCrump = (props) => {
  const { product } = props;

  return (
    <div className="breadcrump">
      HOME <img src={icon} alt="" /> SHOP <img src={icon} alt="" />{" "}
      {product.category} <img src={icon} alt="" /> {product.name}
    </div>
  );
};

export default BreadCrump;

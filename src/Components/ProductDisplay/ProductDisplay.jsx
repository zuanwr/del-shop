import React from "react";
import star from "../Assets/star_icon.png";
import start_dull from "../Assets/star_dull_icon.png";
import "./ProduckDisplay.css";

const ProductDisplay = (props) => {
  const { product } = props;

  return (
    <div className="produckdisplay">
      <div className="produckdisplay-left">
        <div className="produckdisplay-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="produckdisplay-img">
          <img className="produckdisplay-main" src={product.image} alt="" />
        </div>
      </div>
      <div className="produckdisplay-right">
        <h1>{product.name}</h1>
        <div className="produckdisplay-start">
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={start_dull} alt="" />
          <p>(222)</p>
        </div>
        <div className="produckdisplay-price">
          <div className="produckdisplay-oldprice">${product.old_price}</div>
          <div className="produckdisplay-newprice">${product.new_price}</div>
        </div>
        <div className="produckdisplay-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          saepe dolore labore perspiciatis eaque nihil commodi quis doloremque
          laboriosam vitae.
        </div>
        <div className="produckdisplay-size">
          <h1>Select Size</h1>
          <div className="produckdisplay-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>Xl</div>
            <div>XXL</div>
          </div>
        </div>
        <button>add to cart</button>
        <div className="produckdisplay-category">
          <span>category</span>women,t-shirt,crop top{" "}
        </div>
        <div className="produckdisplay-category">
          <span>tags</span>,modern,latest{" "}
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;

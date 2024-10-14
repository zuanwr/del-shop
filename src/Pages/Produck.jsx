import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import BreadCrump from "../Components/Breadcrump/BreadCrump";
import { ShopContext } from "../Context/ShopContext";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import Description from "../Components/Descrirption/Description";

const Produck = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      <BreadCrump product={product} />
      <ProductDisplay product={product} />
      <Description/>
    </div>
  );
};

export default Produck;

import React from "react";
import "./ProductDetail.css";

export default function ProductDetail({
  icon,
  productDescription,
  productName,
  productPrice,
}) {
  return (
    <>
      <div className="product-detail-container">
        <div className="product-detail">
          <h4>{productName}</h4>
          <p className="product-description">{productDescription}</p>
          <p className="product-price">{productPrice}</p>
        </div>
        <div className="icon">{icon}</div>
      </div>
    </>
  );
}

import React from "react";
import "./ProductImage.css";

export default function ProductImage({
  productDiscount,
  ProductImage,
  ProductImageName,
}) {
  return (
    <>
      <div className="product-image-container">
        <p className="product-discount">{productDiscount}</p>
        <img
          className="product-image"
          src={ProductImage}
          alt={ProductImageName}
        />
      </div>
    </>
  );
}

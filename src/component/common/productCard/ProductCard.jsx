import React from "react";
import "./ProductCard.css";

export default function ProductCard({ ProductImage, ProductDetail }) {
  return (
    <>
      <div className="product-card">
        {ProductImage}
        {ProductDetail}
      </div>
    </>
  );
}

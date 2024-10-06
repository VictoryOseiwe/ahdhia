import React from "react";
import "./AdImage.css";

export default function AdImage({ Image, ImageText }) {
  return (
    <>
      <img className="adimage" src={Image} alt={ImageText} />
    </>
  );
}

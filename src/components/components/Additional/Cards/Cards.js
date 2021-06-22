import React from "react";
import { CardValueProps, CardProducts } from "./Cards.style";

const Cards = ({ name, img, valueProps, products }) => {
  return (
    <>
      {valueProps && (
        <CardValueProps>
          <img src={img} alt="" />
          <h5>{name}</h5>
        </CardValueProps>
      )}

      {products && (
        <CardProducts>
          <img src={img} alt="" />
          <h5>{name}</h5>
        </CardProducts>
      )}
    </>
  );
};

export default Cards;

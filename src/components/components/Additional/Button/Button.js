import React from "react";
import { BtnComponent } from "./Button.style";

const Button = ({ text, bgColor }) => {
  return (
    <div>
      <BtnComponent bgColor={bgColor}>{text}</BtnComponent>
    </div>
  );
};

export default Button;

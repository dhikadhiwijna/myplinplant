import React from "react";
import { valueProps } from "../../../data/dummyData";
import Cards from "../../Additional/Cards/Cards";
import { ContainerValueProps } from "./ValueProportion.style";

const ValueProportion = () => {
  return (
    <ContainerValueProps>
      <h2>Mengapa PlinPlant</h2>
      <div>
        {valueProps.map(({ name, img }, index) => (
          <Cards valueProps name={name} img={img} key={index} />
        ))}
      </div>
    </ContainerValueProps>
  );
};

export default ValueProportion;

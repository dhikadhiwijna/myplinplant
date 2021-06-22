import React from "react";
import { cta } from "../../../assets";
import Button from "../../Additional/Button/Button";
import { ContainerCTA, SectionCTA } from "./CTA.style";

const CTA = () => {
  return (
    <SectionCTA>
      <ContainerCTA>
        <div>
          <h2>Gabung Sekarang</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor
          </p>
          <Button className=".button" text="Gabung Sekarang" />
        </div>
        <img src={cta} alt="" />
      </ContainerCTA>
    </SectionCTA>
  );
};

export default CTA;

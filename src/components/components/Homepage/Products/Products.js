import React, { useState } from "react";
import { productImages, valueProps } from "../../../data/dummyData";
import Cards from "../../Additional/Cards/Cards";
import { SectionProducts } from "./Products.style";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import ItemsCarousel from "react-items-carousel";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Products = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 50;

  return (
    <SectionProducts>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        gutter={5}
        leftChevron={<FaChevronLeft />}
        rightChevron={<FaChevronRight />}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        {productImages.map(({ name, img }, index) => (
          <Cards products name={name} img={img} key={index} />
        ))}
      </ItemsCarousel>
    </SectionProducts>
  );
};

export default Products;

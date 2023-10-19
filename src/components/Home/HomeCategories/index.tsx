"use client";
import React, { FC, useRef, TouchEvent } from "react";
import {
  Container,
  Title,
  CategoriesContainer,
  CustomCard,
  CustomCardActionArea,
  ButtonActionArea,
  CustomCardContent,
  CardLabel,
  CardLabelQuantity,
} from "./styles";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";

interface ICategory {
  bgColor: string;
  icon: string;
  title: string;
}

interface ICategoryComponent {
  Categories: ICategory[];
}

export const HomeCategoriesComponent: FC<ICategoryComponent> = ({
  Categories,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  let touchStartX: number = 0;
  let touchEndX: number = 0;

  const handleScroll = (scrollOffset: number) => {
    if (containerRef.current) {
      if (containerRef.current.scrollLeft != null) {
        containerRef.current.scrollLeft += scrollOffset;
      }
    }
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    touchEndX = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      handleScroll(200); // ajuste o valor do deslocamento conforme necessário
    }
    if (touchEndX - touchStartX > 50) {
      handleScroll(-200); // ajuste o valor do deslocamento conforme necessário
    }
  };


  
  return (
    <Container>
      <Title>Categorias</Title>

      <CategoriesContainer
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
     
      >
        {Categories.map((item, index) => (
          <CustomCard key={index}>
            <CustomCardActionArea>
              <ButtonActionArea
                sx={{
                  backgroundColor: item.bgColor,
                }}
              >
                {" "}
                <DirectionsBusIcon />
              </ButtonActionArea>

              <CustomCardContent>
                <CardLabel>{item.title}</CardLabel>
                <CardLabelQuantity>20 Resultados</CardLabelQuantity>
              </CustomCardContent>
            </CustomCardActionArea>
          </CustomCard>
        ))}
      </CategoriesContainer>
    </Container>
  );
};

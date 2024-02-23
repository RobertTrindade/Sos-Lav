"use client";

import {
  CategoryCard,
  CategoryContainer,
  CategoryTitle,
  Container,
  Content,
  Title,
} from "./styles";
import { useRouter } from "next/navigation";
import React from "react";
import { CardMedia } from "@mui/material";
import Machine from "./Machine.png";
import Ferro from "./2175939.jpg";

export const CategoryComponent = () => {
  const router = useRouter();

  return (
    <Container>
      <Content>
        <Title>Categorias</Title>

        <CategoryContainer>
          <CategoryCard>
            <CardMedia component="img" image={Machine.src} alt="Paella dish" />
            <CategoryTitle>Lavanderia</CategoryTitle>
          </CategoryCard>

          <CategoryCard>
            <CardMedia component="img" image={Ferro.src} alt="Paella dish" />
            <CategoryTitle>Passagem </CategoryTitle>
          </CategoryCard>
        </CategoryContainer>
      </Content>
    </Container>
  );
};

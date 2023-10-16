"use client";

import * as React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Container, Tag } from "./styles";
import img from "./img2.jpg";
export const LeilaoCardComponent = () => {
  return (
    <Container sx={{ maxWidth: 200 }} elevation={4}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src={img.src}
          alt="green iguana"
        />
        <Tag label="Leilão esclusivo" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Leilão Teste
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Bem-vindo ao Leilão Carvalho, onde você terá a oportunidade de
            explorar uma incrível seleção de veículos de alta qualidade
          </Typography>
        </CardContent>
      </CardActionArea>
    </Container>
  );
};

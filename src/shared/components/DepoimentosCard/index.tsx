"use client";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import * as React from "react";

import { CardActionArea } from "@mui/material";
import { City, ClienteAreaType, Container, CustomCardContent, Name, Title } from "./styles";

import { IDepoimento } from "@/src/components/Home/Depoimentos";

export interface ILeilaoCardComponent {
  data: IDepoimento;
  pos: string;
}

export const DepoimentoCardComponent: React.FC<ILeilaoCardComponent> = ({
  pos,
  data: { name, description, cliente, cidade },
}) => {
  return (
    <Container elevation={4} id={pos}>
      <CustomCardContent>
        <div className="iconArea">
          <FormatQuoteIcon color="primary" />
        </div>

        <div className="titleArea">
          <Title>“ {description} ”</Title>
        </div>
        <div className="nameAreaStateArea">
          <Name color="primary">{name}</Name>
          <ClienteAreaType color="primary">{cliente}</ClienteAreaType>
          <City>{cidade}</City>
        </div>
      </CustomCardContent>
    </Container>
  );
};

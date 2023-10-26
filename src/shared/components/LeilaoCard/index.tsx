"use client";

import * as React from "react";
import logo from "@/src/shared/logo/index.svg";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import {
  Container,
  Details,
  Tag,
  Date,
  Type,
  Title,
  LeilaoName,
  IconsDesc,
  CustomCardContent,
} from "./styles";
import Image from "next/image";
import SwipeableTextMobileStepper from "./slider/CardMedia";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { AuctionIcon } from "./auctionIcon";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

interface IProps {
  id: string;
}

export const LeilaoCardComponent: React.FC<IProps> = ({ id }) => {
  return (
    <Container elevation={4} >
      <CardActionArea>
        <SwipeableTextMobileStepper />
        <Tag label="Leilão esclusivo"  id={id}/>
        <CustomCardContent>
          <Title gutterBottom variant="h5">
            Leilão Teste
          </Title>
          <Typography color="text.secondary">
            Bem-vindo ao Leilão Carvalho, onde você terá a oportunidade de
            explorar uma incrível seleção de veículos de alta qualidade
          </Typography>

          <Details>
            <Date label="26/10 - 11:00" />
            <Type>
              <Image src={logo} alt="gif" />
              <LeilaoName>Leilão Detran</LeilaoName>
            </Type>
          </Details>

          <IconsDesc>
            <div className="lotes">
              <DirectionsCarIcon />
              <Typography color="text.secondary" className="bold">
                12
              </Typography>
            </div>
            <div className="lotes">
              <AuctionIcon />
              <Typography color="text.secondary" className="bold">
                19
              </Typography>
            </div>{" "}
            <div className="lotes">
              <RemoveRedEyeIcon />
              <Typography color="text.secondary" className="bold">
                21
              </Typography>
            </div>
          </IconsDesc>
        </CustomCardContent>
      </CardActionArea>
    </Container>
  );
};

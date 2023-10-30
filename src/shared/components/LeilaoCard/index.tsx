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
  Description,
} from "./styles";
import Image from "next/image";
import SwipeableTextMobileStepper from "./slider/CardMedia";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { AuctionIcon } from "./auctionIcon";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

export interface ILeilaoCardComponent {
  data: {
    name: string;
    description: string;
    type: string;
    lotes: number;
    lotes_leiloados: number;
    views: number;
    date: string;
    time: string;
    status: "Em andamento" | "Encerrado" | "Próximo";
    id: string;
  };
  pos: string;
}

export const LeilaoCardComponent: React.FC<ILeilaoCardComponent> = ({
  pos,
  data: {
    name,
    description,
    type,
    date,
    time,
    lotes,
    lotes_leiloados,
    views,
    status,
    id,
  },
}) => {
  return (
    <Container elevation={4} id={pos}>
      <CardActionArea>
        <SwipeableTextMobileStepper />
        <Tag label={id === "1" ? "Leilão esclusivo" : "Leilão Detran"} />
        <CustomCardContent>
          <Title gutterBottom variant="h5">
            {name}
          </Title>
          <Description color="text.secondary">{description}</Description>

          <Details>
            <Date label={`${date} - ${time}`} />
            <Type>
              <Image src={logo} alt="gif" />
              <LeilaoName>{type}</LeilaoName>
            </Type>
          </Details>

          <IconsDesc>
            <div className="lotes">
              <DirectionsCarIcon />
              <Typography color="text.secondary" className="bold">
                {lotes}
              </Typography>
            </div>
            <div className="lotes">
              <AuctionIcon />
              <Typography color="text.secondary" className="bold">
                {lotes_leiloados}
              </Typography>
            </div>{" "}
            <div className="lotes">
              <RemoveRedEyeIcon />
              <Typography color="text.secondary" className="bold">
                {views}
              </Typography>
            </div>
          </IconsDesc>
          <Date label={status} />
        </CustomCardContent>
      </CardActionArea>
    </Container>
  );
};

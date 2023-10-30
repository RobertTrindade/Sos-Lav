"use client";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Typography,
  css,
  styled,
} from "@mui/material";

export const Container = styled(Card)`
  width: 350px;
  flex: none;
  margin-bottom: 10px;
  margin-left: 1px;
`;

export const CustomCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Tag = styled(Chip)`
  background-color: ${({ theme, label }) =>
    label === "Leilão esclusivo" ? theme.palette.primary.main : "rgb(255, 118, 77)"};
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  font-weight: bold;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 8px 3px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px;
  margin-top: 20px;
  margin-left: 10px;
`;

export const Details = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Date = styled(Chip)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: white;
  font-weight: bold;
  margin-top: 20px;
`;

export const Type = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 100px;
    height: 40px;
  }
`;

export const Title = styled(Typography)`
  font-weight: 500;
`;
export const Description = styled(Typography)`
  height: 90px;
  overflow-y: hidden;
`;

export const LeilaoName = styled(Typography)`
  font-weight: 500;
`;

export const IconsDesc = styled(Box)`
  display: flex;
  gap: 20px;
  .lotes {
    display: flex;
    align-items: center;
    gap: 10px;
    .bold {
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
    }
    path {
      color: gray;
    }
  }
`;

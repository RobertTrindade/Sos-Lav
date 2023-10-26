"use client";
import { Box, Typography, styled } from "@mui/material";
import { IconButton } from "@mui/material";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import { CardContent } from "@mui/material";

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  gap: 5px;
  ${({ theme }) => theme.breakpoints.down("desktop")} {
    margin-top: 24px;
  }

  ${({ theme }) => theme.breakpoints.down("tablet")} {
    margin-top: 32px;
  }
  ${({ theme }) => theme.breakpoints.down("mobile")} {
    margin-top: 12px;
  }
`;
export const Title = styled(Typography)`
  font-size: 35px;
  font-weight: 600;

  ${({ theme }) => theme.breakpoints.down("desktop")} {
    font-size: 35px;
    font-weight: 600;
  }

  ${({ theme }) => theme.breakpoints.down("tablet")} {
    font-size: 16px;
    font-weight: 600;
  }
  ${({ theme }) => theme.breakpoints.down("mobile")} {
    font-size: 16px;
    font-weight: 600;
  }
`;

export const CategoriesContainer = styled(Box)`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  ${({ theme }) => theme.breakpoints.down("tablet")} {
    overflow-x: scroll;
    flex-wrap: nowrap;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  padding-top: 10px;

  padding-bottom: 1px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const CustomIconButton = styled(IconButton)``;

export const CustomCard = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: none;
`;

export const CustomCardActionArea = styled(CardActionArea)`
  display: flex;
`;

export const ButtonActionArea = styled(Box)`
  border-radius: 100%;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  path {
    color: white;
  }
`;

export const CustomCardContent = styled(CardContent)`
  ${({ theme }) => theme.breakpoints.down("desktop")} {
    margin-top: 24px;
  }

  ${({ theme }) => theme.breakpoints.down("tablet")} {
    margin-top: 32px;
  }
  ${({ theme }) => theme.breakpoints.down("mobile")} {
    margin-top: 12px;
  }
`;

export const CardLabel = styled(Typography)`
  font-size: 18px;
  font-weight: 500;
`;

export const CardLabelQuantity = styled(Typography)`
  font-size: 11px;
  font-weight: 500;
  color: #9b9ca0;
`;

"use client";
import { Box, IconButton, styled, Typography } from "@mui/material";

export const Container = styled(Box)`
  margin-top: 64px;
  margin-bottom: 64px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const LeilaoContainer = styled(Box)`
  margin-top: 20px;
  display: flex;

  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.palette.primary.main};
  }

  .SwipeContainer {
    ${({ theme }) => theme.breakpoints.down("tablet")} {
      display: flex;
      justify-content: center;
    }
  }
`;

export const Main = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${({ theme }) => theme.breakpoints.down("mobile")} {
    display: flex;
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

export const PrevIconButton = styled(IconButton)`
  left: 0;
  top: 50%;
  background-color: white;
  z-index: 99999;
  border-radius: 100%; /* Borda arredondada à esquerda */
  width: 50px;
  min-width: 50px;
  height: 50px;
  position: absolute;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 8px 3px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px;

  color: ${({ theme }) => theme.palette.primary.main};
  &:hover {
    background-color: white;
  }
  &:disabled {
    display: none;
  }
  svg {
    transform: scale(1);
  }
`;

export const NextIconButton = styled(IconButton)`
  position: absolute;
  right: 0;
  top: 50%;
  z-index: 99999;
  color: ${({ theme }) => theme.palette.primary.main};
  background-color: white;
  border-radius: 100%; /* Borda arredondada à esquerda */
  height: 50px;
  min-width: 50px;
  width: 50px !important;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 8px 3px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px;
  &:disabled {
    display: none;
  }
  svg {
    transform: scale(1);
  }
  &:hover {
    background-color: white;
  }
`;

export const ContainerLeiloes = styled(Box)`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 20px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

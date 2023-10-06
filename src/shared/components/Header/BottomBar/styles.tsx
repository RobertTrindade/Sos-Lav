"use client";
import { BottomNavigation, Box, styled } from "@mui/material";

export const Container = styled(Box)`
  display: none;

  ${({ theme }) => theme.breakpoints.down("tablet")} {
    display: flex;
  }
`;

export const CustomBottomNavigation = styled(BottomNavigation)`
  display: none;

  ${({ theme }) => theme.breakpoints.down("tablet")} {
    display: flex;
    bottom: 0;
    width: 100vw;
    height: 80px;
    position: fixed;
    z-index: 999;
    background-color: white;
  }
`;

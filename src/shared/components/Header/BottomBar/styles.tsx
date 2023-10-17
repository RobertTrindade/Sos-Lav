"use client";
import { BottomNavigation, Box, styled } from "@mui/material";

export const Container = styled(Box)`
  display: none;
  margin-top: 200px;
  ${({ theme }) => theme.breakpoints.down("laptop")} {
    display: flex;
  }
  
  ${({ theme }) => theme.breakpoints.down("laptop")} {
    margin-top: 80px;

  }
`;

export const CustomBottomNavigation = styled(BottomNavigation)`
  display: none;

  ${({ theme }) => theme.breakpoints.down("laptop")} {
    display: flex;
    bottom: 0;
    width: 100vw;
    height: 80px;
    position: fixed;
    z-index: 999;
    background-color: white;
  }
`;

"use client";

import { BottomNavigationAction, styled } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";

export const CustomNavigation = styled(BottomNavigation)`
  position: fixed;
  bottom: 0;
  width: 100vw;
  bottom: 0;
  height: 62px;
  z-index: 999;
  box-shadow: -4px -4px 8px #0b2f6314;
`;

export const CustomBottomNavigationAction = styled(BottomNavigationAction)`
  gap: 7px;
  font-weight: bold;
`;

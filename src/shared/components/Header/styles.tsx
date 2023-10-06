"use client";
import { AppBar, Box, styled } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

export const NavBar = styled(AppBar)`
  background-color: white;
  color: black;
  height: 80px;
  ${({ theme }) => theme.breakpoints.down("laptop")} {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const CustomToolbar = styled(Toolbar)`
  max-width: 1320px;
  width: 100%;
  margin: 0 auto;
  padding: 0 !important;
  display: flex;
  justify-content: space-between;
  ${({ theme }) => theme.breakpoints.down("laptop")} {
    display: none;
  }
`;

export const Header = styled(Box)``;

export const CustomIconButton = styled(IconButton)`
  img {
    width: 150px;
    ${({ theme }) => theme.breakpoints.down("laptop")} {
      width: 100px;
    }
  }
`;

export const MobileLogo = styled(Box)`
  ${({ theme }) => theme.breakpoints.up("laptop")} {
    display: none;
  }
`;

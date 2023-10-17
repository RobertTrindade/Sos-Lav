"use client";
import { Box, ListItemButton, ListItemText, styled } from "@mui/material";
import { IconButton } from "@mui/material";

export const Container = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  align-items: center;

  ${({ theme }) => theme.breakpoints.between("laptop", "desktop")} {
    padding: 64px;
    margin-bottom: 300px;
  }
  ${({ theme }) => theme.breakpoints.up("desktop")} {
    margin-bottom: 300px;
  }

  ${({ theme }) => theme.breakpoints.down("tablet")} {
    padding: 32px;
    flex-direction: column;
    align-items: start;
    gap: 10px;
  }
  ${({ theme }) => theme.breakpoints.down("mobile")} {
    padding: 16px;
  }
`;

export const Footer = styled(Box)`
  max-width: 1320px;
  width: 100%;
  margin: 0 auto;
  padding: 0 !important;
  border-top: 1px solid #dadada;
`;

export const CustomIconButton = styled(IconButton)`
  ${({ theme }) => theme.breakpoints.up("tablet")} {
    width: 150px;
  }
`;

export const CustomListItemText = styled(ListItemText)`
  span {
    color: #3e4042;

    font-weight: 600;
  }
`;

export const CustomListItemButton = styled(ListItemButton)`
  display: flex;
  justify-content: space-between !important;
`;

export const CustomListSubItemButton = styled(ListItemButton)`
  color: #3e4042;
`;

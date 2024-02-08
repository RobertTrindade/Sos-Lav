"use client";
import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  styled,
} from "@mui/material";
import { IconButton } from "@mui/material";

export const Container = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  align-items: center;

  ${({ theme }) => theme.breakpoints.between("laptop", "desktop")} {
    padding: 64px;
    margin-bottom: 50px;
  }
  ${({ theme }) => theme.breakpoints.up("desktop")} {
    margin-bottom: 50px;
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
  max-width: 1400px;
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
  gap: 10px;
  width: 200px;
`;

export const CustomListSubItemButton = styled(ListItemButton)`
  display: flex;
  gap: 8px;
`;

export const IconsContainer = styled(Box)`
  display: flex;
  flex-direction: column;

  align-items: start;
  .socialMediasFooter {
    button {
      width: fit-content;
    }
  }
`;

export const ListItemContainer = styled(Box)``;
export const ListComponent = styled(List)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CustomSubItem = styled(Typography)`
  color: #3e4042;
  font-weight: 400;

  &.bold {
    color: ${({ theme }) => theme.palette.primary.main};
    font-weight: bold;
  }
`;
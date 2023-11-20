"use client";
import { Box, IconButton, Typography, styled } from "@mui/material";

export const NavBar = styled(Box)`
  margin-top: 20px;
  margin-bottom: 36px;
  align-items: center;
  display: flex;
  padding: 0px 32px;
  justify-content: space-between;
`;

export const TitlePage = styled(Typography)`
  color: #fff;
  text-align: center;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const CustomIconButton = styled(IconButton)`
  border: 1px solid;
  border-radius: 14px;
  border: 2px solid #303033;
  padding: 15px;
`;

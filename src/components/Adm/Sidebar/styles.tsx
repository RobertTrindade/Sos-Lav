"use client";
import { Box, IconButton, Typography, styled } from "@mui/material";

export const Container = styled(Box)`
  background-color: #f6f7f9;
  border-right: 2px solid #e9ebec;
  height: 100vh;
  padding: 20px;
  max-width: 300px;
  width: 100%;
`;

export const Content = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled(Typography)``;

export const CustomIconButton = styled(IconButton)`
  img {
    width: 80px;
  }
`;

"use client";
import { Box, Typography, styled } from "@mui/material";

export const Container = styled(Box)``;

export const Content = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 16px;

  gap: 12px;
`;

export const Header = styled(Box)`
  display: flex;
  align-items: center;
  gap: 80px;
`;

export const Title = styled(Typography)`
  font-weight: bold;
  font-size: 20px;
`;

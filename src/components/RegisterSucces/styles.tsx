"use client";
import { Box, Typography, styled } from "@mui/material";

export const Container = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  flex-direction: column;
  gap: 20px;
  svg {
    width: 100px;
    height: 100px;
  }
`;

export const CustomTypography = styled(Typography)`
  margin-bottom: 50px;
  text-align: center;
  font-weight: bold;
  font-size: 14px;

  ${({ theme }) => theme.breakpoints.up("tablet")} {
    font-size: 17px;
  }
`;

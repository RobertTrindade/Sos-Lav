"use client";
import { Box, styled,Chip } from "@mui/material";

export const Container = styled(Box)`
  margin-top: 64px;

  ${({ theme }) => theme.breakpoints.down("mobile")} {
    padding: 16px;
    margin-top: 34px;
  }
  margin-bottom: 64px;

`;



export const LeilaoContainer = styled(Box)`
  margin-top: 40px;

`;


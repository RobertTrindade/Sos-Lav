"use client";
import { Box, styled, Typography } from "@mui/material";

export const Container = styled(Box)`
  margin-top: 64px;

  margin-bottom: 64px;
`;

export const LeilaoContainer = styled(Box)`
  margin-top: 40px;
`;

export const Main = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ theme }) => theme.breakpoints.down("mobile")} {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

export const Title = styled(Typography)`
  font-size: 20px;
  font-weight: 500;
`;

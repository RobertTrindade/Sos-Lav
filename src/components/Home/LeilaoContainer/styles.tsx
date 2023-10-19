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
  flex-direction: column;
  gap: 12px;

  ${({ theme }) => theme.breakpoints.down("mobile")} {
    display: flex;
  }
`;

export const Title = styled(Typography)`
  font-size: 35px;
  font-weight: 600;

  ${({ theme }) => theme.breakpoints.down("desktop")} {
    font-size: 35px;
    font-weight: 600;
  }

  ${({ theme }) => theme.breakpoints.down("tablet")} {
    font-size: 16px;
    font-weight: 600;
  }
  ${({ theme }) => theme.breakpoints.down("mobile")} {
    font-size: 16px;
    font-weight: 600;
  }
`;

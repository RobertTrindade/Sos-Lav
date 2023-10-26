"use client";
import { Box, styled } from "@mui/material";

export const Container = styled(Box)`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 0 !important;
  margin-top: 10px;
`;

export const Main = styled(Box)`
  ${({ theme }) => theme.breakpoints.down("desktop")} {
    padding: 64px;
  }

  ${({ theme }) => theme.breakpoints.down("tablet")} {
    padding: 32px;
  }
  ${({ theme }) => theme.breakpoints.down("mobile")} {
    padding: 16px;
  }
`;

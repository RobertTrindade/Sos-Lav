"use client";
import { Box, Typography, styled } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";

export const Container = styled(Box)`
  padding: 100px 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${({ theme }) => theme.breakpoints.down("laptop")} {
    padding: 100px 32px;
  }
  ${({ theme }) => theme.breakpoints.down("tablet")} {
    padding: 100px 16px;
  }
`;

export const ApreensoesContainer = styled(Box)``;
export const ApreensoesContainerTitle = styled(Typography)`
  font-size: 20px;
  font-weight: bold;
`;

export const CustomLineChart = styled(LineChart)`
  .customLineChart {
    background-color: red;
  }
`;

"use client";
import { Box, Typography, styled } from "@mui/material";

export const Container = styled(Box)``;

export const Label = styled(Typography)`
  font-size: 16px;

  ${({ theme }) => theme.breakpoints.down("tablet")} {
    display: none;
  }
`;

export const StepTitle = styled(Typography)`
  margin-top: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.primary.main};

  ${({ theme }) => theme.breakpoints.down("tablet")} {
    font-size: 14px;
    font-weight: 600;
  }
`;

export const StepDesc = styled(Typography)`
  margin-top: 10px;
  font-weight: 300;

  ${({ theme }) => theme.breakpoints.down("tablet")} {
    font-size: 13px;
    font-weight: 300;
  }
`;

export const ButtonContainer = styled(Box)`
  display: flex;
  gap: 150px;
  margin-top: 40px;
  margin-bottom: 40px;

  ${({ theme }) => theme.breakpoints.down("tablet")} {
    gap: 30px;
  }
`;

"use client";
import { Box, styled } from "@mui/material";

export const Container = styled(Box)`
  display: flex;
  gap: 10px;
  flex-direction: column;
  margin-top: 20px;

  .StatesAndCities {
    display: flex;
    gap: 10px;

    ${({ theme }) => theme.breakpoints.down("tablet")} {
      flex-direction: column;
      gap: 10px;
    }
  }
`;

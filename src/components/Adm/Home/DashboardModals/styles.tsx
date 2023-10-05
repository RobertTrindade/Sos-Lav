"use client";
import { Box, Typography, styled } from "@mui/material";
import Paper from "@mui/material/Paper";

export const Container = styled(Box)`
  display: flex;
  justify-content: space-between;
  min-width: 900px;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const CustomPaper = styled(Paper, {
  shouldForwardProp(propName) {
    return propName !== "color";
  },
})<{
  color?: string;
}>`
  width: 250px;
  height: 130px;
  padding: 20px;
  border-radius: 18px;
  display: flex;
  justify-content: space-between;
  color: ${({ color }) => color};
  align-items: center;
  .values {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled(Typography)`
  color: #707070;
  font-weight: 400;
`;

export const Value = styled(Typography)`
  font-weight: 500;
  font-size: 32px;
  color: ${({ theme }) => theme.palette.primary.main};
`;

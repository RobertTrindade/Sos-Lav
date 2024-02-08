"use client";
import { Box, Button, Typography, css, styled } from "@mui/material";

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 16px;

  ${({ theme }) => theme.breakpoints.up("tablet")} {
    display: none;
  }
`;

export const Content = styled(Box)`
  display: flex;
  flex-direction: column;

  img {
    width: 100vw;
    height: 60vh;
  }
`;

export const Title = styled(Typography)`
  text-align: center;
  font-weight: 600;
  font-size: 25px;
`;

export const Description = styled(Typography)`
  color: #7e8895;
  text-align: center;
  font-weight: 500;
  font-size: 18px;
`;

export const StepArea = styled(Box)`
  display: flex;
  width: 100%;
  display: flex;
  justify-content: space-between;
  bottom: 0;
  align-items: center;
  padding: 40px 20px;
`;

export const StepIndicator = styled(Box)`
  display: flex;
  gap: 3px;
`;

export const NextArea = styled(Box)``;

export const CustomBtn = styled(Button)`
  font-weight: bold;
`;

export const Step = styled(Box, {
  shouldForwardProp: (propName) => propName !== "active",
})<{
  active: boolean;
}>`
  width: 20px;
  height: 8px;
  background-color: #7e8895;
  border-radius: 3px;
  ${({ active, theme }) =>
    active &&
    css`
      width: 30px;
      height: 8px;
      background-color: ${theme.palette.primary.main};
    `}
`;

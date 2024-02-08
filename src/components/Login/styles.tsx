"use client";
import { Box, Checkbox, Typography, styled } from "@mui/material";

export const Container = styled(Box)``;

export const Content = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 16px;

  gap: 12px;
  img {
    width: 100vw;
    height: 40vh;
  }
`;

export const PassRecovery = styled(Typography)`
  font-size: 13px;
  align-items: start;
  font-weight: bolder !important;


`;

export const Title = styled(Typography)`
  color: #ff9e00;
  text-align: center;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Register = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  color: #7e8895;
  margin-top: 30px;
  span {
    color: ${({ theme }) => theme.palette.primary.main};
    font-weight: bolder !important;
  }
`;

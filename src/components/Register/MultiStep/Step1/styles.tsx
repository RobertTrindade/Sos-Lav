"use client";
import {
  FormControl,
  FormControlLabel,
  Typography,
  styled,
} from "@mui/material";

export const Container = styled(FormControl)`
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const CustomFormLabel = styled(FormControlLabel)`
  font-size: 14px;
`;

export const Label = styled(Typography)`
  font-size: 14px;
  font-weight: 600;

  ${({ theme }) => theme.breakpoints.down("tablet")} {
    font-size: 12px;
  }
`;

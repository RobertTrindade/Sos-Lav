"use client";
import { Box, Typography, styled } from "@mui/material";

export const Container = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 0px 32px;
`;

export const BackArea = styled(Box)``;

export const Title = styled(Typography)``;

export const Content = styled(Box)`
  display: flex;
  gap: 20px;

  .CnhArea {
    position: relative;
    height: 500px;
    flex: 1;
  }
  .contentArea {
    display: flex;
    gap: 20px;
    div{
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
`;

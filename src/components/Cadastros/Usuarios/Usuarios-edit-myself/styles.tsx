"use client";
import { Box, Typography, styled } from "@mui/material";

export const Container = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 0px 32px;
  margin-bottom: 40px;
`;

export const Title = styled(Typography)`
  color: #fff;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const Content = styled(Box)`
  display: flex;
  width: 100%;
  ${({ theme }) => theme.breakpoints.down("tablet")} {
    flex-direction: column;
    margin-bottom: 30px;
  }
`;


export const TabResultArea = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  .actionArea {
    display: flex;
    align-items: center;
    gap: 40px;
  }
`;

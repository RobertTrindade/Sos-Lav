"use client";
import { Box, Button, IconButton, styled } from "@mui/material";

export const Container = styled(Box)`
  display: flex;
  width: 100%;
  margin-top: 50px;

`;

export const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ActionButton = styled(Button)`
  border-radius: 14px;
  border: 2px solid #303033;
  padding: 10px 40px;

  color: #fff;
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;


export const CustomIconButton = styled(IconButton)`
  border: 1px solid;
  border-radius: 14px;
  border: 2px solid #303033;
  padding: 15px;
`;



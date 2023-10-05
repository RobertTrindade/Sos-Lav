"use client";
import { Box, IconButton, Typography, styled } from "@mui/material";

export const Container = styled(Box)`
  background-color: #f6f7f9;
  border-right: 2px solid #e9ebec;
  height: 100vh;
  padding: 20px;
  max-width: 300px;
  width: 100%;
`;

export const Content = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled(Typography)`
  font-weight: 500;
`;

export const CustomIconButton = styled(IconButton)`
  img {
    width: 80px;
  }
`;

export const Nav = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  div {
    margin-bottom: 10px;
  }
`;
export const NavItem = styled(Box)`
  display: flex;
  gap: 20px;
  cursor: pointer;
`;

export const CategoryTitle = styled(Typography)`
  font-weight: 500;
  color: #848d99;
  margin-bottom: 10px;
  font-size: 14px;
`;

export const NavTitle = styled(Typography)`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
`;

"use client";
import { Box, Typography, styled } from "@mui/material";

export const Container = styled(Box)`
  width: 100%;

`;

export const Content = styled(Box)``;

export const Title = styled(Typography)`
  font-size: 24px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`;

export const CategoryContainer = styled(Box)`
  overflow-x: auto; /* Adicionado overflow-x: auto para permitir scroll horizontal */
  overflow-y: hidden; /* Adicionado overflow-y: hidden para esconder scroll vertical */
  white-space: nowrap; /* Impede que os itens quebrem para a próxima linha */
  display: flex;
  gap: 10px;
  ::-webkit-scrollbar-thumb {
    display: none;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const CategoryCard = styled(Box)`
  min-width: 250px;
  height: 400px;
  border-radius: 20px;
  margin-top: 16px;
  background-color: #f8f8f8 !important;
  display: flex;
  justify-content: space-around;
  &:hover {
    border: ${({ theme }) => theme.palette.primary.main} 3px solid;
  }
  align-items: center;
  flex-direction: column;
  img {
    width: 200px;
  }
`;
export const CategoryTitle = styled(Typography)`
  font-size: 18px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`;

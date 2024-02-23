"use client";
import { Box, Typography, styled } from "@mui/material";

export const Container = styled(Box)`
  width: 100%;
  margin-bottom: 100px;
`;

export const Content = styled(Box)``;

export const Title = styled(Typography)`
  font-size: 24px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`;

export const DepositionContainer = styled(Box)`
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

export const DepositionCard = styled(Box)`
  min-width: 300px;
  height: 450px;
  border-radius: 20px;
  margin-top: 16px;
  background-color: #f8f8f8 !important;
  display: flex;
  padding: 24px;
  justify-content: space-between;
  &:hover {
    border: ${({ theme }) => theme.palette.primary.main} 3px solid;
  }
  flex-direction: column;
`;
export const Text = styled(Typography)`
  white-space: pre-line;
`;

export const NameArea = styled(Box)`
`;

export const Name = styled(Typography)`
  white-space: pre-line;
  color: ${({ theme }) => theme.palette.primary.main} ;
  font-weight: bold;
  
`;

export const Area = styled(Typography)`
  white-space: pre-line;
  color: ${({ theme }) => theme.palette.primary.main} ;

`;

export const Divider = styled(Box)`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.palette.primary.main} ;

`;

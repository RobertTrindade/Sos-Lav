"use client";
import { Card, CardContent, Typography, styled } from "@mui/material";

export const Container = styled(Card)`
  width: 350px;
  flex: none;
  margin-bottom: 10px;
  margin-left: 1px;
  margin-top: 2px;
`;

export const CustomCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 8px;
  border-radius: 8px;
  flex: 1 0 auto;
  order: 0;
  .iconArea {
    svg {
      transform: scale(2);
    }
  }
  .titleArea {
    border-bottom: 1px solid rgb(218, 218, 218);
    padding-bottom: 40px;
  }
  .nameAreaStateArea {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
`;

export const Title = styled(Typography)`
  font-size: 15px;
  height: 150px;
 
`;

export const Name = styled(Typography)`
  font-size: 18px;
  font-weight: 500;
`;

export const ClienteAreaType = styled(Typography)`
  font-size: 16px;
  font-weight: 400;
`;

export const City = styled(Typography)`
  font-size: 14px;
  font-weight: 300;
`;

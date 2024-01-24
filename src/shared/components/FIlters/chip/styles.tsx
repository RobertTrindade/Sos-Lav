import { Chip, Stack, ToggleButton, ToggleButtonGroup, Typography, styled } from "@mui/material";

export const CustomChips = styled(Chip)`
  box-sizing: border-box;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
 
`;

export const Label = styled(Typography)`
  color:${({ theme }) => theme.palette.secondary.main};
  font-weight: bold;
  font-size: 15px;
`;

export const CustomToggleButtonGroup = styled(ToggleButtonGroup)`
  display: flex;
  gap: 10px;
  flex-direction: row;
  flex-flow: wrap;
 
`;



export const CustomToggleButton = styled(ToggleButton)`
  display: flex;
  gap: 20px;
  color:${({ theme }) => theme.palette.secondary.main};
  font-weight: bold;
  font-size: 14px;
  border-radius: 50px !important; 
  border: 1px solid ${({ theme }) => theme.palette.secondary.main} !important;

`;

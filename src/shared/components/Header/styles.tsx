import { AppBar, Box, Toolbar, styled } from "@mui/material";

export const CustomHeader = styled(AppBar)`
  background-color: white !important;
  box-shadow: none !important;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  
`;

export const CustomToolbar = styled(Toolbar)`
  background-color: white !important;
  box-shadow: none !important;
  display: flex;
  justify-content: space-between;
`;

export const Userdata = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 4px;
  .name {
    font-weight: bold;
    text-align: center;
    color: ${({ theme }) => theme.palette.secondary.main};
  }
  .data {
    text-align: center;
    color: #aaaaaa;
  }
`;

export const AvatarArea = styled(Box)`
  display: flex;
  flex-direction: column;
`;

import { AppBar, Box, Toolbar, styled } from "@mui/material";

export const CustomHeader = styled(AppBar)`
  background-color: #e3ebf2 !important;
  box-shadow: none !important;
  height: 90px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const CustomToolbar = styled(Toolbar)`
  background-color: #e3ebf2 !important;
  box-shadow: none !important;
  display: flex;
  justify-content: space-between;
`;

export const Userdata = styled(Box)`
  display: flex;
  flex-direction: column;
`;


export const AvatarArea = styled(Box)`
  display: flex;
  flex-direction: column;
`;

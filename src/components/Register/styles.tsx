"use client";
import { Box, Button, Tab, Tabs, Typography, css, styled } from "@mui/material";

export const Header = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  margin-top: 40px;
`;

export const Title = styled(Typography)`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  ${({ theme }) => theme.breakpoints.down("tablet")} {
    font-size: 16px;
  }
`;
export const SubTitle = styled(Typography)`
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
  ${({ theme }) => theme.breakpoints.down("tablet")} {
    font-size: 13px;
  }
`;
export const Container = styled(Box)`
  max-width: 800px;
  margin: 20px auto;

  ${({ theme }) => theme.breakpoints.down("md")} {
    margin: 30px auto;
    max-width: 300px;
  }
`;

export const Divider = styled(Box)`
  border-bottom: solid 1px #ebeced;
  margin-bottom: 20px;
`;

export const CustomTabs = styled(Tabs)`
  border-bottom: solid 1px #ebeced;

  .MuiTabs-indicator {
    background-color: #ff6600 !important;
  }
  button.Mui-selected {
    color: rgba(0, 0, 0, 0.5);
    font-weight: bold;
    font-size: 13px;
    text-transform: none;
  }

  button {
    color: rgba(0, 0, 0, 0.5);
    font-size: 13px;
    text-transform: none;
  }
`;

export const CustomTab = styled(Tab)<{
  selected: boolean;
}>`
  border-bottom: solid 1px #ebeced;
  button {
  }
  display: flex;
  align-items: end;
  ${({ label }) =>
    label === "Pessoa Fisica" &&
    css`
      align-items: start;
    `}
`;

export const CustomForm = styled(Box)`
  gap: 30px;
  align-items: center;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  div {
    width: 230px !important;
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    display: flex;
    gap: 10px;
    div {
      width: 100% !important;
    }
    flex-direction: column;
  }
`;

export const CustomButtonText = styled(Button)`
  text-transform: capitalize;
  color: #ff6600 !important;
`;

export const ExtraOptions = styled(Box)`
  display: flex;
  align-items: end;
  a {
    color: #ff6600 !important;
    margin-left: 2px;
    font-weight: bold;
  }
`;

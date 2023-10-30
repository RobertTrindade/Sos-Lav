"use client";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  Tab,
  Tabs,
  Typography,
  css,
  styled,
} from "@mui/material";

export const TwoSides = styled(Box)`
  display: flex;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 0 !important;
  height: 100vh;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const FirstSide = styled(Box)`
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
`;


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

export const NotMember = styled(Typography)`
  font-size: 15px;
  text-align: end;
  margin-bottom: 64px;
  a {
    color: #ff6600;
    font-weight: bold;
    text-transform: none;
  }

  ${({ theme }) => theme.breakpoints.down("tablet")} {
    font-size: 13px;
    margin-bottom: 40px;
  }
`;

export const Container = styled(Box)`
  max-width: 400px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  ${({ theme }) => theme.breakpoints.down("tablet")} {
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
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  width: 100%;
`;

export const CustomFormControl = styled(FormControl)`
  display: flex;
  justify-content: center;
`;

export const CustomInputLabel = styled(InputLabel)`
  background-color: white;
  font-size: 13px;
`;

export const CustomFilledInput = styled(OutlinedInput)`
  border-radius: 8px;
  height: 50px;
  background-color: white;
`;

export const CustomButtonText = styled(Button)`
  text-transform: capitalize;
  color: #ff6600 !important;
`;

export const ExtraOptions = styled(Box)`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .forgetPass {
    text-align: end;
    a {
      color: #ff6600;
      font-size: 12px;
      font-weight: 600;
      text-decoration: none;
    }
  }
  a {
    color: #35acee;
  }
`;

export const SocialMedias = styled(Box)`
  margin-top: 20px;
  .SocialMedia {
    font-size: 14px;
    align-items: center;
    font-weight: 700;
    text-align: center;
  }
  .SocialMediaIcons {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    gap: 10px;
  }
`;

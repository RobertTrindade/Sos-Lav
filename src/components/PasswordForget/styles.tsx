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

  ${({ theme }) => theme.breakpoints.down("tablet")} {
    margin: 30px auto;
    max-width: 300px;
  }
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

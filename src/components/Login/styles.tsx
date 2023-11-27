"use client";
import { Box, Checkbox, Typography, styled } from "@mui/material";

export const Container = styled(Box)`
  display: flex;

`;

export const ErrorMessage = styled(Typography)`
  color: red;
  font-weight: bold;
  font-size: 13px;

  ${({ theme }) => theme.breakpoints.down("tablet")} {
    font-size: 13px;
  }
`;

export const FirstSide = styled(Box)`
  height: 100vh;
  background: #f9f9f9;
  padding: 0 64px;
  ${({ theme }) => theme.breakpoints.down("tablet")} {
    display: none;
  }
`;

export const FirstSideContent = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 97px;
  margin-top: 200px;
`;

export const Title = styled(Typography)`
  color: #ff9e00;
  text-align: center;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const SubTitle = styled(Typography)`
  color: #000;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

/// Second side

export const SecondSide = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 64px;

  max-width: 600px;
  width: 100%;

  ${({ theme }) => theme.breakpoints.down("tablet")} {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100vw;
    padding: 0 15px;
    margin-top: 50px;
  }
`;

export const SecondSideContent = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  .header {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
    .circle {
      width: 200px;
      height: 200px;
      border-radius: 100%;
      background-color: white;
      display: flex;
      flex-direction: column;

      align-items: center;
      justify-content: center;
    }
  }

  ${({ theme }) => theme.breakpoints.down("tablet")} {
    font-size: 10px;
    gap: 60px;
  }
`;

export const Form = styled("form")`
  gap: 20px;
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.breakpoints.down("tablet")} {
    font-size: 10px;
    gap: 10px;
  }
`;

export const CustomCheckBox = styled(Checkbox)`
  color: #999a9a;
  display: block;
`;
export const TitleSecondSide = styled(Typography)`
  color: #f60;
  text-align: center;
  font-size: 30px;
  font-style: normal;
  font-weight: bold;

  ${({ theme }) => theme.breakpoints.down("tablet")} {
    font-size: 20px;
  }
`;

export const TitleSubSecondSide = styled(Typography)`
  color: #f60;
  text-align: center;
  font-size: 20px;
  font-style: normal;

  ${({ theme }) => theme.breakpoints.down("tablet")} {
    font-size: 18px;
  }
`;
export const CheckBoxContainer = styled(Box)`
  display: flex;
  align-items: center;
`;
export const CheckBoxText = styled(Typography)`
  color: #999a9a;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 4px;
`;

export const PassForget = styled(Typography)`
  color: #f60;
  text-align: right;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration: none;

  cursor: pointer;

  ${({ theme }) => theme.breakpoints.down("tablet")} {
    font-size: 15px;
  }
`;

export const FormFooter = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 50px;
  .OrContent {
    align-items: center;
    display: flex;
    justify-content: space-between;
    .FormFooterTitle {
      color: #f60;
      text-align: center;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }
  .SocialMediaArea {
    display: flex;
    align-items: center;
    gap: 30px;
    justify-content: center;
    .socialMediaDescription {
      color: #fff;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }
`;

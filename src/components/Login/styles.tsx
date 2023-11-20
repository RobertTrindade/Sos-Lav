"use client";
import { Box, Checkbox, Typography, styled } from "@mui/material";

export const Container = styled(Box)`
  display: flex;
  gap: 250px;
`;

export const FirstSide = styled(Box)`
  width: 547px;
  height: 100vh;
  border-radius: 15px;
  background: #f9f9f9;
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
`;

export const SecondSideContent = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 200px;
`;

export const Form = styled(Box)`
  width: 486.716px;
  gap: 20px;
  display: flex;
  flex-direction: column;
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
  font-weight: 500;
  line-height: normal;
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
  text-align: left;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration: none;
  
`;

export const FormFooter = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 50px;
  .OrContent {
    align-items: center;
    display: flex;
    gap: 10px;

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

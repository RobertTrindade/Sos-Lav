"use client";
import { FormControl, InputLabel, Typography, styled } from "@mui/material";
import { IInputProps } from ".";

export const Container = styled(FormControl, {
  shouldForwardProp: (props) => props !== "customStyles",
})<{
  customStyles: IInputProps["customStyles"];
}>`
  ${({ customStyles }) => customStyles}
  outline: none !important;

  .MuiInputBase-root {
    border-radius: 14px;
    height: 70px;

    border: none;
    background-color: transparent !important ;
    ${({ customStyles }) => customStyles}
  }

  .MuiOutlinedInput-root {
    border: none;
    background-color: transparent !important  ;
    border: 2px solid #303033 !important ;
  }

  .MuiInputBase-formControl {
    border: none;
    background-color: transparent !important  ;
  }

  input {
    background-color: transparent !important  ;
    outline: none !important ;

    color: #999a9a !important ;
  }
`;

export const CustomInputLabel = styled(InputLabel)`
  margin-bottom: 12px;
`;

export const CustomInputText = styled(Typography)`
  margin-bottom: 12px;
  color: #f60;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

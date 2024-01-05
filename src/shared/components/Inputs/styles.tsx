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

  textarea {
    color: ${({ theme }) => theme.palette.secondary.main} !important ;
  }
  .MuiInputBase-root {
    border-radius: 14px;
    height: 60px;

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

    color: ${({ theme }) => theme.palette.secondary.main} !important ;
  }
`;

export const CustomInputLabel = styled(InputLabel)`
  margin-bottom: 12px;
`;

export const CustomInputText = styled(Typography)`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 10px;

  ${({ theme }) => theme.breakpoints.down("tablet")} {
    font-size: 15px;
  }
`;

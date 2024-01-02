"use client";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  styled,
} from "@mui/material";
import { IInputProps } from "../Inputs";

export const CustomSelectComponent = styled(Select)``;

export const CustomMenuItem = styled(MenuItem)`
`;

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
    width: max-content !important;
    color: #999a9a !important ;

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
  margin-bottom: 10px;
  color: #f60;
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

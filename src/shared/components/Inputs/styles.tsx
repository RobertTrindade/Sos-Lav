"use client";
import { FormControl, InputLabel, styled } from "@mui/material";
import { IInputProps } from ".";

export const Container = styled(FormControl, {
  shouldForwardProp: (props) => props !== "customStyles",
})<{
  customStyles: IInputProps["customStyles"];
}>`
  ${({ customStyles }) => customStyles}
  border: none;

  .MuiInputBase-root {
    border-radius: 10px;

    border: none;
    background-color: white !important ;
    ${({ customStyles }) => customStyles}
  }

  .MuiOutlinedInput-root {
    border: none;
    background-color: white !important ;
  }

  .MuiInputBase-formControl {
    border: none;
    background-color: white !important ;
  }

  input {
    background-color: white !important ;
    outline: none !important ;
    width: 100%;
    height: 15px;

    &::placeholder {
      font-size: 12px;
    }
  }
`;

export const CustomInputLabel = styled(InputLabel)``;

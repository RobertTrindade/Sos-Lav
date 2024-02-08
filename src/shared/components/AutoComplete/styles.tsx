"use client";
import { styled, Autocomplete } from "@mui/material";

export const CustomAutocomplete = styled(Autocomplete)`
  outline: none !important;

  .MuiInputBase-root {
    border-radius: 14px;

    border: 2px solid #303033 !important ;
    background-color: transparent !important ;
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
  svg {
    color: ${({ theme }) => theme.palette.secondary.main} !important ;
    padding-right: 5px;
  }
`;

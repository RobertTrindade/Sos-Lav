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

    color: #999a9a !important ;
  }
  svg {
    color: #999a9a !important ;
    padding-right: 5px;
  }
`;

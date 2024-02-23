"use client";
import { styled, Autocomplete } from "@mui/material";

export const CustomAutocomplete = styled(Autocomplete)`
  outline: none !important;

  .MuiInputBase-root {
    border-radius: 10px  !important ;

    background-color: transparent !important ;
  }

  .MuiOutlinedInput-root {
    border: none;
    background-color: transparent !important  ;
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

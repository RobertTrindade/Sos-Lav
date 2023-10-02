"use client";
import { styled, Autocomplete } from "@mui/material";

export const CustomAutocomplete = styled(Autocomplete)`
  border: none;

  .MuiInputBase-root {
    border-radius: 10px;
    border: none;
  }

  .MuiOutlinedInput-root {
    border: none;
  }

  .MuiInputBase-formControl {
    border: none;
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

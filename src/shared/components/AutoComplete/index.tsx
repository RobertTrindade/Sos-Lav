"use client";

import { CustomAutocomplete } from "./styles";

import * as React from "react";
import TextField from "@mui/material/TextField";

interface IAutoCompleteComponent {
  options: any;
  label: string;
  noOptionsText: string;
  value: INewValue | undefined;
  SetStateAction?: React.Dispatch<React.SetStateAction<INewValue | undefined>>;
}

export interface INewValue {
  label: string;
  id: number;
}

export const AutoCompleteComponent: React.FC<IAutoCompleteComponent> = ({
  label,
  options,
  SetStateAction,
  noOptionsText,
  value
}) => {
  return (
    <CustomAutocomplete
      disablePortal={false}
      id="combo-box-demo"
      options={options}
      fullWidth
      value={value}
      onChange={(event: any, newValue: any) => {
        SetStateAction!(newValue as INewValue);
      }}
      noOptionsText={noOptionsText}
      renderInput={(params) => (
        <TextField {...params} placeholder={label} fullWidth />
      )}
    />
  );
};

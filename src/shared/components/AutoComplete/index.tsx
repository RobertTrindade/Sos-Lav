"use client";

import { CustomAutocomplete } from "./styles";

import * as React from "react";
import TextField from "@mui/material/TextField";
import { IIbgeReturnDto } from "@/src/services/IBGE/ibge.service";

interface IAutoCompleteComponent {
  options: IIbgeReturnDto[];
  label: string;
  SetStateAction: React.Dispatch<
    React.SetStateAction<IIbgeReturnDto | undefined>
  >;
}

export const AutoCompleteComponent: React.FC<IAutoCompleteComponent> = ({
  label,
  options,
  SetStateAction,
}) => {
  return (
    <CustomAutocomplete
      disablePortal={false}
      id="combo-box-demo"
      options={options}
      fullWidth
      onChange={(event: any, newValue: unknown) => {
        SetStateAction(newValue as IIbgeReturnDto);
      }}
      noOptionsText="Cidade não encontrada"
      renderInput={(params) => (
        <TextField {...params} placeholder={label} fullWidth />
      )}
    />
  );
};

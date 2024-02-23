"use client";

import { CustomAutocomplete } from "./styles";

import * as React from "react";
import TextField from "@mui/material/TextField";
import {
  FilledInputProps,
  InputProps,
  OutlinedInputProps,
  SxProps,
  Theme,
} from "@mui/material";

interface IAutoCompleteComponent {
  options: any;
  label: string;
  noOptionsText: string;
  value?: INewValue | undefined | string | boolean;
  SetStateAction?: React.Dispatch<React.SetStateAction<any | undefined>>;
  target?: keyof any | string;
  setStateActionWithTarget?: (target: any, value: any) => void;
  sx?: SxProps<Theme> | undefined;
  multiple?: boolean;
  freeSolo?: boolean;

  InputProps?:
    | Partial<FilledInputProps>
    | Partial<OutlinedInputProps>
    | Partial<InputProps>
    | undefined;
  readonly?: boolean;
}

export interface INewValue {
  label: string;
  id: number;
  uf?: string;
}

export const AutoCompleteComponent: React.FC<IAutoCompleteComponent> = ({
  label,
  options,
  SetStateAction,
  noOptionsText,
  value,
  target,
  setStateActionWithTarget,
  sx,
  multiple = false,
  InputProps,
  freeSolo = false,
  readonly = false,
}) => {
  return (
    <CustomAutocomplete
      disablePortal={false}
      id="combo-box-demo"
      options={options}
      fullWidth
      freeSolo={freeSolo}
      disabled={!options}
      sx={sx}
      readOnly={readonly}
      multiple={multiple}
      value={value || null}
      onChange={(event: any, newValue: any) => {
        if (setStateActionWithTarget) {
          setStateActionWithTarget(target!, newValue);
          return;
        }
        if (SetStateAction) {
          SetStateAction!(newValue as INewValue);
        }
      }}
      isOptionEqualToValue={(option: any, value: any) =>
        isObjectEqual(option, value)
      }
      noOptionsText={noOptionsText}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder={label}
          fullWidth
          InputProps={{
            ...params.InputProps,
            ...InputProps,
          }}
        />
      )}
    />
  );
};

const isObjectEqual = (obj1: INewValue, obj2: INewValue) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (obj1[key as keyof INewValue] !== obj2[key as keyof INewValue]) {
      return false;
    }
  }

  return true;
};

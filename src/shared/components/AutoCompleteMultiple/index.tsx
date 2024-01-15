"use client";

import { CustomAutocomplete } from "./styles";

import * as React from "react";
import TextField from "@mui/material/TextField";
import { SxProps, Theme } from "@mui/material";

interface IAutoCompleteComponent {
  options: any;
  label: string;
  noOptionsText: string;
  SetStateAction?: React.Dispatch<React.SetStateAction<INewValue | undefined>>;
  target?: keyof any | string;
  setStateActionWithTarget?: (target: any, value: any) => void;
  sx?: SxProps<Theme> | undefined;
  multiple?: boolean;
  value?: string;
  customProps?: {
    value: any;
    onChange?: (event: React.ChangeEvent<any>) => void;
  };
}

export interface INewValue {
  label: string;
  id: number;
  uf?: string;
}

export const AutoCompleteComponentMultiple: React.FC<
  IAutoCompleteComponent
> = ({
  label,
  options,
  SetStateAction,
  noOptionsText,
  target,
  setStateActionWithTarget,
  sx,
  multiple = false,
  customProps,
}) => {
  return (
    <CustomAutocomplete
      disablePortal={false}
      id="combo-box-demo"
      options={options}
      fullWidth
      disabled={!options}
      sx={sx}
      multiple={multiple}
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
        <TextField {...params} placeholder={label} fullWidth />
      )}
      value={customProps?.value}
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

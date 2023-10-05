"use client";

import { FC, ReactNode } from "react";
import { Container } from "./styles";
import { OutlinedInput, OutlinedInputProps } from "@mui/material";

export interface IInputProps {
  customProps?: OutlinedInputProps;
  label: string;
  type: string;
  endAdornment?: ReactNode;
  customStyles?: {
    color?: string;
    backgroundColor?: string;
    width?: string;
    borderRadius?: string;
  };
}

export const InputComponent: FC<IInputProps> = ({
  customProps,
  customStyles,
  label,
  type,
  endAdornment,
}) => {
  return (
    <Container variant="filled" customStyles={customStyles} fullWidth>
      <OutlinedInput
        id={label}
        type={type}
        placeholder={label}
        endAdornment={endAdornment}
        {...customProps}
      />
    </Container>
  );
};

"use client";

import { FC, ReactNode } from "react";
import { Container, CustomInputLabel, CustomInputText } from "./styles";
import { OutlinedInput, OutlinedInputProps } from "@mui/material";

export interface IInputProps {
  customProps?: OutlinedInputProps;
  label?: string;
  type?: string;
  content?: string;
  endAdornment?: ReactNode;
  customStyles?: {
    color?: string;
    backgroundColor?: string;
    width?: string;
    borderRadius?: string;
    height?: string;
  };
}

export const InputComponent: FC<IInputProps> = ({
  customProps,
  customStyles,
  label,
  type,
  endAdornment,
  content,
}) => {
  return (
    <Container variant="filled" customStyles={customStyles} fullWidth>
      {content && <CustomInputText>{content}</CustomInputText>}
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

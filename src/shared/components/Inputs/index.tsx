"use client";

import React, { FC, ReactNode, forwardRef, ForwardedRef } from "react";
import { Container, CustomInputText } from "./styles";
import { OutlinedInput, OutlinedInputProps } from "@mui/material";

export interface IInputProps {
  customProps?: OutlinedInputProps;
  label?: string;
  type?: string;
  name?: string;
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

export const InputComponent: FC<IInputProps> = forwardRef(
  (
    {
      customProps,
      customStyles,
      label,
      type,
      endAdornment,
      content,
      ...rest
    }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <Container variant="filled" customStyles={customStyles} fullWidth >
        {content && <CustomInputText>{content}</CustomInputText>}
        <OutlinedInput
          id={label}
          type={type}
          placeholder={label}
          endAdornment={endAdornment}
          {...customProps}
          ref={ref} // Encaminha a ref para o componente filho
          {...rest}
        />
      </Container>
    );
  }
);

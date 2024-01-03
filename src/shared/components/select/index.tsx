"use client";

import React, { FC, ReactNode, forwardRef, ForwardedRef } from "react";
import {
  Container,
  CustomInputText,
  CustomMenuItem,
  CustomSelectComponent,
} from "./styles";
import { SelectProps } from "@mui/material";

export interface IInputProps {
  customProps?: SelectProps;
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
  options: {
    label: string;
    value: any;
  }[];
}

export interface ICustomSelect {
  label: string;
  value: any;
}

export const CustomSelect: FC<IInputProps> = forwardRef(
  (
    {
      customProps,
      customStyles,
      label,
      type,
      endAdornment,
      content,
      options,
      ...rest
    }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <Container variant="filled" customStyles={customStyles} fullWidth>
        {content && <CustomInputText>{content}</CustomInputText>}
        <CustomSelectComponent
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          {...customProps}
          variant="outlined"
          ref={ref}
          {...rest}
        >
          {options.map((item, key) => (
            <CustomMenuItem value={item.value} key={key}>
              {item.label}
            </CustomMenuItem>
          ))}
        </CustomSelectComponent>
      </Container>
    );
  }
);
CustomSelect.displayName = "CustomSelect";

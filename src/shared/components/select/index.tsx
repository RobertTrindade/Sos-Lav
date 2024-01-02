"use client";

import React, { FC, ReactNode, forwardRef, ForwardedRef } from "react";
import {
  Container,
  CustomInputText,
  CustomMenuItem,
  CustomSelectComponent,
} from "./styles";
import { SelectChangeEvent, SelectProps } from "@mui/material";
import { InputComponent } from "../Inputs";

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
      ...rest
    }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const [age, setAge] = React.useState("Ten");

    const handleChange = (event: SelectChangeEvent) => {
      setAge(event.target.value as string);
    };

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
          <CustomMenuItem value={"sim"}>Sim</CustomMenuItem>
          <CustomMenuItem value={"nao"}>nao</CustomMenuItem>
        </CustomSelectComponent>
      </Container>
    );
  }
);
CustomSelect.displayName = "CustomSelect";

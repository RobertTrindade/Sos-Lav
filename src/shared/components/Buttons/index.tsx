"use client";

import { FC } from "react";
import { Container } from "./styles";
import { ButtonProps, SxProps } from "@mui/material";

export interface IButtonProps {
  children: React.ReactNode;
  buttonProps?: ButtonProps;
  sx?: SxProps;
  
  customStyles?: {
    color: string;
    backgroundColor?: string;
    fontSize?: string;
    fontWeight?: string;
    height?:string;
    width?:string;
    borderRadius?:string;
    border?:string;


  };
}

export const ButtonComponent: FC<IButtonProps> = ({
  buttonProps,
  children,
  customStyles,
  sx,
}) => {
  return (
    <Container {...buttonProps} customStyles={customStyles} sx={{ ...sx }}>
      {children}
    </Container>
  );
};

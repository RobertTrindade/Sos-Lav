"use client";
import { Button, styled } from "@mui/material";
import { IButtonProps } from ".";

export const Container = styled(Button,{
  shouldForwardProp:(props) =>  props !== "customStyles"
})<{customStyles: IButtonProps["customStyles"]}>`
  border-radius: 8px;
  text-transform: none;
  height: 40px;

  ${({ customStyles }) => customStyles}
`;

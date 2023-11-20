"use client";
import { Button, styled } from "@mui/material";
import { IButtonProps } from ".";

export const Container = styled(Button,{
  shouldForwardProp:(props) =>  props !== "customStyles"
})<{customStyles: IButtonProps["customStyles"]}>`
  border-radius: 8px;
  text-transform: none;
  height: 40px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  ${({ customStyles }) => customStyles}
`;

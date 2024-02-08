"use client";
import { Button, styled } from "@mui/material";
import { IButtonProps } from ".";

export const Container = styled(Button, {
  shouldForwardProp: (props) => props !== "customStyles",
})<{
  customStyles: IButtonProps["customStyles"];
}>`
  border-radius: 8px;
  text-transform: none;
  height: 40px;
  position: relative;

  ${({ customStyles }) => customStyles } 
`;

export const VisuallyHiddenInput = styled("input")`
  clip: rect(0, 0, 0, 0);
  clipPath: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 100%;
  z-index: 99999;
`;
export const ButtonVoltar = styled("input")`
  clip: rect(0, 0, 0, 0);
  clipPath: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 20%;
  z-index: 99999;
`;

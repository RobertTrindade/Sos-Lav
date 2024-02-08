import * as React from "react";
import Dialog from "@mui/material/Dialog";
import {  styled } from "@mui/material";

export interface SimpleDialogProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
}

export const Modal = (props: SimpleDialogProps) => {
  const { open, setOpen, children } = props;

  return (
    <Container onClose={() => setOpen(false)} open={open}>
      {children}
    </Container>
  );
};

const Container = styled(Dialog)`

  display: flex;
  justify-content: center;
  align-items: center;

`;


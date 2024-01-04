import * as React from "react";
import Dialog from "@mui/material/Dialog";
import { Paper, styled } from "@mui/material";

export interface SimpleDialogProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
}

export const Modal = (props: SimpleDialogProps) => {
  const { open, setOpen, children } = props;

  return (
    <Container onClose={() => setOpen(false)} open={open}>
      <Content elevation={2}>{children}</Content>
    </Container>
  );
};

const Container = styled(Dialog)`

 
`;

const Content = styled(Paper)`
  background-color: rgb(18, 18, 18);

`;

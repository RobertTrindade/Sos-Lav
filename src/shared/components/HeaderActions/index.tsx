"use client";

import { ActionButton, Container, Header } from "./styles";
import AddIcon from "@mui/icons-material/Add";
import { CopyIcon, ExcelIcon, PDFIcon } from "./icons";
import TuneIcon from "@mui/icons-material/Tune";
import { Filters } from "../FIlters";
import { useState } from "react";
export const HeaderActions = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Header>
        <ActionButton startIcon={<CopyIcon />}>Copiar Filtro</ActionButton>
        <ActionButton startIcon={<PDFIcon />}>PDF</ActionButton>
        <ActionButton startIcon={<ExcelIcon />}>Excel</ActionButton>
        <ActionButton startIcon={<AddIcon />}>Adicionar Chamado</ActionButton>
        <ActionButton startIcon={<TuneIcon />} onClick={()=> setOpen(true)}  >Mais Filtros</ActionButton>
        <Filters open={open} setOpen={setOpen}/>
      </Header>
    </Container>
  );
};

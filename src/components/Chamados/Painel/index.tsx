import * as React from "react";
import { ChamadosPainelMap } from "./Map";
import { CustomDialogContainer, CustomModal } from "./styles";
import { IChamado } from "@/src/services/chamados/chamados.service";
interface IPainelChamados {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  openPainel: boolean;
  chamados?: IChamado[];
}

export const Painel: React.FC<IPainelChamados> = ({
  openPainel,
  setOpen,
  chamados,
}) => {
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <CustomModal
      open={openPainel}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <CustomDialogContainer>
        <ChamadosPainelMap chamados={chamados} />
      </CustomDialogContainer>
    </CustomModal>
  );
};

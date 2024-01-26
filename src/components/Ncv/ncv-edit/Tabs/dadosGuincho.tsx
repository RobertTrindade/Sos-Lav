"use client";
import ncvService, {
  IExtraNCV,
  INCVResponse,
} from "@/src/services/ncv/ncv.service";
import {
  BoxInput,
  ExtraValues,
  Form,
  Label,
  ModalContent,
  CustomIconButton,
} from "../styles";

import { InputComponent } from "@/src/shared/components/Inputs";
import { ButtonComponent } from "@/src/shared/components/Buttons";

import { CustomSelect, ICustomSelect } from "@/src/shared/components/select";
import { Box } from "@mui/material";
import { useState } from "react";
import { Modal } from "@/src/shared/components/Modal";
import { FormatarReal } from "@/src/utils/Masks";
import { AlertDialog } from "@/src/shared/components/Dialog";
import { DeleteForever, SaveOutlined } from "@mui/icons-material";

const equipamentoSolicitadoOptions: ICustomSelect[] = [
  {
    label: "Sim",
    value: true,
  },
  {
    label: "Não",
    value: false,
  },
];

const tipoDesconto: ICustomSelect[] = [
  {
    label: "Desconto",
    value: "desconto",
  },
  {
    label: "Acréscimo",
    value: "acrescimo",
  },
];

export const GuinchoDetails: React.FC<{
  chamado: INCVResponse;
}> = ({ chamado }) => {
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [extra, setNewExtra] = useState({
    type: "desconto",
    valor: "",
    observacao: "",
  });

  const handleNewExtra = async () => {
    const res = (await ncvService.createExtra(+chamado.id, extra)) as IExtraNCV;
    if (res) setOpenDialog(true);
    setNewExtra({
      type: "",
      valor: "",
      observacao: "",
    });
    setOpen(false);
    chamado.Extras.push(res);
  };

  return (
    chamado && (
      <>
        <Form>
          <BoxInput>
            <Label>Blitz</Label>
            <CustomSelect
              options={equipamentoSolicitadoOptions}
              customProps={{
                value: chamado.Apreensao.blitz,
              }}
            />
          </BoxInput>

          <BoxInput>
            <InputComponent
              label="Reboque"
              content="Reboque"
              customProps={{
                defaultValue: chamado?.Motoristas?.Reboques[0]?.placa,
              }}
            />
          </BoxInput>

          <BoxInput>
            <InputComponent
              label="Motorista"
              content="Motorista"
              customProps={{
                defaultValue: chamado?.Motoristas?.name,
              }}
              
            />
          </BoxInput>

          <BoxInput>
            <CustomSelect
              options={equipamentoSolicitadoOptions}
              content="Guincho Coletivo"
              customProps={{
                value: chamado.Apreensao.blitz,
              }}
            />
          </BoxInput>

          <BoxInput>
            <InputComponent
              label="KM Percorrido"
              content="KM Percorrido"
              customProps={{
                defaultValue: chamado?.Apreensao?.kmPercorrido,
              }}
            />
          </BoxInput>
          <BoxInput>
            <InputComponent
              content="Valor do Pedagio"
              customProps={{
                value: chamado.Apreensao.Valorpedagio,
              }}
            />
          </BoxInput>
          <BoxInput>
            <InputComponent
              content="Valor Extra"
             customProps={{
              value: chamado.Apreensao.ValorExtra,
             }}
            />
          </BoxInput>
        </Form>

        <Box sx={{ display: "flex", gap: "20px", marginBottom: "50px" }}>
          <ButtonComponent
            buttonProps={{
              variant: "contained",
              onClick: () => {},
            }}
            customStyles={{
              color: "white",
              fontWeight: "600",
              fontSize: "14px",
              height: "40px",
              width: "200px",
            }}
          >
            Salvar
          </ButtonComponent>
        </Box>
      </>
    )
  );
};

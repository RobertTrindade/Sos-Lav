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
        </Form>

        <div className="extras">
          <Label>Valores Extras</Label>

          {chamado.Extras.map((item) => (
            <ExtraValues key={item.id}>
              <div className="values">
                <BoxInput>
                  <InputComponent
                    label="Valore"
                    content="Valor"
                    customProps={{
                      value: item.valor,
                    }}
                  />
                </BoxInput>

                <BoxInput>
                  <InputComponent
                    label="Observação"
                    content="Observação"
                    customProps={{
                      value: item.observacao,
                    }}
                  />
                </BoxInput>
                <BoxInput>
                  <Label>Tipo</Label>
                  <CustomSelect
                    options={tipoDesconto}
                    customProps={{
                      value: item.type,
                      sx: {
                        width: "100%",
                        maxWidth: "300px",
                      },
                    }}
                  />
                </BoxInput>

                <BoxInput>
                  <Label sx={{ opacity: "0" }}>delete</Label>
                  <CustomIconButton size="large">
                    <DeleteForever color="secondary" />
                  </CustomIconButton>
                </BoxInput>
                <BoxInput>
                  <Label sx={{ opacity: "0" }}>delete</Label>
                  <CustomIconButton size="large">
                    <SaveOutlined color="secondary" />
                  </CustomIconButton>
                </BoxInput>
              </div>
            </ExtraValues>
          ))}
        </div>
        <Modal setOpen={setOpen} open={open}>
          <ModalContent>
            <div className="inputs">
              <Label>Valores Extras - Guincho</Label>

              <BoxInput>
                <InputComponent
                  label="Valore Extra"
                  content="Valore Extra"
                  customProps={{
                    value: extra.valor,
                    onChange: (e) =>
                      setNewExtra((prev) => ({
                        ...prev,
                        valor: FormatarReal(e.target.value),
                      })),
                  }}
                />
              </BoxInput>

              <BoxInput>
                <InputComponent
                  label="Observação"
                  content="Observação"
                  customProps={{
                    value: extra.observacao,
                    onChange: (e) =>
                      setNewExtra((prev) => ({
                        ...prev,
                        observacao: e.target.value,
                      })),
                  }}
                />
              </BoxInput>

              <BoxInput>
                <Label>Tipo</Label>
                <CustomSelect
                  options={tipoDesconto}
                  customProps={{
                    value: extra.type,
                    onChange: (e) =>
                      setNewExtra((prev) => ({
                        ...prev,
                        type: e.target.value as string,
                      })),

                    sx: {
                      width: "100%",
                      maxWidth: "250px",
                    },
                  }}
                />
              </BoxInput>
              <ButtonComponent
                buttonProps={{
                  variant: "contained",
                  onClick: () => handleNewExtra(),
                  disabled: !extra.observacao || !extra.valor,
                }}
                customStyles={{
                  color: "white",
                  fontWeight: "600",
                  fontSize: "14px",
                  height: "40px",
                  width: "100%",
                }}
              >
                Salvar
              </ButtonComponent>
            </div>
          </ModalContent>
        </Modal>

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
          <ButtonComponent
            buttonProps={{
              variant: "contained",
              onClick: () => setOpen(true),
            }}
            customStyles={{
              color: "white",
              fontWeight: "600",
              fontSize: "14px",
              height: "40px",
              width: "200px",
            }}
          >
            Adicionar Extra
          </ButtonComponent>
        </Box>
        <AlertDialog
          title={`Valor Extra`}
          content={`Valor extra adicionado com sucesso`}
          open={openDialog}
          setOpen={setOpenDialog}
        >
          <ButtonComponent
            buttonProps={{
              variant: "contained",
              onClick: () => setOpenDialog(false),
            }}
            customStyles={{
              color: "white",
              fontWeight: "700",
              fontSize: "15px",
              height: "50px",
              width: "200px",
              borderRadius: "14px",
            }}
          >
            Fechar
          </ButtonComponent>
        </AlertDialog>
      </>
    )
  );
};

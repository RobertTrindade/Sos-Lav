"use client";
import { INCVResponse } from "@/src/services/ncv/ncv.service";
import { BoxInput, ExtraValues, Form, Label, Row } from "../styles";

import { InputComponent } from "@/src/shared/components/Inputs";
import { ButtonComponent } from "@/src/shared/components/Buttons";

import { CustomSelect, ICustomSelect } from "@/src/shared/components/select";
import { Box } from "@mui/material";
import { useState } from "react";
import { Modal } from "@/src/shared/components/Modal";

export const equipamentoSolicitadoOptions: ICustomSelect[] = [
  {
    label: "Sim",
    value: true,
  },
  {
    label: "Não",
    value: false,
  },
];

export const tipoDesconto: ICustomSelect[] = [
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
              label="KM Percorrido"
              content="KM Percorrido"
              customProps={{
                defaultValue: chamado?.Apreensao?.kmPercorrido,
              }}
            />
          </BoxInput>

          <ExtraValues>
            <Label>Valores</Label>
            <div className="values">
              <BoxInput>
                <InputComponent label="Valore Extra" content="Valore Extra" />
              </BoxInput>

              <BoxInput>
                <InputComponent label="Observação" content="Observação" />
              </BoxInput>
            </div>
          </ExtraValues>
        </Form>

        <Modal setOpen={setOpen} open={open}>
          <Label>Valores Extras - Guincho</Label>

          <Row>
            <BoxInput>
              <InputComponent label="Valore Extra" content="Valore Extra" />
            </BoxInput>

            <BoxInput>
              <InputComponent label="Observação" content="Observação" />
            </BoxInput>
            <BoxInput>
              <Label>Tipo</Label>
              <CustomSelect
                options={tipoDesconto}
                customProps={{
                  value: "desconto",
                }}
              />
            </BoxInput>
          </Row>
        </Modal>

        <Box sx={{ display: "flex", gap: "20px" }}>
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
      </>
    )
  );
};

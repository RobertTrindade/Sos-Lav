"use client";
import { INCVResponse } from "@/src/services/ncv/ncv.service";
import {
  BoxInput,
  Form,
  Label,
  BoxInputRow,
  CustomCheckBox,
  FormCheckBox,
} from "../styles";

import { InputComponent } from "@/src/shared/components/Inputs";
import { ButtonComponent } from "@/src/shared/components/Buttons";

import { Box, FormControlLabel } from "@mui/material";
import { DataPickerComponent } from "@/src/shared/components/Inputs/datePIcker";
import dayjs from "dayjs";
import {
  DateValidationError,
  PickerChangeHandlerContext,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { AutoCompleteComponent } from "@/src/shared/components/AutoComplete";

const tipoDesconto = [
  {
    label: "Ruim",
    value: "ruim",
  },
  {
    label: "Bom",
    value: "bom",
  },
  {
    label: "Medio",
    value: "Medio",
  },
];

export const ChecklistDetails: React.FC<{
  chamado: INCVResponse;
}> = ({ chamado }) => {
  const handleChangeTime = (
    value: unknown,
    context: PickerChangeHandlerContext<DateValidationError>
  ) => {
    const time = value as Date;
    const date = dayjs(time.toISOString()).toDate();
  };
  console.log(chamado);
  return (
    chamado && (
      <>
        <FormCheckBox>
         
          <BoxInputRow>
            <FormControlLabel
              control={<CustomCheckBox size="medium" />}
              label="CÂMBIO AUTOMATICO
              "
              checked={chamado.Acessorios.cambioAutomatico}
            />
          </BoxInputRow>
          <BoxInputRow>
            <FormControlLabel
              control={<CustomCheckBox size="medium" />}
              label="RODA DE LIGA LEVE
              "
              checked={chamado.Acessorios.rodaLigaLeve}
            />
          </BoxInputRow>
          <BoxInputRow>
            <FormControlLabel
              control={<CustomCheckBox size="medium" />}
              label="SOM ESPECIAL

              "
              checked={chamado.Acessorios.somEspecial}
            />
          </BoxInputRow>
          <BoxInputRow>
            <FormControlLabel
              control={<CustomCheckBox size="medium" />}
              label="TETO SOLAR

              "
              checked={chamado.Acessorios.tetoSolar}
            />
          </BoxInputRow>{" "}
          <BoxInputRow>
            <FormControlLabel
              control={<CustomCheckBox size="medium" />}
              label="MULTIMIDIA
              "
              checked={chamado.Acessorios.multimidia}
            />
          </BoxInputRow>{" "}
          
        </FormCheckBox>

        <Form>

          <BoxInput>
            <Label>Pneus</Label>
            <AutoCompleteComponent
              options={tipoDesconto}
              label=""
              noOptionsText="Nenhum equipamento encontrado"
              target="equipamentoSolicitado"
              value={chamado.Complemento.pneus}
            />
          </BoxInput>
          <BoxInputRow>
            <FormControlLabel
              control={<CustomCheckBox size="medium" />}
              label="CHAVE DO VEICULO

              "
              checked={chamado.Complemento.chaveVeiculo}
            />
          </BoxInputRow>{" "}
          <BoxInputRow>
            <FormControlLabel
              control={<CustomCheckBox size="medium" />}
              label="VEICULO TRANCADO

              "
              checked={chamado.Complemento.veiculoTrancado}
            />
          </BoxInputRow>{" "}
        
          <BoxInput>
            <Label>Avarias</Label>
            <InputComponent
              customProps={{
                value: chamado.Complemento.Avaria,
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

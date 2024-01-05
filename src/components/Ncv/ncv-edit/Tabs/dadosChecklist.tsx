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
    label: "Regular",
    value: "regular",
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
              label="AR CONDICIONADO              "
              checked={chamado.Acessorios.arCondicionado}
            />
          </BoxInputRow>
          <BoxInputRow>
            <FormControlLabel
              control={<CustomCheckBox size="medium" />}
              label="VIDRO ELETRICO
              "
              checked={chamado.Acessorios.vidroEletrico}
            />
          </BoxInputRow>
          <BoxInputRow>
            <FormControlLabel
              control={<CustomCheckBox size="medium" />}
              label="CÂMBIO MANUAL
              "
              checked={chamado.Acessorios.cambioManual}
            />
          </BoxInputRow>
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
              label="ACENDEDOR
              "
              checked={chamado.Acessorios.cambioAutomatico}
            />
          </BoxInputRow>
          <BoxInputRow>
            <FormControlLabel
              control={<CustomCheckBox size="medium" />}
              label="RADIO/CD
              "
              checked={chamado.Acessorios.radioCd}
            />
          </BoxInputRow>
          <BoxInputRow>
            <FormControlLabel
              control={<CustomCheckBox size="medium" />}
              label="FRENTE"
              checked={chamado.Acessorios.radioCd}
            />
          </BoxInputRow>{" "}
          <BoxInputRow>
            <FormControlLabel
              control={<CustomCheckBox size="medium" />}
              label="TELA"
              checked={chamado.Acessorios.cambioAutomatico}
            />
          </BoxInputRow>{" "}
          <BoxInputRow>
            <FormControlLabel
              control={<CustomCheckBox size="medium" />}
              label="EXTINTOR
              "
              checked={chamado.Acessorios.cambioAutomatico}
            />
          </BoxInputRow>{" "}
          <BoxInputRow>
            <FormControlLabel
              control={<CustomCheckBox size="medium" />}
              label="PNEU ESTEPE

              "
              checked={chamado.Acessorios.pneuStep}
            />
          </BoxInputRow>{" "}
          <BoxInputRow>
            <FormControlLabel
              control={<CustomCheckBox size="medium" />}
              label="MACACO

              "
              checked={chamado.Acessorios.cambioAutomatico}
            />
          </BoxInputRow>
          <BoxInputRow>
            <FormControlLabel
              control={<CustomCheckBox size="medium" />}
              label="RODA COMUM

              "
              checked={chamado.Acessorios.rodaComum}
            />
          </BoxInputRow>
          <BoxInputRow>
            <FormControlLabel
              control={<CustomCheckBox size="medium" />}
              label="RODA ESPECIAL

              "
              checked={chamado.Acessorios.rodaEspecial}
            />
          </BoxInputRow>
          <BoxInputRow>
            <FormControlLabel
              control={<CustomCheckBox size="medium" />}
              label="CALOTAS

              "
              checked={chamado.Acessorios.calotas}
            />
          </BoxInputRow>{" "}
          <BoxInputRow>
            <FormControlLabel
              control={<CustomCheckBox size="medium" />}
              label="ANTENA
              "
              checked={chamado.Acessorios.antena}
            />
          </BoxInputRow>{" "}
          <BoxInputRow>
            <FormControlLabel
              control={<CustomCheckBox size="medium" />}
              label="DOCUMENTO
              "
              checked={chamado.Acessorios.documento}
            />
          </BoxInputRow>{" "}
          <BoxInputRow>
            <FormControlLabel
              control={<CustomCheckBox size="medium" />}
              label="BATERIA

              "
              checked={chamado.Acessorios.calotas}
            />
          </BoxInputRow>
          <BoxInputRow>
            <FormControlLabel
              control={<CustomCheckBox size="medium" />}
              label="CHAVE DE RODAS"
              checked={chamado.Acessorios.cambioAutomatico}
            />
          </BoxInputRow>
        </FormCheckBox>

        <Form>
          <BoxInput>
            <Label>Pintura</Label>
            <AutoCompleteComponent
              options={tipoDesconto}
              label=""
              noOptionsText="Nenhum equipamento encontrado"
              target="equipamentoSolicitado"
              value={chamado.Complemento.pintura}
            />
          </BoxInput>
          <BoxInput>
            <Label>Tapeçaria</Label>
            <AutoCompleteComponent
              options={tipoDesconto}
              label=""
              noOptionsText="Nenhum equipamento encontrado"
              target="equipamentoSolicitado"
              value={chamado.Complemento.tapecaria}
            />
          </BoxInput>

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

"use client";
import ncvService, {
  IExtraNCV,
  INCVResponse,
} from "@/src/services/ncv/ncv.service";
import {
  BoxInput,
  Form,
  Label,
  ModalContent,
  CustomIconButton,
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

export const ApreensaoDetails: React.FC<{
  chamado: INCVResponse;
}> = ({ chamado }) => {
  const handleChangeTime = (
    value: unknown,
    context: PickerChangeHandlerContext<DateValidationError>
  ) => {
    const time = value as Date;
    const date = dayjs(time.toISOString()).toDate();
  };
  function handleNewValue(arg0: string, value: string) {
    throw new Error("Function not implemented.");
  }

  return (
    chamado && (
      <>
        <FormCheckBox>
          <BoxInputRow>
            <FormControlLabel
              control={<CustomCheckBox size="medium" />}
              label="ADULTERADO"
              checked={chamado.Apreensao.blitz}
            />
          </BoxInputRow>
          <BoxInputRow>
            <FormControlLabel
              control={<CustomCheckBox size="medium" />}
              label="CRIMES DE TRANSITO"
              checked={chamado.Apreensao.crimesTransito}
            />
          </BoxInputRow>
          <BoxInputRow>
            <FormControlLabel
              control={<CustomCheckBox size="medium" />}
              label="EM TELA"
              checked={chamado.Apreensao.emTela}
            />
          </BoxInputRow>
          <BoxInputRow>
            <FormControlLabel
              control={<CustomCheckBox size="medium" />}
              label="FORA DE CIRCULAÇÃO"
              checked={chamado.Apreensao.foraCirculacao}
            />
          </BoxInputRow>
          <BoxInputRow>
            <FormControlLabel
              control={<CustomCheckBox size="medium" />}
              label="JUDICIAL"
              checked={chamado.Apreensao.judicial}
            />
          </BoxInputRow>
          <BoxInputRow>
            <FormControlLabel
              control={<CustomCheckBox size="medium" />}
              label="LEASING"
              checked={chamado.Apreensao.leasing}
            />
          </BoxInputRow>
          <BoxInputRow>
            <FormControlLabel
              control={<CustomCheckBox size="medium" />}
              label="MOTOR COM QUEIXA"
              checked={chamado.Apreensao.motoQueixa}
            />
          </BoxInputRow>{" "}
          <BoxInputRow>
            <FormControlLabel
              control={<CustomCheckBox size="medium" />}
              label="PEDIR BAIXA"
              checked={chamado.Apreensao.pedirBaixa}
            />
          </BoxInputRow>{" "}
          <BoxInputRow>
            <FormControlLabel
              control={<CustomCheckBox size="medium" />}
              label="POLICIAL CIVIL
              "
              checked={chamado.Apreensao.policiaCivil}
            />
          </BoxInputRow>{" "}
          <BoxInputRow>
            <FormControlLabel
              control={<CustomCheckBox size="medium" />}
              label="TRÁFICO DE DROGAS
              "
              checked={chamado.Apreensao.traficoDrogas}
            />
          </BoxInputRow>{" "}
          <BoxInputRow>
            <FormControlLabel
              control={<CustomCheckBox size="medium" />}
              label="ROUBO/FURTO
              "
              checked={chamado.Apreensao.rouboFurto}
            />
          </BoxInputRow>
          <BoxInputRow>
            <FormControlLabel
              control={<CustomCheckBox size="medium" />}
              label="SEM DOCUMENTO/CRV"
              checked={chamado.Apreensao.semDocumentosCrv}
            />
          </BoxInputRow>
        </FormCheckBox>

        <Form>
          <BoxInputRow>
            <DataPickerComponent
              handleChangeTime={handleChangeTime}
              value={new AdapterDayjs().date(chamado?.Apreensao.created_at)}
              label="Data de Apreensão"
            />
          </BoxInputRow>

          <BoxInputRow>
            <InputComponent
              label="Hora da Apreensão"
              content="Hora da Apreensão"
              customProps={{
                value: dayjs(chamado?.Apreensao?.created_at).format("HH:mm:ss"),
              }}
            />
          </BoxInputRow>

          <BoxInputRow>
            <InputComponent
              label="Local da Apreensão"
              content="Local da Apreensão"
              customProps={{
                value: chamado?.Chamado?.localizacao?.enderecoCompleto,
              }}
            />
          </BoxInputRow>
          <BoxInput>
        <InputComponent
          label="Motivo de Apreensão"
          content="Motivo de Apreensão"
          customProps={{
            value: chamado?.Chamado.Motivo,
            onChange: (e) => {
              handleNewValue("Motivo", e.target.value);
            },
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

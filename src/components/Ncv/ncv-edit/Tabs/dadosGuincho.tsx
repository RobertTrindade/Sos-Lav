"use client";
import { INCVResponse } from "@/src/services/ncv/ncv.service";
import { BoxInput, Form, Label } from "../styles";

import { InputComponent } from "@/src/shared/components/Inputs";
import { ButtonComponent } from "@/src/shared/components/Buttons";

import { CustomSelect, ICustomSelect } from "@/src/shared/components/select";

export const equipamentoSolicitadoOptions:ICustomSelect[] = [
  {
    label: "Sim",
    value: true,
  },
  {
    label: "Não",
    value: false,
  },
];
export const GuinchoDetails: React.FC<{
  chamado: INCVResponse;
}> = ({ chamado }) => {
  return (
    chamado && (
      <>
        <Form>
          <BoxInput>
            <Label>Blitz</Label>
            <CustomSelect
              options={equipamentoSolicitadoOptions}
              customProps={{
                value: chamado.Apreensao.blitz === false ? "nao" : "sim",
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
              label="Tipo Apreensao"
              content="Tipo Apreensao"
              customProps={{
                defaultValue: chamado?.Chamado?.tipoApreensao,
              }}
            />
          </BoxInput>

          <BoxInput>
            <InputComponent
              label="Tipo Veiculo"
              content="Tipo Veiculo"
              customProps={{
                defaultValue: chamado?.Chamado?.tipoVeiculo,
              }}
            />
          </BoxInput>

          <BoxInput>
            <InputComponent
              label="Placa"
              content="Placa"
              customProps={{
                defaultValue: chamado?.placa,
              }}
            />
          </BoxInput>

          <BoxInput>
            <InputComponent
              label="Ano"
              content="Ano"
              customProps={{
                defaultValue: chamado?.ano,
              }}
            />
          </BoxInput>

          <BoxInput>
            <InputComponent
              label="Marca"
              content="Marca"
              customProps={{
                defaultValue: chamado?.marca,
              }}
            />
          </BoxInput>

          <BoxInput>
            <InputComponent
              label="Modelo"
              content="Modelo"
              customProps={{
                defaultValue: chamado?.modelo,
              }}
            />
          </BoxInput>

          <BoxInput>
            <InputComponent
              label="Cor"
              content="Cor"
              customProps={{
                defaultValue: chamado?.cor,
              }}
            />
          </BoxInput>

          <BoxInput>
            <InputComponent
              label="UF"
              content="UF"
              customProps={{
                defaultValue: chamado?.uf,
              }}
            />
          </BoxInput>

          <BoxInput>
            <InputComponent
              label="Município"
              content="Município"
              customProps={{
                defaultValue: chamado?.municipio,
              }}
            />
          </BoxInput>

          <BoxInput>
            <InputComponent
              label="Chassi"
              content="Chassi"
              customProps={{
                defaultValue: chamado?.chassi,
              }}
            />
          </BoxInput>

          <BoxInput>
            <InputComponent
              label="Motor"
              content="Motor"
              customProps={{
                defaultValue: chamado?.motor,
              }}
            />
          </BoxInput>

          <BoxInput>
            <InputComponent
              label="Pátio"
              content="Pátio"
              customProps={{
                defaultValue: chamado?.Chamado?.patio.nome,
              }}
            />
          </BoxInput>

          <BoxInput>
            <InputComponent
              label="Estado"
              content="Estado"
              customProps={{
                defaultValue: chamado?.Chamado?.localizacao.estado,
              }}
            />
          </BoxInput>

          <BoxInput>
            <InputComponent
              label="Tabela de Tarifa"
              content="Tabela de Tarifa"
            />
          </BoxInput>
        </Form>

        <ButtonComponent
          buttonProps={{
            variant: "contained",
            onClick: () => {},
          }}
          customStyles={{
            color: "white",
            fontWeight: "600",
            fontSize: "18px",
            height: "40px",
            width: "200px",
          }}
        >
          Salvar
        </ButtonComponent>
      </>
    )
  );
};

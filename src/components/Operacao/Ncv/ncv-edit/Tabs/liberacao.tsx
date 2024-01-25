import { INCVResponse } from "@/src/services/ncv/ncv.service";
import { BoxInput, Form, FormLiberacao, Label } from "../styles";

import { InputComponent } from "@/src/shared/components/Inputs";
import { ButtonComponent } from "@/src/shared/components/Buttons";
import { CustomSelect } from "@/src/shared/components/select";
import { AutoCompleteComponent } from "@/src/shared/components/AutoComplete";
import { Box } from "@mui/material";
import { calcularDiasPassados } from "@/src/utils/Date/PassedDays";
import { gerarTotalApreensao, somarValores } from "@/src/utils/Masks";

const tipoLiberacao = [
  {
    label: "LIBERAÇÃO NORMAL",
    value: "liberacaoNormal",
  },
  {
    label: "LIBERAÇÃO LEILÃO",
    value: "liberacaoLeilao",
  },
];

const tipoAlvara = [
  {
    label: "ONLINE",
    value: "liberacaoNormal",
  },
  {
    label: "PROVISORIO",
    value: "liberacaoLeilao",
  },
  {
    label: "PLANTAO",
    value: "liberacaoLeilao",
  },
];

export const Liberacao: React.FC<{
  chamado: INCVResponse;
}> = ({ chamado }) => {
  return (
    chamado && (
      <>
        <Form>
          <BoxInput>
            <Label>Tipo Liberação</Label>
            <CustomSelect
              options={tipoLiberacao}
              customProps={{
                value: "liberacaoNormal",
              }}
            />
          </BoxInput>

          <BoxInput>
            <Label>Liberado Para</Label>
            <AutoCompleteComponent
              options={[]}
              label=""
              noOptionsText="Nenhum equipamento encontrado"
              target="equipamentoSolicitado"
            />
          </BoxInput>

          <BoxInput>
            <Label>Faturado Para</Label>
            <AutoCompleteComponent
              options={[]}
              label=""
              noOptionsText="Nenhum equipamento encontrado"
              target="equipamentoSolicitado"
            />
          </BoxInput>
        </Form>

        <Form sx={{ marginTop: "0px" }}>
          <BoxInput>
            <InputComponent label="Nota Fiscal" content="Nota Fiscal" />
          </BoxInput>

          <BoxInput>
            <InputComponent label="Alvará" content="Alvará" />
          </BoxInput>

          <BoxInput>
            <Label>Tipo Alvará</Label>
            <CustomSelect
              options={tipoAlvara}
              customProps={{
                value: "liberacaoNormal",
              }}
            />
          </BoxInput>
        </Form>

        <FormLiberacao sx={{ marginTop: "0px" }}>
          <BoxInput>
            <InputComponent
              label="Estadias"
              content="Estadias"
              customProps={{
                readOnly: true,
                value: calcularDiasPassados(chamado.created_at),
              }}
            />
          </BoxInput>

          <BoxInput>
            <InputComponent
              label="Estadia"
              content="Estadia"
              customProps={{
                readOnly: true,
                value: "R$ 50,00",
              }}
            />
          </BoxInput>

          <BoxInput>
            <InputComponent
              label="Guincho"
              content="Guincho"
              customProps={{
                readOnly: true,
                value: "R$ 50,00",
              }}
            />
          </BoxInput>

          <BoxInput>
            <InputComponent
              label="Desconto"
              content="Desconto"
              customProps={{
                readOnly: true,
                value: `R$ ${somarValores(chamado.Extras, "desconto")}`,
              }}
            />
          </BoxInput>

          <BoxInput>
            <InputComponent
              label="Acréscimo"
              content="Acréscimo"
              customProps={{
                readOnly: true,
                value: `R$ ${somarValores(chamado.Extras, "acrescimo")}`,
              }}
            />
          </BoxInput>

          <BoxInput>
            <InputComponent
              label="Total"
              content="Total"
              customProps={{
                readOnly: true,
                value: `R$ ${gerarTotalApreensao(
                  calcularDiasPassados(chamado.created_at),
                  50,
                  50,
                  somarValores(chamado.Extras, "desconto"),
                  somarValores(chamado.Extras, "acrescimo")

                )}`,
              }}
            />
          </BoxInput>
        </FormLiberacao>

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
            Pagamento
          </ButtonComponent>
          <ButtonComponent
            buttonProps={{
              variant: "contained",
            }}
            customStyles={{
              color: "white",
              fontWeight: "600",
              fontSize: "14px",
              height: "40px",
              width: "200px",
            }}
          >
            Liberação
          </ButtonComponent>
        </Box>
      </>
    )
  );
};

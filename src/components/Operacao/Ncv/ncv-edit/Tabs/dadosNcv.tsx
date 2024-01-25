import { INCVResponse } from "@/src/services/ncv/ncv.service";
import { BoxInput, Form } from "../styles";

import { InputComponent } from "@/src/shared/components/Inputs";
import { ButtonComponent } from "@/src/shared/components/Buttons";
export const ChamadoDetails: React.FC<{
  chamado: INCVResponse;
}> = ({ chamado }) => {
  return (
    chamado && (
      <>
        <Form>
          <BoxInput>
            <InputComponent
              label="NCV"
              content="NCV"
              customProps={{
                defaultValue: chamado.id,
              }}
            />
          </BoxInput>

          <BoxInput>
            <InputComponent
              label="Status"
              content="Status"
              customProps={{
                defaultValue: chamado.status,
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
              label="Pátio"
              content="Pátio"
              customProps={{
                defaultValue: chamado?.Chamado?.patio.nome,
              }}
            />
          </BoxInput>

     

          <BoxInput>
            <InputComponent
              label="Tabela de Tarifa"
              content="Tabela de Tarifa"
            />
          </BoxInput>

          <BoxInput>
            <div className="desativaEscrita">
              <InputComponent
                label="Adicionado por"
                content="Adicionado por"
                customProps={{
                  defaultValue: "teste",
                }}
              />
            </div>
          </BoxInput>

          <BoxInput>
            <div className="desativaEscrita">
              <InputComponent
                label="Alterado por"
                content="Alterado por"
                customProps={{
                  defaultValue: "teste",
                }}
              />
            </div>
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
            marginBottom: "50px",
          }}
        >
          Salvar
        </ButtonComponent>
      </>
    )
  );
};

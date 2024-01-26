import { InputComponent } from "@/src/shared/components/Inputs";
import { BoxInput, Form, Label } from "../../../Patios-novo/styles";
import { usePatios } from "@/src/contexts/patios";
import { PhoneMask } from "@/src/utils/Masks";

export const PatiosStep1 = () => {
  const { patioValues, handleNewValue } = usePatios();
  return (
    <>
      <Form>
        <BoxInput>
          <InputComponent 
            label="Nome Patio" 
            content="Nome Patio"
            customProps={{
              value: patioValues.nome,
              onChange: (e) => {
                handleNewValue("nome", e.target.value)
              },
            }} 
          />
        </BoxInput>

        <BoxInput>
          <InputComponent 
            label="Responsável" 
            content="Responsável"
            customProps={{
              value: patioValues.responsavel,
              onChange: (e) => {
                handleNewValue("responsavel", e.target.value)
              },
            }} 
          />
        </BoxInput>

        <BoxInput>
          <InputComponent 
            label="Telefone" 
            content="Telefone"
            customProps={{
              value: patioValues.telefone,
              onChange: (e) => {
                handleNewValue("telefone", PhoneMask(e.target.value))
              },
            }} 
          />
        </BoxInput>

        <BoxInput>
          <InputComponent 
            label="E-mail" 
            content="E-mail"
            customProps={{
              value: patioValues.email,
              onChange: (e) => {
                handleNewValue("email", e.target.value)
              },
            }}
          />
        </BoxInput>

        <BoxInput>
          <InputComponent 
            label="Observação" 
            content="Observaçâo"
            customProps={{
              value: patioValues.observacao,
              onChange: (e) => {
                handleNewValue("observacao", e.target.value)
              },
            }} 
          />
        </BoxInput>
      </Form>
    </>
  );
};

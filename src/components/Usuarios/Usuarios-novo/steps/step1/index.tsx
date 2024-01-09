import { InputComponent } from "@/src/shared/components/Inputs";
import { BoxInput, Form } from "../../styles";


export const ChamadosStep1 = () => {
  return (
    <>
      <Form>
        <BoxInput>
          <InputComponent label="Nome Completo" content="Nome" />
        </BoxInput>

        <BoxInput>
          <InputComponent label="exemplo@hotmail.com" content="E-mail" />
        </BoxInput>

        <BoxInput>
          <InputComponent label="Senha" content="Senha " />
        </BoxInput>

        <BoxInput>
          <InputComponent label="Cargo/Setor" content="Cargo/Setor" />
        </BoxInput>

      </Form>
    </>
  );
};
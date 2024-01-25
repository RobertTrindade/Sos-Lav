"use client";
import { InputComponent } from "@/src/shared/components/Inputs";

import { BoxInput, Form } from "../../styles";
import { useUsuario } from "@/src/contexts/usuarios";

export const ChamadosStep1 = () => {
  const { UsuarioValues, handleNewValue } = useUsuario();

  return (
    <>
      <Form>
        <BoxInput>
          <InputComponent
            label="Nome Completo"
            content="Nome"
            customProps={{
              value: UsuarioValues.name,
              onChange: (e) => handleNewValue("name", e.target.value),
            }}
          />
        </BoxInput>

        <BoxInput>
          <InputComponent
            label="exemplo@hotmail.com"
            content="E-mail"
            customProps={{
              value: UsuarioValues.email,
              onChange: (e) => handleNewValue("email", e.target.value),
            }}
          />
        </BoxInput>

        <BoxInput>
          <InputComponent
          label="Cargo/Setor" 
          content="Cargo/Setor"
          customProps={{
            value: UsuarioValues.cargoSetor,
            onChange: (e) => handleNewValue("cargoSetor", e.target.value),
          }} />
        </BoxInput>
      </Form>
    </>
  );
};

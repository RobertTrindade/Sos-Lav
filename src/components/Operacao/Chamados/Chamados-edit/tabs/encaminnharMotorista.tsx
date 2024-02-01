"use client";
import { IChamado } from "@/src/services/chamados/chamados.service";
import { BoxInput, Form } from "../../Chamados-novo/styles";
import { InputComponent } from "@/src/shared/components/Inputs";

export const EncaminharMotorista: React.FC<{
  chamado: IChamado;
}> = ({ chamado }) => {
  return (
    <>
      <Form sx={{ maxWidth: "800px" }}>
        <BoxInput>
          <InputComponent
            label="Motorista"
            content="Motorista"
            customProps={{
              value: chamado?.Motoristas?.name,
              onChange: (e) => {},
            }}
          />
        </BoxInput>
      </Form>
    </>
  );
};

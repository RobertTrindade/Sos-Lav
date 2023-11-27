"use client";

import * as React from "react";
import { Container, Content } from "./styles";
import Image from "next/image";
import { IMotoristaDto } from "@/src/services/motoristas/motoristas.service";
import { InputComponent } from "@/src/shared/components/Inputs";
import dayjs from "dayjs";

export const MotoristasComponentEditApr: React.FC<{
  motorista: IMotoristaDto;
}> = ({ motorista }) => {
  return (
    motorista && (
      <Container>
        <Content>
          <div className="CnhArea">
            <Image
              src={motorista.Cnh.cnh_pdf}
              alt="Picture of the author"
              fill
            />
          </div>

          <div className="contentArea">
            <div>
              <InputComponent
                content="Nome"
                type="email"
                customProps={{
                  readOnly: true,
                  value: motorista.name,
                }}
                customStyles={{
                  color: "white",
                }}
              />

              <InputComponent
                content="CPF"
                type="email"
                customProps={{
                  readOnly: true,
                  value: motorista.cpf,
                }}
                customStyles={{
                  color: "white",
                }}
              />
              <InputComponent
                content="RG"
                type="email"
                customProps={{
                  readOnly: true,
                  value: motorista.rg,
                }}
                customStyles={{
                  color: "white",
                }}
              />
              <InputComponent
                content="Data de Nascimento"
                type="email"
                customProps={{
                  readOnly: true,
                  value: dayjs(motorista.birthdate).format("DD/MM/YYYY"),
                }}
                customStyles={{
                  color: "white",
                }}
              />
            </div>

            <div>
              <InputComponent
                content="CNH"
                type="email"
                customProps={{
                  readOnly: true,
                  value: motorista.Cnh.cnh,
                }}
                customStyles={{
                  color: "white",
                }}
              />
              <InputComponent
                content="Cnh Validade"
                type="email"
                customProps={{
                  readOnly: true,
                  value: dayjs(motorista.Cnh.cnh_validade).format("DD/MM/YYYY"),
                }}
                customStyles={{
                  color: "white",
                }}
              />
              <InputComponent
                content="CNH Categoria"
                type="email"
                customProps={{
                  readOnly: true,
                  value: motorista.Cnh.cnh_categoria,
                }}
                customStyles={{
                  color: "white",
                }}
              />
            </div>
          </div>
        </Content>
      </Container>
    )
  );
};

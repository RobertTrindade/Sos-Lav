"use client";

import * as React from "react";
import { Container, Content } from "./styles";
import Image from "next/image";
import { IMotoristaDto } from "@/src/services/motoristas/motoristas.service";
import { InputComponent } from "@/src/shared/components/Inputs";
import dayjs from "dayjs";
import { ScrollableTabsButtonAuto } from "@/src/shared/components/Tabs";

export const MotoristasComponentEditApr: React.FC<{
  motorista: IMotoristaDto;
}> = ({ motorista }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabLabels = [
    "Motorista",
    "Endereço",
    "Reboque",
    "Contrato",
    "Valores Contrato",
    "Termo de Credenciamento",
    "Empresa",
  ];
  return (
    motorista && (
      <Container>
        <ScrollableTabsButtonAuto
          onChange={handleChange}
          value={value}
          tabLabels={tabLabels}
        />

        {value === 0 && (
          <Content>
            <div className="CnhArea">
              <Image
                src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${motorista.Cnh.cnhPdf}`}
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
                    value: dayjs(motorista.Cnh.cnhValidade).format(
                      "DD/MM/YYYY"
                    ),
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
                    value: motorista.Cnh.cnhCategoria,
                  }}
                  customStyles={{
                    color: "white",
                  }}
                />
              </div>
            </div>
          </Content>
        )}

        {value === 1 && (
          <Content>
            <div className="CnhArea">
              <Image
                src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${motorista.Cnh.cnhPdf}`}
                alt="Picture of the author"
                fill
              />
            </div>

            <div className="contentArea">
              <div>
                <InputComponent
                  content="Endereço"
                  type="email"
                  customProps={{
                    readOnly: true,
                    value: motorista.MotoristasEndereco.endereco,
                  }}
                  customStyles={{
                    color: "white",
                  }}
                />

                <InputComponent
                  content="Bairro"
                  type="email"
                  customProps={{
                    readOnly: true,
                    value: motorista.MotoristasEndereco.bairro,
                  }}
                  customStyles={{
                    color: "white",
                  }}
                />
                <InputComponent
                  content="Cidade"
                  type="email"
                  customProps={{
                    readOnly: true,
                    value: motorista.MotoristasEndereco.bairro,
                  }}
                  customStyles={{
                    color: "white",
                  }}
                />
                <InputComponent
                  content="CEP"
                  type="email"
                  customProps={{
                    readOnly: true,
                    value: motorista.MotoristasEndereco.cep,
                  }}
                  customStyles={{
                    color: "white",
                  }}
                />
              </div>

              <div>
                <InputComponent
                  content="UF"
                  type="email"
                  customProps={{
                    readOnly: true,
                    value: motorista.MotoristasEndereco.uf,
                  }}
                  customStyles={{
                    color: "white",
                  }}
                />
              </div>
            </div>
          </Content>
        )}
        {value === 2 && (
          <Content>
            <div className="CnhArea">
              <Image
                src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${motorista.Reboques[0].crlvUrl}`}
                alt="Picture of the author"
                fill
              />
            </div>

            <div className="contentArea">
              <div>
                <InputComponent
                  content="Placa"
                  type="email"
                  customProps={{
                    readOnly: true,
                    value: motorista.Reboques[0].placa,
                  }}
                  customStyles={{
                    color: "white",
                  }}
                />

            
              </div>

              <div>
                <InputComponent
                  content="UF"
                  type="email"
                  customProps={{
                    readOnly: true,
                    value: motorista.MotoristasEndereco.uf,
                  }}
                  customStyles={{
                    color: "white",
                  }}
                />
              </div>
            </div>
          </Content>
        )}
      </Container>
    )
  );
};

"use client";

import * as React from "react";
import { Container, Content, TabResultArea, Title } from "./styles";
import { ScrollableTabsButtonAuto } from "@/src/shared/components/Tabs";

import Link from "next/link";
import { CustomIconButton } from "../../Navbar/styles";
import { BackIcon } from "../../Motoristas/Motoristas-details";
import { BreadCrumbsComponent } from "@/src/shared/components/breadcrumbs";
import { BoxInput, Form, Label } from "../../Chamados/Chamados-novo/styles";
import {
  AutoCompleteComponent,
  INewValue,
} from "@/src/shared/components/AutoComplete";
import { CustomCircularProgress } from "../../Motoristas/Motoristas-details/styles";

import { ButtonComponent } from "@/src/shared/components/Buttons";
import {
  equipamentoSolicitadoOptions,
  tipoVeiculoOptions,
  tipoapreensaoOptions,
  urgencia,
  origens,
} from "../../Chamados/Chamados-novo/steps/step1";
import { INCVResponse } from "@/src/services/ncv/ncv.service";
import { InputComponent } from "@/src/shared/components/Inputs";
export const chamadosStatus = [
  {
    label: "Aguardando",
    id: 1,
  },
  {
    label: "Concluido",
    id: 2,
  },
  {
    label: "Em Checklist",
    id: 2,
  },
  {
    label: "Aceito",
    id: 2,
  },
];

export const NcvEdit: React.FC<{
  chamado: INCVResponse;
}> = ({ chamado }) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabLabels = ["Dados NCV", "Endereço", "NCVs", "Motorista", "Fotos"];

  return (
    <Container>
      <Content>
        <TabResultArea>
          <BreadCrumbsComponent />

          <div className="actionArea">
            <Link href={"/chamados"}>
              <CustomIconButton>
                <BackIcon />
              </CustomIconButton>
            </Link>
            <Title>Editar NCV </Title>
          </div>
          <ScrollableTabsButtonAuto
            onChange={handleChange}
            value={value}
            tabLabels={tabLabels}
          />
          {chamado ? (
            <>{value === 0 && <ChamadoDetails chamado={chamado} />}</>
          ) : (
            <CustomCircularProgress />
          )}
        </TabResultArea>
      </Content>
    </Container>
  );
};

const ChamadoDetails: React.FC<{
  chamado: INCVResponse;
}> = ({ chamado }) => {
  const [chamadoState, setChamado] = React.useState({
    ncv: chamado.id,
  });
  // Função para atualizar o estado dos campos
  const handleNewValue = (campo: string, valor: INewValue | any) => {
    setChamado((prevState) => ({
      ...prevState,
      [campo]: valor.label ? valor.label : valor,
    }));
  };

  return (
    chamadoState && (
      <Form>
        <BoxInput>
          <InputComponent
            label="NCV"
            content="NCV"
            customProps={{
              value: chamado.id,
            }}
          />
        </BoxInput>

        <BoxInput>
          <InputComponent
            label="Status"
            content="Status"
            customProps={{
              value: chamado.status,
            }}
          />
        </BoxInput>

        <ButtonComponent
          buttonProps={{
            variant: "contained",
            onClick: () => {
              console.log(chamadoState);
            },
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
      </Form>
    )
  );
};

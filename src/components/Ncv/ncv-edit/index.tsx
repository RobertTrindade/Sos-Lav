"use client";

import * as React from "react";
import { Container, Content, TabResultArea, Title } from "./styles";
import { ScrollableTabsButtonAuto } from "@/src/shared/components/Tabs";

import Link from "next/link";
import { CustomIconButton } from "../../Navbar/styles";
import { BackIcon } from "../../Motoristas/Motoristas-details";
import { BreadCrumbsComponent } from "@/src/shared/components/breadcrumbs";
import { CustomCircularProgress } from "../../Motoristas/Motoristas-details/styles";

import { INCVResponse } from "@/src/services/ncv/ncv.service";
import { ChamadoDetails } from "./Tabs/dadosNcv";
import { GuinchoDetails } from "./Tabs/dadosGuincho";
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
  const tabLabels = [
    "Dados NCV",
    "Guincho",
    "Apreensão",
    "Históricos",
    "Checklist",
    "Fotos",
    "Documentos",
    "Liberação",
  ];

  return (
    <Container>
      <Content>
        <TabResultArea>
          <BreadCrumbsComponent />

          <div className="actionArea">
            <Link href={"/ncv"}>
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
            <>
              {value === 0 && <ChamadoDetails chamado={chamado} />}
              {value === 1 && <GuinchoDetails chamado={chamado} />}
            </>
          ) : (
            <CustomCircularProgress />
          )}
        </TabResultArea>
      </Content>
    </Container>
  );
};

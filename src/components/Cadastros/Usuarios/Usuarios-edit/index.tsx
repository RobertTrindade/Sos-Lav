"use client";

import * as React from "react";
import { Container, Content, MapArea, TabResultArea, Title } from "./styles";
import { ScrollableTabsButtonAuto } from "@/src/shared/components/Tabs";
import { InputComponent } from "@/src/shared/components/Inputs";

import { IChamado } from "@/src/services/chamados/chamados.service";
import { ChamadoEditarMap } from "./map";
import Link from "next/link";
import { BackIcon } from "../../Motoristas/Motoristas-details";
import { BreadCrumbsComponent } from "@/src/shared/components/breadcrumbs";
import {
  AutoCompleteComponent,
  INewValue,
} from "@/src/shared/components/AutoComplete";
import { CustomCircularProgress, CustomIconButton } from "../../Motoristas/Motoristas-details/styles";


import patiosService from "@/src/services/patios/patios.service";
import dayjs from "dayjs";
import { ButtonComponent } from "@/src/shared/components/Buttons";
import { Button, ButtonGroup } from "@mui/material";

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

export const ChamadosComponentEdit: React.FC<{
  chamado: IChamado;
}> = ({ chamado }) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabLabels = ["Chamado", "Endereço", "NCVs", "Motorista", "Fotos"];

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
            <Title>Editar chamado </Title>
          </div>
          <ScrollableTabsButtonAuto
            onChange={handleChange}
            value={value}
            tabLabels={tabLabels}
          />
          {chamado ? (
            <>
           
            </>
          ) : (
            <CustomCircularProgress />
          )}
        </TabResultArea>
        <MapArea>
          <ChamadoEditarMap chamadoLocation={chamado} />
        </MapArea>
      </Content>
    </Container>
  );
};

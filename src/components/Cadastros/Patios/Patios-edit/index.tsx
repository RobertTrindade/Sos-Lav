"use client";

import * as React from "react";
import { Container, Content, MapArea, TabResultArea, Title } from "./styles";
import { ScrollableTabsButtonAuto } from "@/src/shared/components/Tabs";

import Link from "next/link";
import { BackIcon } from "../../Motoristas/Motoristas-details";
import { BreadCrumbsComponent } from "@/src/shared/components/breadcrumbs";

import {
  CustomCircularProgress,
  CustomIconButton,
} from "../../Motoristas/Motoristas-details/styles";

import patiosService, { IPatio } from "@/src/services/patios/patios.service";

export const PatiosComponentEdit: React.FC<{
  patio: IPatio;
}> = ({ patio }) => {
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
          {patio ? (
            <>
              {/* {value === 0 && <PatioDetails patio={patio} />}
              {value === 1 && <ChamadoEndereco patio={patio} />}
              {value === 2 && <ChamadoNcvs patio={patio} />}
              {value === 3 && <ChamadoMoto patio={patio} />}
              {value === 4 && <ChamadosFotos patio={patio} />} */}
            </>
          ) : (
            <CustomCircularProgress />
          )}
        </TabResultArea>
      </Content>
    </Container>
  );
};

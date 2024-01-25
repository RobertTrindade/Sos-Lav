"use client";

import * as React from "react";
import { Container, Content, TabResultArea, Title } from "./styles";
import { ScrollableTabsButtonAuto } from "@/src/shared/components/Tabs";

import Link from "next/link";

import { INCVResponse } from "@/src/services/ncv/ncv.service";
import { ChamadoDetails } from "./Tabs/dadosNcv";
import { GuinchoDetails } from "./Tabs/dadosGuincho";
import { ApreensaoDetails } from "./Tabs/dadosApreensao";
import { NcvTimeline } from "./Tabs/dadosHistorico";
import { ChecklistDetails } from "./Tabs/dadosChecklist";
import { FotosApreensao } from "./Tabs/fotos";
import { FotosConferente } from "./Tabs/fotosConferente";
import { Liberacao } from "./Tabs/liberacao";
import { Documentos } from "./Tabs/dadosDocumentos";
import { DadosVeiculo } from "./Tabs/dadosVeiculo";
import { BreadCrumbsComponent } from "@/src/shared/components/breadcrumbs";
import { CustomIconButton } from "@/src/components/Cadastros/Motoristas/Motoristas-details/styles";
import { BackIcon } from "@/src/components/Cadastros/Motoristas/Motoristas-details";
import { CustomCircularProgress } from "@/src/shared/components/Spinner";
export const NcvEdit: React.FC<{
  chamado: INCVResponse;
}> = ({ chamado }) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const tabLabels = [
    "Dados NCV",
    "Dados do Veículo",

    "Guincho",
    "Apreensão",
    "Linha do tempo",
    "Checklist",
    "Conferente",
    "Fotos Motorista",
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
              {value === 1 && <DadosVeiculo chamado={chamado} />}
              {value === 2 && <GuinchoDetails chamado={chamado} />}
              {value === 3 && <ApreensaoDetails chamado={chamado} />}
              {value === 4 && <NcvTimeline chamado={chamado} />}
              {value === 5 && <ChecklistDetails chamado={chamado} />}
              {value === 6 && <FotosConferente chamado={chamado} />}
              {value === 7 && <FotosApreensao chamado={chamado} />}
              {value === 8 && <Documentos chamado={chamado} />}
              {value === 9 && <Liberacao chamado={chamado} />}
            </>
          ) : (
            <CustomCircularProgress />
          )}
        </TabResultArea>
      </Content>
    </Container>
  );
};

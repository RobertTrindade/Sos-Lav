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
import { ApreensaoDetails } from "./Tabs/dadosApreensao";
import { NcvTimeline } from "./Tabs/dadosHistorico";
import { ChecklistDetails } from "./Tabs/dadosChecklist";
import { FotosApreensao } from "./Tabs/fotos";
import { FotosConferente } from "./Tabs/fotosConferente";
import { Liberacao } from "./Tabs/liberacao";
import { Documentos } from "./Tabs/dadosDocumentos";
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
    "Linha do tempo",
    "Acessórios",
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
              {value === 1 && <GuinchoDetails chamado={chamado} />}
              {value === 2 && <ApreensaoDetails chamado={chamado} />}
              {value === 3 && <NcvTimeline chamado={chamado} />}
              {value === 4 && <ChecklistDetails chamado={chamado} />}
              {value === 5 && <FotosConferente chamado={chamado} />}
              {value === 6 && <FotosApreensao chamado={chamado} />}
              {value === 7 && <Documentos chamado={chamado}/>}
              {value === 8 && <Liberacao chamado={chamado} />}


              
            </>
          ) : (
            <CustomCircularProgress />
          )}
        </TabResultArea>
      </Content>
    </Container>
  );
};

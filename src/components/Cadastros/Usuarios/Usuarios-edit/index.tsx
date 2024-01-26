"use client";

import * as React from "react";
import { Container, Content, TabResultArea, Title } from "./styles";
import { ScrollableTabsButtonAuto } from "@/src/shared/components/Tabs";

import Link from "next/link";
import { BackIcon } from "../../Motoristas/Motoristas-details";
import { BreadCrumbsComponent } from "@/src/shared/components/breadcrumbs";
import { CustomCircularProgress } from "@/src/shared/components/Spinner";
import { DadosUsuario } from "./tabs/dadosColaborador";
import { IUserDto } from "@/src/services/usuarios/usuarios.service";
import { CustomIconButton } from "@/src/components/Navbar/styles";
import { PatioUsuario } from "./tabs/patiosUsuario";
import { PermissaoUsuario } from "./tabs/permissionUsuarios";
import { ContratoUsuario } from "./tabs/contratoUsuario";

export const UsuariosEditComponent: React.FC<{
  usuario: IUserDto;
}> = ({ usuario }) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const tabLabels = [
    "Dados do Colaborador",
    "Contrato",
    "Pátio Usuário",
    "Direito de Acesso ",
  ];

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
          {usuario ? (
            <>
              {value === 0 && <DadosUsuario user={usuario} />}
              {value === 1 && <ContratoUsuario user={usuario} />}

              {value === 2 && <PatioUsuario user={usuario} />}
              {value === 3 && <PermissaoUsuario user={usuario} />}
            </>
          ) : (
            <CustomCircularProgress />
          )}
        </TabResultArea>
      </Content>
    </Container>
  );
};

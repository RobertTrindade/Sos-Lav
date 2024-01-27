"use client";

import * as React from "react";
import { Container, Content, TabResultArea, Title } from "./styles";
import { ScrollableTabsButtonAuto } from "@/src/shared/components/Tabs";

import Link from "next/link";
import { BackIcon } from "../../Motoristas/Motoristas-details";
import { CustomCircularProgress } from "@/src/shared/components/Spinner";
import { DadosUsuario } from "./tabs/dadosColaborador";
import { IUserDto } from "@/src/services/usuarios/usuarios.service";
import { CustomIconButton } from "@/src/components/Navbar/styles";
import { PatioUsuario } from "./tabs/patiosUsuario";
import { PermissaoUsuario } from "./tabs/permissionUsuarios";
import {  FotoPerfil } from "./tabs/contratoUsuario";

export const UsuariosEditMyselfComponent: React.FC<{
  usuario: IUserDto;
}> = ({ usuario }) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const tabLabels = [
    "Minhas informações",
    "Foto Perfil",
    "Pátio de acesso",
    "Direitos de Acesso ",
  ];

  return (
    <Container>
      <Content>
        <TabResultArea>
          <div className="actionArea">
            <Link href={"/"}>
              <CustomIconButton>
                <BackIcon />
              </CustomIconButton>
            </Link>
            <Title>Editar Usuário </Title>
          </div>
          <ScrollableTabsButtonAuto
            onChange={handleChange}
            value={value}
            tabLabels={tabLabels}
          />
          {usuario ? (
            <>
              {value === 0 && <DadosUsuario user={usuario} />}
              {value === 1 && <FotoPerfil user={usuario} />}

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

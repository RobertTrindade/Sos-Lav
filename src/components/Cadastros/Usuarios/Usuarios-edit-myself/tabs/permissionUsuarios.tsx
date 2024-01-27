"use client";
import * as React from "react";
import { IUserDto } from "@/src/services/usuarios/usuarios.service";
import {
  Li,
  LiText,
  PatiosSelecionadosContainer,
  PatiosSelecionadosTitle,
  Step2Container,
  Ul,
} from "../../Usuarios-novo/styles";
import { CustomCircularProgress } from "@/src/shared/components/Spinner";

export const PermissaoUsuario: React.FC<{ user: IUserDto }> = ({ user }) => {
  return (
    <Step2Container>
      <PatiosSelecionadosContainer>
        {user.Permissions.length ? (
          <>
            <PatiosSelecionadosTitle>
              Permissões do usuário :{" "}
            </PatiosSelecionadosTitle>

            <Ul component={"ul"}>
              {user.Permissions &&
                user.Permissions.map((permission) => (
                  <Li key={permission.id} component={"li"}>
                    <LiText> {permission.title}</LiText>
                  </Li>
                ))}
            </Ul>
          </>
        ) : (
          <CustomCircularProgress color="secondary" size={"large"} />
        )}
      </PatiosSelecionadosContainer>
    </Step2Container>
  );
};

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

export const PatioUsuario: React.FC<{ user: IUserDto }> = ({ user }) => {
  return (
    <Step2Container>
      <PatiosSelecionadosContainer>
        {user.patios.length ? (
          <>
            <PatiosSelecionadosTitle>
              Pátios Selecionados :{" "}
            </PatiosSelecionadosTitle>

            <Ul component={"ul"}>
              {user.patios &&
                user.patios.map((patio) => (
                  <Li key={patio.id} component={"li"}>
                    <LiText> {patio.nome}</LiText>
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

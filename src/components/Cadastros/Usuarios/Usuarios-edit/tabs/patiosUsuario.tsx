"use client";
import * as React from "react";
import CancelIcon from "@mui/icons-material/Cancel";

import {
  AutoCompleteComponentMultiple,
  INewValue,
} from "@/src/shared/components/AutoCompleteMultiple";
import usuariosService, {
  IUserDto,
} from "@/src/services/usuarios/usuarios.service";
import patiosService from "@/src/services/patios/patios.service";
import {
  AutoCompleteContainer,
  BoxInput,
  Label,
  Li,
  LiText,
  PatiosSelecionadosContainer,
  PatiosSelecionadosTitle,
  Step2Container,
  Ul,
} from "../../Usuarios-novo/styles";
import { CustomCircularProgress } from "@/src/shared/components/Spinner";
import { IconButton } from "@mui/material";

export const PatioUsuario: React.FC<{ user: IUserDto }> = ({ user }) => {
  const [patios, setPatios] = React.useState<INewValue[]>([]);
  const [userPatios, setUserPatios] = React.useState<IUserDto["patios"]>(
    user.patios
  );
  const [selectedPatios, setSelectedPatios] = React.useState<INewValue>();

  React.useEffect(() => {
    (async () => {
      const response = (await patiosService.getPatios()).map((item) => ({
        label: item.nome,
        id: item.id,
      }));

      const patiosNaoPossuidos = response.filter(
        (patioCadastrado) =>
          !userPatios.some(
            (patioUsuario) => patioUsuario.id === patioCadastrado.id
          )
      );

      setPatios(patiosNaoPossuidos);
    })();
  }, []);
  React.useEffect(() => {
    (async () => {
      if (selectedPatios) {
        try {
          const patiosNaoPossuidos = patios.filter(
            (patioCadastrado) =>
              !userPatios.some(
                (patioUsuario) => patioUsuario.id === patioCadastrado.id
              )
          );

          setPatios(patiosNaoPossuidos);
          const res = await usuariosService.addPatio(user.id, selectedPatios);
          setUserPatios(res.patios);
        } catch (error) {
          console.error(error);
        }
      }
      setSelectedPatios(undefined);
    })();
  }, [selectedPatios]);

  const handleRemovePatio = async (id: number) => {
    try {
      const patiosNaoPossuidos = patios.filter(
        (patioCadastrado) =>
          !userPatios.some(
            (patioUsuario) => patioUsuario.id === patioCadastrado.id
          )
      );

      setPatios(patiosNaoPossuidos);
      const res = await usuariosService.removePatio(user.id, {
        id: id,
      });
      setUserPatios(res.patios);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Step2Container>
      <AutoCompleteContainer>
        <BoxInput>
          <Label>Pátios</Label>

          <AutoCompleteComponentMultiple
            options={patios && patios}
            label="Pátios"
            noOptionsText="Nenhuma Pátio encontrado"
            SetStateAction={setSelectedPatios}
            multiple={false}
            target="patios"
            customProps={{
              value: selectedPatios,
            }}
          />
        </BoxInput>
      </AutoCompleteContainer>
      <PatiosSelecionadosContainer>
        {userPatios.length ? (
          <>
            <PatiosSelecionadosTitle>
              Pátios Selecionados :{" "}
            </PatiosSelecionadosTitle>

            <Ul component={"ul"}>
              {userPatios &&
                userPatios.map((patio) => (
                  <Li key={patio.id} component={"li"}>
                    <LiText> {patio.nome}</LiText>
                    <IconButton>
                      <CancelIcon
                        onClick={() => handleRemovePatio(patio.id!)}
                        color="secondary"
                      />
                    </IconButton>
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

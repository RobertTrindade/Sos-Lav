"use client";
import * as React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import { useUsuario } from "@/src/contexts/usuarios";
import {
  AutoCompleteContainer,
  BoxInput,
  CustomSecondaryButton,
  Label,
  Li,
  LiText,
  PatiosSelecionadosContainer,
  PatiosSelecionadosTitle,
  Step2Container,
  Ul,
} from "../../styles";
import { AutoCompleteComponentMultiple } from "@/src/shared/components/AutoCompleteMultiple";

export interface IPatio {
  title: string;
  id: number;
  label: string;
}

export const ChamadosStep2 = () => {
  const { UsuarioValues, patios, handleNewValue } = useUsuario();
  const handleRemovePatio = (id: number) => {
    const diffs = UsuarioValues.patios.filter((item) => item.id !== id);
    handleNewValue("patios", diffs);
  };

  const handleClearAll = () => {
    handleNewValue("patios", []);
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
            setStateActionWithTarget={handleNewValue}
            multiple={true}
            target="patios"
            customProps={{
              value: UsuarioValues.patios,
            }}
          />
        </BoxInput>
      </AutoCompleteContainer>

      <PatiosSelecionadosContainer>
        <PatiosSelecionadosTitle>
          Pátios Selecionados :{" "}
        </PatiosSelecionadosTitle>

        <Ul component={"ul"}>
          {UsuarioValues.patios &&
            UsuarioValues.patios.map((patio) => (
              <Li key={patio.id} component={"li"}>
                <LiText> {patio.label}</LiText>
                <CancelIcon
                  onClick={() => handleRemovePatio(patio.id)}
                  color="secondary"
                />
              </Li>
            ))}
        </Ul>

        <CustomSecondaryButton
          variant="contained"
          color="secondary"
          onClick={handleClearAll}
        >
          Limpar Todos
        </CustomSecondaryButton>
      </PatiosSelecionadosContainer>
    </Step2Container>
  );
};

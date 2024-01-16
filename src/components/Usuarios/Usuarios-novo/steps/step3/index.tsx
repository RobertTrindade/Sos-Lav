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

export interface IPermission {
  title: string;
  id: number;
  label: string;
}

export const ChamadosStep3 = () => {
  const { UsuarioValues, permission, handleNewValue } = useUsuario();

  const handleRemovePermission = (id: number) => {
    const diffs = UsuarioValues.permission.filter((item) => item.id !== id);
    handleNewValue("permission", diffs);
  };

  const handleClearAll = () => {
    handleNewValue("permission", []);
  };

  return (
    <Step2Container>
      <AutoCompleteContainer>
        <BoxInput>
          <Label>Permissões</Label>

          <AutoCompleteComponentMultiple
            options={permission && permission}
            label="permission"
            noOptionsText="Nenhuma Permissão encontrado"
            setStateActionWithTarget={handleNewValue}
            multiple={true}
            target="permission"
            customProps={{
              value: UsuarioValues.permission,
            }}
          />
        </BoxInput>
      </AutoCompleteContainer>

      <PatiosSelecionadosContainer>
        <PatiosSelecionadosTitle>
        Permissões Selecionadas :{" "}
        </PatiosSelecionadosTitle>

        <Ul component={"ul"}>
          {UsuarioValues.permission &&
            UsuarioValues.permission.map((permissio) => (
              <Li key={permissio.id} component={"li"}>
                <LiText> {permissio.label}</LiText>
                <CancelIcon
                  onClick={() => handleRemovePermission(permissio.id)}
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

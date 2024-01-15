"use client";
import * as React from "react";

import CancelIcon from "@mui/icons-material/Cancel";
import { useUsuario } from "@/src/contexts/usuarios";
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
} from "../../styles";
import Button from "@mui/material/Button";
import { AutoCompleteComponentMultiple } from "@/src/shared/components/AutoCompleteMultiple";
interface Permission {
  title: string;
  id: string;
  label: string;
}


export const ChamadosStep3 = () => {
  const { UsuarioValues, permission, handleNewValue } = useUsuario();

  const [selectedPermission, setSelectedPermission] = React.useState<Permission[]>(
    UsuarioValues.permission
    
  );

  const handleAutocompleteChange = (
    event: React.ChangeEvent<{}>,
    newValue: Permission[]
  ) => {
    setSelectedPermission(newValue);
    handleNewValue(newValue);
  };

  const handleRemovePermission = (permission: Permission) => {
    const updatedPatios = selectedPermission.filter(
      (selectedPatio) => selectedPatio.id !== permission.id
    );
    setSelectedPermission(updatedPatios);
    handleNewValue(updatedPatios);
  };

  const handleClearAll = () => {
    setSelectedPermission([]);
    handleNewValue([]);
  };

console.log(permission)

  function handleRemovePatio(permission: Permission): void {
    throw new Error("Function not implemented.");
  }

  return (
    <Step2Container>
      <AutoCompleteContainer>
        <BoxInput>
          <Label>Permissões</Label>
          <AutoCompleteComponentMultiple
            options={permission && permission}
            label="Permissão"
            noOptionsText="Nenhuma Permissão encontrado"
            setStateActionWithTarget={handleAutocompleteChange}
            multiple={true}
            target="status"
            value={undefined}
            customProps={{
              value: UsuarioValues.permission,
              onChange: (e) => handleNewValue("permission", e.target.value),
            }}    
                    />
        </BoxInput>
      </AutoCompleteContainer>

      <PatiosSelecionadosContainer>
        <PatiosSelecionadosTitle>
        Permissão Selecionadas :{" "}
        </PatiosSelecionadosTitle>

        <Ul component={"ul"}>
          {selectedPermission &&
            selectedPermission.map((permission) => (
              <Li key={permission.id} component={"li"}>
                <LiText> {permission.label}</LiText>
                {/* <CancelIcon
                  onClick={() => handleRemovePermission(permission)}
                  color="secondary"
                /> */}
              </Li>
            ))}
        </Ul>

        {/* <Button
          variant="contained"
          color="secondary"
          onClick={handleClearAll}
          style={{
            color: "black",
            border: "1px solid white",
            marginTop: "20px",
          }}
        >
          Limpar Todos
        </Button> */}
      </PatiosSelecionadosContainer>
    </Step2Container>
  );
};

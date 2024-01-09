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

interface Patio {
  title: string;
  id: string;
  label: string;
}

export const ChamadosStep3 = () => {
  const { UsuarioValues, permission, handleNewValue } = useUsuario();

  const [selectedPatios, setSelectedPatios] = React.useState<Patio[]>(
    UsuarioValues.patio
  );

  const handleAutocompleteChange = (
    event: React.ChangeEvent<{}>,
    newValue: Patio[]
  ) => {
    setSelectedPatios(newValue);
    handleNewValue("patio", newValue);
  };

  const handleRemovePatio = (patio: Patio) => {
    const updatedPatios = selectedPatios.filter(
      (selectedPatio) => selectedPatio.id !== patio.id
    );
    setSelectedPatios(updatedPatios);
    handleNewValue("patio", updatedPatios);
  };

  const handleClearAll = () => {
    setSelectedPatios([]);
    handleNewValue("patio", []);
  };

console.log(permission)

  return (
    <Step2Container>
      <AutoCompleteContainer>
        <BoxInput>
          <Label>Permissões</Label>
          <AutoCompleteComponentMultiple
            options={permission && permission}
            label="Pátios"
            noOptionsText="Nenhuma Pátio encontrado"
            setStateActionWithTarget={handleAutocompleteChange}
            multiple={true}
            target="status"
          />
        </BoxInput>
      </AutoCompleteContainer>

      <PatiosSelecionadosContainer>
        <PatiosSelecionadosTitle>
          Pátios Selecionados :{" "}
        </PatiosSelecionadosTitle>

        <Ul component={"ul"}>
          {selectedPatios &&
            selectedPatios.map((patio) => (
              <Li key={patio.id} component={"li"}>
                <LiText> {patio.label}</LiText>
                <CancelIcon
                  onClick={() => handleRemovePatio(patio)}
                  color="secondary"
                />
              </Li>
            ))}
        </Ul>

        <Button
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
        </Button>
      </PatiosSelecionadosContainer>
    </Step2Container>
  );
};

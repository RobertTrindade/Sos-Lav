"use client";
import * as React from "react";
// import CancelIcon from "@mui/icons-material/Cancel";
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
import { INewValue } from "@/src/shared/components/AutoComplete";
import { Dayjs } from "dayjs";
interface Patio {
  title: string;
  id: string;
  label: string;
}

export const ChamadosStep2 = () => {
  const { UsuarioValues, patios, handleNewValue } = useUsuario();

  const [selectedPatios, setSelectedPatios] = React.useState<Patio[]>(
    UsuarioValues.patios
  );

  const handleAutocompleteChange = (
    event: React.ChangeEvent<{}>,
    newValue: Patio[]
  ) => {
    setSelectedPatios(newValue);
    handleNewValue("Patio", newValue);
  };
  const handleRemovePatio = (patio: Patio) => {
    const updatedPatios = selectedPatios.filter(
      (selectedPatio) => selectedPatio.id !== patio.id
    );
    setSelectedPatios(updatedPatios);
    handleNewValue("Patio", updatedPatios);
  };

  const handleClearAll = () => {
    setSelectedPatios([]);
    handleNewValue("Patio", []);
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
  setStateActionWithTarget={handleAutocompleteChange}
  multiple={true}
  target="patios" 
  value={UsuarioValues.patios} 
  customProps={{
    value: UsuarioValues.patios,
    onChange: (e) => handleNewValue("patios", e.target.value),
  }}
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
                {/* <CancelIcon
                  onClick={() => handleRemovePatio(patio)}
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

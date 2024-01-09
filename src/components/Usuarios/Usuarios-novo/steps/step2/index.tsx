import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CancelIcon from '@mui/icons-material/Cancel';
import { useUsuario } from "@/src/contexts/usuarios";
import { BoxInput, Form } from "../../styles";
import Button from "@mui/material/Button";

interface Patio {
  title: string;
  id: string;
  label: string;
}

export const ChamadosStep2 = () => {
  const { UsuarioValues, patios, handleNewValue } = useUsuario();

  const [selectedPatios, setSelectedPatios] = React.useState<Patio[]>(UsuarioValues.patio || []);

  const handleAutocompleteChange = (event: React.ChangeEvent<{}>, newValue: Patio[]) => {
    setSelectedPatios(newValue);
    handleNewValue("patio", newValue);
  };

  const handleRemovePatio = (patio: Patio) => {
    const updatedPatios = selectedPatios.filter((selectedPatio) => selectedPatio.id !== patio.id);
    setSelectedPatios(updatedPatios);
    handleNewValue("patio", updatedPatios);
  };

  const handleClearAll = () => {
    setSelectedPatios([]);
    handleNewValue("patio", []); 
  };

  return (
    <Form style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <BoxInput>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <Autocomplete
            multiple
            id="patio-autocomplete"
            options={patios as unknown as Patio[]}
            disableCloseOnSelect
            getOptionLabel={(option) => option.title}
            value={selectedPatios}
            onChange={handleAutocompleteChange}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                  checkedIcon={<CheckBoxIcon fontSize="small" />}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option.label}
              </li>
            )}
            style={{ width: 1000 }}
            renderInput={(params) => (
              <TextField {...params} label="Pátio" placeholder="Selecione os pátios" fullWidth />
            )}
          />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: 20 }}>
            <strong style={{ fontSize: '20px', color: 'white', marginBottom: '5px' }}>Pátios Selecionados:</strong>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {selectedPatios.map((patio) => (
                <li key={patio.id} style={{ display: 'flex', alignItems: 'center', fontSize: '20px', color: 'white' }}>
                  {patio.label}
                  <CancelIcon
                    onClick={() => handleRemovePatio(patio)}
                    style={{ cursor: 'pointer', marginLeft: '5px' }}
                  />
                </li>
              ))}
            </ul>
            <Button
            variant="contained"
            color="secondary"
             onClick={handleClearAll}
             style={{ color: 'black', border: '1px solid white', marginTop: '20px' }}>
              Limpar Todos
            
            </Button>
          
          </div>
        </div>
      </BoxInput>
    </Form>
  );
};

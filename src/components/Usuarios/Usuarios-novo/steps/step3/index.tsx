import { InputComponent } from "@/src/shared/components/Inputs";
import { BoxInput, Form } from "../../styles";
import { AutoCompleteComponent } from "@/src/shared/components/AutoComplete";
import { FC, useState, useEffect } from "react";
import { useChamados } from "@/src/contexts/chamados";
import { cepMask } from "@/src/utils/cepMask";
import * as React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import Button from "@mui/material/Button";
import { Autocomplete, TextField } from "@mui/material";

// Defini o tipo do array -> AcessoUsuario
type Acesso = { title: string; id: number };

export const ChamadosStep3: FC = () => {
  const [selectedItems, setSelectedItems] = useState<Acesso[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleSelect = (_event: any, value: Acesso[] | null) => {
    if (value) {
      const uniqueItems = value.filter(item => !selectedItems.some(selectedItem => selectedItem.title === item.title));
      setSelectedItems(prevItems => [...prevItems, ...uniqueItems]);
      setInputValue('');
    }
  };

  const handleRemoveItem = (item: Acesso) => {
    setSelectedItems(prevItems => prevItems.filter(selected => selected !== item));
  };

  const handleClearAll = () => {
    setSelectedItems([]);
  };

  //Lista dos acesso -> buscar com o Thiago em que lugar está o acesso para modificar 
  const AcessoUsuario: Acesso[] = [
    { title: "Dashboard", id: 1 },
    { title: "Chamados", id: 2 },
    { title: "NCV", id: 3 },
    { title: "Usuários", id: 4 },
    { title: "Motoristas", id: 5 },
  ];

  return (
    //formulario
    <Form style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <BoxInput style={{ width: '500px', margin: 'auto',  }}>
  <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      <Autocomplete
        multiple
        id="checkboxes-tags-demo"
        options={AcessoUsuario}
        disableCloseOnSelect
        getOptionLabel={(option) => option.title}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            {option.title}
          </li>
        )}
        style={{ width: 500, marginBottom: '20px' }}
        value={[]}
        inputValue={inputValue}
        onInputChange={(_event, newInputValue) => setInputValue(newInputValue)}
        onChange={handleSelect}
        renderInput={(params) => (
          <TextField {...params} label="Acessos" placeholder="Adicionar" />
        )}
      />

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{ fontSize: '20px', color: '#aaa', marginBottom: '5px' }}>Itens Selecionados:</h2>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {selectedItems.map((item) => (
            <li key={item.title} style={{ display: 'flex', alignItems: 'center', fontSize: '20px', color: '#aaa' }}>
              {item.title}
              <CancelIcon
                onClick={() => handleRemoveItem(item)}
                style={{ cursor: 'pointer', marginLeft: '5px' }}
              />
            </li>
          ))}
        </ul>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleClearAll}
          style={{ color: 'black', border: '1px solid white', marginTop: '10px' }}
        >
          Limpar Todos
        </Button>
      </div>
    </div>
  </BoxInput>
</Form>
  );
};

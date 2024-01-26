import { InputComponent } from "@/src/shared/components/Inputs";
import { usePatios } from "@/src/contexts/patios";
import { Checkbox, FormControlLabel } from "@mui/material";
import { BoxInput, Form, Label } from "../../../Patios-novo/styles";
import { Container, Row, Title } from "./style";
import {
  DateValidationError,
  PickerChangeHandlerContext,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import {
  BoxInputRow,
} from "../../styles";
import { DataPickerComponent } from "@/src/shared/components/Inputs/datePIcker";
import { cepMask } from "@/src/utils/cepMask";
import axios from "axios";

export const PatiosStep3 = () => {
  const {
    patioValues,
    handleNewValue,
  } = usePatios();

  const handleChangeTime = (
    value: unknown,
    context: PickerChangeHandlerContext<DateValidationError>
    ) => {
      const time = value as Date;
      const date = dayjs(time.toISOString()).toDate();
  };

  const getViaCepData = async (cep: any) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar dados do ViaCep:', error);
      return null;
    }
  };

  const handleCepChange = async (cep: any) => {
    // Chame a função do ViaCep para obter os detalhes do endereço
    const viaCepData = await getViaCepData(cep);

    // Atualize o estado com os dados obtidos
    if (viaCepData) {
      handleNewValue('bairro', viaCepData.bairro || '');
      handleNewValue('cidade', viaCepData.localidade || '');
      handleNewValue('estado', viaCepData.uf || '');
      handleNewValue('endereco', viaCepData.logradouro || '');
    }
  };

  return (
    <Container>
      <Form>
        <BoxInput>
          <InputComponent 
            label="Bairro" 
            content="Bairro"
            customProps={{
              value: patioValues.bairro,  
              onChange: (e) => {
                handleNewValue("bairro", e.target.value)
              },
            }} 
          />
        </BoxInput>

        <BoxInput>
          <InputComponent 
            label="CEP" 
            content="CEP"
            customProps={{
              value: patioValues.cep,
              onChange: (e) => {
                const newCep = cepMask(e.target.value);
                handleNewValue("cep", newCep);
                // Chame a função para buscar os dados do ViaCep quando o CEP é alterado
                handleCepChange(newCep);
              },
            }} 
          />
        </BoxInput>

        <BoxInput>
          <InputComponent 
            label="Cidade" 
            content="Cidade"
            customProps={{
              value: patioValues.cidade,
              onChange: (e) => {
                handleNewValue("cidade", e.target.value)
              },
            }} 
          />
        </BoxInput>

        <BoxInput>
          <InputComponent 
            label="Estado" 
            content="Estado"
            customProps={{
              value: patioValues.estado,
              onChange: (e) => {
                handleNewValue("estado", e.target.value)
              },
            }} 
          />
        </BoxInput>

        <BoxInput>
          <DataPickerComponent
            handleChangeTime={(value) => {
              const time = value as Date;
              const date = dayjs(time.toISOString()).toDate();
              handleNewValue("createdAt", dayjs(date)); 
            }}
            value={patioValues.createdAt ? new Date(patioValues.createdAt) : null}
            label="Data de Cadastro"
            
          />
        </BoxInput>  

        <BoxInput>
          <InputComponent 
            label="Longitude" 
            content="Longitude"
            customProps={{
              value: patioValues.longitude,
              onChange: (e) => {
                handleNewValue("longitude", e.target.value)
              },
            }} 
          />
        </BoxInput>

        <BoxInput>
          <InputComponent 
            label="Latitude" 
            content="Latitude"
            customProps={{
              value: patioValues.latitude,
              onChange: (e) => {
                handleNewValue("latitude", e.target.value)
              },
            }} 
          />
        </BoxInput>

        <BoxInput>
          <InputComponent 
            label="Endereço" 
            content="Endereço"
            customProps={{
              value: patioValues.endereco,
              onChange: (e) => {
                handleNewValue("endereco", e.target.value)
              },
            }} 
          />
        </BoxInput>  
      </Form>
    </Container>
  );
};

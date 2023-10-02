"use client";

import { useEffect, useState } from "react";
import { AutoCompleteComponent } from "../../AutoComplete";
import { InputComponent } from "../../Inputs";
import { Container } from "./styles";
import ibgeService, { IIbgeReturnDto } from "@/src/services/IBGE/ibge.service";
import { useRegister } from "@/src/contexts/registerContext";
import { cepMask } from "@/src/utils/cepMask";
import ViaCepService from "@/src/services/IBGE/viaCep.service";
import { Typography } from "@mui/material";
export const Step2Component = () => {
  const { handleChangeContext, user } = useRegister();

  const [states, setStates] = useState<IIbgeReturnDto[]>([]);
  const [selectedState, setSelectedState] = useState<IIbgeReturnDto>();

  const [cities, setCities] = useState<IIbgeReturnDto[]>([]);
  const [selectedCity, setSelectedCity] = useState<IIbgeReturnDto>();

  const [cep, setCep] = useState<string>(user.step2.cep);
  const [endereco, setEndereco] = useState<string>(user.step2.endereco);
  const [numero, setNumero] = useState<string>(user.step2.numero);
  const [complemento, setComplemento] = useState<string>(
    user.step2.complemento
  );
  const [bairro, setBairro] = useState<string>(user.step2.bairro);

  useEffect(() => {
    fetchStates();
  }, []);

  useEffect(() => {
    fetchCities();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedState]);

  const fetchStates = async () => {
    try {
      const response = await ibgeService.getStates();
      setStates(response);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCities = async () => {
    try {
      if (!selectedState) return;
      const response = await ibgeService.getCities(selectedState.uf);
      setCities(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        if (cep.length < 9) return;
        const data = await ViaCepService.getDataByCep(cep);
        setEndereco(data.logradouro);
        if(data.complemento){
          setComplemento(data.complemento);

        }
        setBairro(data.bairro);

        const findState = states.find((state) => state.uf === data.uf);

        if (!findState) return;
        setSelectedState(findState);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [cep]);

  useEffect(() => {
    handleChangeContext(2, "cep", cep);
    handleChangeContext(2, "endereco", endereco);
    handleChangeContext(2, "numero", numero);
    handleChangeContext(2, "complemento", complemento);
    handleChangeContext(2, "bairro", bairro);
    handleChangeContext(2, "estado", selectedState?.label as string);
    handleChangeContext(2, "cidade", selectedCity?.label as string);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    bairro,
    cep,
    complemento,
    endereco,
    numero,
    selectedCity?.label,
    selectedState?.label,
  ]);

  console.log(user);
  return (
    <Container>
      <InputComponent
        label={`CEP`}
        type="text"
        customProps={{
          required: true,
          value: cep,
          error: cep.length > 5 && cep.length < 9,
          onChange: (e) => {
            const inputCEP = cepMask(e.target.value);

            if (inputCEP.length <= 9) {
              setCep(inputCEP);
            }
          },
        }}
      />
      {cep.length > 5 && cep.length < 9 && (
        <Typography sx={{ color: "red", fontSize: "10px", fontWeight: "bold" }}>
          ** CEP inválido
        </Typography>
      )}

      <InputComponent
        label={`Endereço`}
        type="text"
        customProps={{
          required: true,
          value: endereco,
          onChange: (e) => setEndereco(e.target.value),
        }}
      />

      <InputComponent
        label={`Numero`}
        type="number"
        customProps={{
          required: true,
          value: numero,
          onChange: (e) => setNumero(e.target.value),
        }}
      />

      <InputComponent
        label={`Complemento`}
        type="text"
        customProps={{
          required: true,
          value: complemento,
          onChange: (e) => setComplemento(e.target.value),
        }}
      />

      <InputComponent
        label={`Bairro`}
        type="text"
        customProps={{
          required: true,
          value: bairro,
          onChange: (e) => setBairro(e.target.value),
        }}
      />
      <div className="StatesAndCities">
        <AutoCompleteComponent
          label="Estado"
          options={states}
          SetStateAction={setSelectedState}
        />

        <AutoCompleteComponent
          label="Cidade"
          options={cities}
          SetStateAction={setSelectedCity}
        />
      </div>
    </Container>
  );
};

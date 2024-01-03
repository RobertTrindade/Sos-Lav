import { FC, useState, useEffect } from "react";
import { BoxInput, Form, Label } from "../../../Chamados-novo/styles";
import { InputComponent } from "@/src/shared/components/Inputs";
import { AutoCompleteComponent } from "@/src/shared/components/AutoComplete";
import { useChamados } from "@/src/contexts/chamadosContext";
import { GeneratorValues } from "./values";

export const ChamadosStep2: FC<{
  selectedLocation: google.maps.LatLng | null | undefined;
  selectedPlace: google.maps.places.PlaceResult | null | undefined;
}> = ({ selectedLocation, selectedPlace }) => {
  const { chamadosValues, patios, handleNewValue } = useChamados();

  useEffect(() => {
    // Atualizar os estados quando selectedPlace ou selectedLocation mudar
    if (selectedPlace) {
      const { estado, uf, municipio, distrito, cep, endereco } =
        GeneratorValues(selectedPlace);

      handleNewValue("estado", estado);
      handleNewValue("uf", uf);
      handleNewValue("municipio", municipio);
      handleNewValue("distrito", distrito);
      handleNewValue("cep", cep);
      handleNewValue("enderecoCompleto", endereco);
    }

    if (selectedLocation) {
      handleNewValue("latitude", selectedLocation?.lat());
      handleNewValue("longitude", selectedLocation?.lng());
    }
  }, [selectedPlace, selectedLocation]);
  return (
    <Form>
      <BoxInput>
        <InputComponent
          label="Estado"
          content="Estado"
          customProps={{
            value: chamadosValues.estado,
            onChange: (e) => {
              handleNewValue("estado", e.target.value);
            },
          }}
        />
      </BoxInput>

      <BoxInput>
        <InputComponent
          label="UF"
          content="UF"
          customProps={{
            value: chamadosValues.uf,
            onChange: (e) => {
              handleNewValue("uf", e.target.value);
            },
          }}
        />
      </BoxInput>
      <BoxInput>
        <InputComponent
          label="Município"
          content="Município"
          customProps={{
            value: chamadosValues.municipio,
            onChange: (e) => {
              handleNewValue("municipio", e.target.value);
            },
          }}
        />
      </BoxInput>

      <BoxInput>
        <InputComponent
          label="Distrito"
          content="Distrito"
          customProps={{
            value: chamadosValues.distrito,
            onChange: (e) => {
              handleNewValue("distrito", e.target.value);
            },
          }}
        />
      </BoxInput>

      <BoxInput>
        <InputComponent
          label="CEP"
          content="CEP"
          customProps={{
            value: chamadosValues.cep,
            onChange: (e) => {
              handleNewValue("cep", e.target.value);
            },
          }}
        />
      </BoxInput>

      <BoxInput>
        <InputComponent
          label="Endereço Completo"
          content="Endereço Completo"
          customProps={{
            value: chamadosValues?.enderecoCompleto,
            onChange: (e) => {
              handleNewValue("enderecoCompleto", e.target.value);
            },
          }}
        />
      </BoxInput>

      <BoxInput>
        <InputComponent
          label="Latitude"
          content="Latitude"
          customProps={{
            value: chamadosValues?.latitude,
            readOnly: true,
            onChange: (e) => {
              handleNewValue("latitude", e.target.value);
            },
          }}
        />
      </BoxInput>

      <BoxInput>
        <InputComponent
          label="Longitude"
          content="Longitude"
          customProps={{
            value: chamadosValues.longitude,
            readOnly: true,
            onChange: (e) => {
              handleNewValue("longitude", e.target.value);
            },
          }}
        />
      </BoxInput>
      <BoxInput>
        <Label>Pátio</Label>
        <AutoCompleteComponent
          options={patios}
          label="Pátio"
          value={chamadosValues.patio}
          target="patio"
          noOptionsText="Nenhum Pátio encontrado"
          setStateActionWithTarget={handleNewValue}
        />
      </BoxInput>

      <BoxInput>
        <InputComponent
          label="Detalhes"
          content="Detalhes"
          customStyles={{
            color: "${({ theme }) => theme.palette.secondary.main}",
            height: "auto",
          }}
          customProps={{
            value: chamadosValues.detalhes,
            multiline: true,
            onChange: (e) => {
              handleNewValue("detalhes", e.target.value);
            },
          }}
        />
      </BoxInput>
    </Form>
  );
};

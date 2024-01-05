"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useGeolocation } from "../../hooks/useGeolocation";
import { Dayjs } from "dayjs";
import PatiosService, {
  IPatiosServiceDTO,
} from "../../services/patios/patios.service";
import { INewValue } from "../../shared/components/AutoComplete";
import chamadosService, {
  IChamadosResponse,
} from "../../services/chamados/chamados.service";

// Interface para representar os dados do usuário
export interface IChamadosValues {
  patio: INewValue | undefined;
  equipamentoSolicitado: INewValue | undefined;
  tipoVeiculo: INewValue | undefined;
  tipoApreensao: INewValue | undefined;
  urgencia: INewValue | undefined;
  origem: INewValue | undefined;
  estado: INewValue | string | undefined;
  uf: INewValue | string | undefined;
  detalhes: INewValue | string | undefined;
  municipio: INewValue | string | undefined;
  distrito: INewValue | string | undefined;
  cep: INewValue | string | undefined;
  enderecoCompleto: INewValue | string | undefined;
  latitude: INewValue | string | undefined;
  longitude: INewValue | string | undefined;
  multiple: boolean;
  vehiclesQuantity: INewValue | string | undefined | number;
  driversQuantity: INewValue | string | undefined | number;
}

// Interface para o contexto de registro
interface IChamadosContext {
  location: GeolocationPosition | null;
  error: string;
  handleNewValue: (
    target: keyof IChamadosValues,
    value: Dayjs | null | string | number | INewValue
  ) => void;
  setSelectedLocation: React.Dispatch<
    React.SetStateAction<google.maps.LatLng | null | undefined>
  >;
  selectedLocation: google.maps.LatLng | null | undefined;

  setSelectedPlace: React.Dispatch<
    React.SetStateAction<google.maps.places.PlaceResult | null | undefined>
  >;
  selectedPlace: google.maps.places.PlaceResult | null | undefined;

  chamadosValues: IChamadosValues;

  patios: INewValue[];
  handleCreateChamados: () => Promise<IChamadosResponse>;
  patioWithCoods: IPatiosServiceDTO[];
  reset : () => void
}

const initial = {
  patio: undefined,
  equipamentoSolicitado: undefined,
  tipoVeiculo: undefined,
  tipoApreensao: undefined,
  urgencia: undefined,
  origem: undefined,
  estado: undefined,
  uf: undefined,
  municipio: undefined,
  distrito: undefined,
  cep: undefined,
  latitude: undefined,
  longitude: undefined,
  enderecoCompleto: undefined,
  multiple: false,
  vehiclesQuantity: 1,
  driversQuantity: 1,
  detalhes: undefined,
  localizacao: {
    estado:"",
    uf:"",
    municipio:"",
    distrito:"",
    cep:"",
    latitude: "",
    longitude: "",
    enderecoComplet:"",
  },
};
// Crie o contexto de registro
const ChamadosContext = createContext<IChamadosContext | undefined>(undefined);

// Provedor de registro que mantém o estado dos usuários
export const ChamadosProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [patios, setPatios] = useState<INewValue[]>([]);
  const [patioWithCoods, setPatioWithCoods] = useState<IPatiosServiceDTO[]>([]);

  useEffect(() => {
    (async () => {
      const response = (await PatiosService.getPatios()).map((item) => ({
        label: item.nome,
        id: item.id,
      }));

      setPatios(response);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const response = await PatiosService.getPatios();
      setPatioWithCoods(response);
    })();
  }, []);

  const [chamadosValues, setChamadosValues] = useState<IChamadosValues>({
    ...initial,
  });

  const handleNewValue = (target: keyof IChamadosValues, value: any) => {
    setChamadosValues((data) => ({
      ...data,
      [target]: value,
    }));
  };

  const handleCreateChamados = async () => {
    const {
      patio,
      equipamentoSolicitado,
      tipoApreensao,
      tipoVeiculo,
      uf,
      urgencia,
      origem,
      estado,
      latitude,
      longitude,
      vehiclesQuantity,
      detalhes,
      distrito,
      driversQuantity,
      multiple,
      municipio,
      cep,
      enderecoCompleto,
    } = chamadosValues;
    const payload = {
      patio: patio?.id,
      equipamentoSolicitado: equipamentoSolicitado?.label,
      tipoVeiculo: tipoVeiculo?.label,
      tipoApreensao: tipoApreensao?.label,
      urgencia: urgencia?.label,
      origem: origem?.label,
      multiple,
      vehiclesQuantity,
      driversQuantity,
      detalhes,
      localizacao: {
        estado,
        uf,
        municipio,
        distrito,
        cep,
        latitude: String(latitude),
        longitude: String(longitude),
        enderecoCompleto,
      },
    };
    return await chamadosService.createChamado(payload);
  };

  const reset = () => {
    setChamadosValues(initial);
  };

  const { location, error } = useGeolocation();

  const [selectedLocation, setSelectedLocation] =
    React.useState<google.maps.LatLng | null>();

  const [selectedPlace, setSelectedPlace] = React.useState<
    google.maps.places.PlaceResult | null | undefined
  >();

  return (
    <ChamadosContext.Provider
      value={{
        location,
        error,
        selectedLocation,
        setSelectedLocation,
        setSelectedPlace,
        selectedPlace,
        chamadosValues,
        handleNewValue,
        patios,
        handleCreateChamados,
        patioWithCoods,
        reset
      }}
    >
      {children}
    </ChamadosContext.Provider>
  );
};

export const useChamados = (): IChamadosContext => {
  const context = useContext(ChamadosContext);
  if (!context) {
    throw new Error("useChamados deve ser usado dentro de um RegisterProvider");
  }
  return context;
};

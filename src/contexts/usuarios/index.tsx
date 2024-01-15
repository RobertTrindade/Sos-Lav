"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import PatiosService, {
  IPatiosServiceDTO,
} from "../../services/patios/patios.service";
import { INewValue } from "../../shared/components/AutoComplete";
import { Dayjs } from "dayjs";
import chamadosService, {
  IChamadosResponse,
} from "../../services/chamados/chamados.service";
import { useGeolocation } from "@/src/hooks/useGeolocation";
import permissionsService, {
  IPermissions,
} from "@/src/services/permissions/permissions.service";

export interface IUsuarioValues {
  patios: any;
  permission: any;
  name: string;
  email: string;
  cargoSetor: string;


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
interface IUsuariosContext {
  location: GeolocationPosition | null;
  error: string;
  
  handleNewValue: (
    target: keyof IUsuarioValues,
    value: Dayjs | null | string | number | INewValue | INewValue[]
  ) => void;
  setSelectedLocation: React.Dispatch<
    React.SetStateAction<google.maps.LatLng | null | undefined>
  >;
  selectedLocation: google.maps.LatLng | null | undefined;

  setSelectedPlace: React.Dispatch<
    React.SetStateAction<google.maps.places.PlaceResult | null | undefined>
  >;
  selectedPlace: google.maps.places.PlaceResult | null | undefined;

  UsuarioValues: IUsuarioValues;

  patios: INewValue[];
  permission: INewValue[];
  handleCreateUsuario: () => Promise<IChamadosResponse>;
  patioWithCoods: IPatiosServiceDTO[];
  reset: () => void;
}

const initial = {
  name: "",
  email: "",
  cargoSetor:"",
  patios: "",
  permissions:"",
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
    estado: "",
    uf: "",
    municipio: "",
    distrito: "",
    cep: "",
    latitude: "",
    longitude: "",
    enderecoComplet: "",
  },
};


const UsuariosContext = createContext<IUsuariosContext | undefined>(undefined);

// Provedor de registro que mantém o estado dos usuários
export const UsuariosProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [patios, setPatios] = useState<INewValue[]>([]);
  const [permission, setPermissions] = useState<INewValue[]>([]);

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

  useEffect(() => {
    (async () => {
      const response = await permissionsService.getPermissions();

      const permissions = response.map((item) => ({
        label: item.title,
        id: item.id,
      }));
      setPermissions(permissions);
    })();
  }, []);

  const [UsuarioValues, setUsuarioValues] = useState<IUsuarioValues>({
    ...initial,
  });

  const handleNewValue = (target: keyof IUsuarioValues, value: any) => {
    setUsuarioValues((data) => ({
      ...data,
      [target]: value,
    }));
  };
  const handleCreateUsuario = async () => {
    const {
      patios,
      
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
    } = UsuarioValues;
      const payload = {
      patios: patios?.id,
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
    setUsuarioValues(initial);
  };

  const { location, error } = useGeolocation();

  const [selectedLocation, setSelectedLocation] =
    React.useState<google.maps.LatLng | null>();

  const [selectedPlace, setSelectedPlace] = React.useState<
    google.maps.places.PlaceResult | null | undefined
  >();
  return (
    <UsuariosContext.Provider
      value={{
        location,
        error,
        selectedLocation,
        setSelectedLocation,
        setSelectedPlace,
        selectedPlace,
        UsuarioValues,
        handleNewValue,
        patios,
        handleCreateUsuario,
        patioWithCoods,
        reset,
        permission,
      }}
    >
      {children}
    </UsuariosContext.Provider>
  );
};

export const useUsuario = (): IUsuariosContext => {
  const context = useContext(UsuariosContext);
  if (!context) {
    throw new Error("useUsuario deve ser usado dentro de um RegisterProvider");
  }
  return context;
};

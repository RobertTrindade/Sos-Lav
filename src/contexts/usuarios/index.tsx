"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import PatiosService from "../../services/patios/patios.service";
import { INewValue } from "../../shared/components/AutoComplete";
import { Dayjs } from "dayjs";

import permissionsService from "@/src/services/permissions/permissions.service";
import { IPatio } from "@/src/components/Usuarios/Usuarios-novo/steps/step2";

export interface IUsuarioValues {
  patios: IPatio[];
  permission?: string[];
  name: string;
  email: string;
  cargoSetor: string;
}

// Interface para o contexto de registro
interface IUsuariosContext {
  handleNewValue: (
    target: keyof IUsuarioValues,
    value:
      | Dayjs
      | null
      | string
      | number
      | INewValue
      | INewValue[]
      | IPatio
      | IPatio[]
  ) => void;

  UsuarioValues: IUsuarioValues;

  patios: INewValue[];
  permission: INewValue[];
  handleCreateUsuario: () => Promise<void>;
  reset: () => void;
}

const initial = {
  name: "",
  email: "",
  cargoSetor: "",
  patios: [],
  permissions: [],
};

const UsuariosContext = createContext<IUsuariosContext | undefined>(undefined);

// Provedor de registro que mantém o estado dos usuários
export const UsuariosProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [patios, setPatios] = useState<INewValue[]>([]);
  const [permission, setPermissions] = useState<INewValue[]>([]);

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
    const { patios } = UsuarioValues;

    //return await chamadosService.createChamado(payload);
  };

  const reset = () => {
    setUsuarioValues(initial);
  };

  return (
    <UsuariosContext.Provider
      value={{
        UsuarioValues,
        handleNewValue,
        patios,
        reset,
        permission,
        handleCreateUsuario,
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

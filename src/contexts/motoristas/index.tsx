"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import MotoristasService,{
  IMotoristaDto,
} from "../../services/motoristas/motoristas.service";
import { INewValue } from "../../shared/components/AutoComplete";
import { Dayjs } from "dayjs";
import { IPatio } from "@/src/components/Usuarios/Usuarios-novo/steps/step2";


export interface IMotoristasValues {
  motoristas: INewValue | undefined;
}

// Interface para o contexto do motoristas
interface IMotoristasContext {
  handleNewValue: (
    target: keyof IMotoristasValues,
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

  MotoristasValues: IMotoristasValues;

  motoristas: INewValue[];
  handleCreateMotoristas: () => Promise<void>;
  reset: () => void;
}

const initial = {
 motoristas: undefined,
};

// Crie o contexto de motoristas
const MotoristasContext = createContext<IMotoristasContext | undefined>(undefined);

// Provedor de registro que mantém o estado dos usuários
export const MotoristaProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [motoristas, setMotoristas] = useState<INewValue[]>([]);

  useEffect(() => {
    (async () => {
      const response = (await MotoristasService.getMotoristas()).map((item) => ({
        label: item.name,
        id: item.id,
      }));
      setMotoristas(response);
    })();
  }, []);

  const [MotoristasValues, setMotoristasValues] = useState<IMotoristasValues>({
    ...initial,
  });

  const handleNewValue = (target: keyof IMotoristasValues, value: any) => {
    setMotoristasValues((data) => ({
      ...data,
      [target]: value,
    }));
  };
  const handleCreateMotoristas = async () => {
  
    const {
      motoristas,
    } = MotoristasValues;
    //return await chamadosService.createChamado(payload);
  };

  const reset = () => {
    setMotoristasValues(initial);
  };

  return (
    <MotoristasContext.Provider
      value={{
        MotoristasValues,
        handleNewValue,
        reset,
        motoristas,
        handleCreateMotoristas,
      }}
    >
      {children}
    </MotoristasContext.Provider>
  );
};

export const useMotoristas = (): IMotoristasContext => {
  const context = useContext(MotoristasContext);
  if (!context) {
    throw new Error("useMotoristas deve ser usado dentro de um RegisterProvider");
  }
  return context;
};

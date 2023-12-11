"use client";
import React, { createContext, useContext, useState } from "react";
import { Dayjs } from "dayjs";
import { INewValue } from "@/src/shared/components/AutoComplete";

// Interface para representar os dados do usuário
export interface IUsuariosValues {
  name?: string;
}

// Interface para o contexto de registro
interface IUsuariosContext {
  handleNewValue: (
    target: keyof IUsuariosValues,
    value: Dayjs | null | string | number | INewValue
  ) => void;

  user: IUsuariosValues;
}

// Crie o contexto de registro
const UsuariosContext = createContext<IUsuariosContext | undefined>(undefined);

// Provedor de registro que mantém o estado dos usuários
export const UsuariosProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [user, setUser] = useState<IUsuariosValues>({
    name: "",
  });

  const handleNewValue = (target: keyof IUsuariosValues, value: any) => {
    setUser((data) => ({
      ...data,
      [target]: value,
    }));
  };

  return (
    <UsuariosContext.Provider
      value={{
        user,
        handleNewValue,
      }}
    >
      {children}
    </UsuariosContext.Provider>
  );
};

export const useUsuarios = (): IUsuariosContext => {
  const context = useContext(UsuariosContext);
  if (!context) {
    throw new Error("useUsuarios deve ser usado dentro de um RegisterProvider");
  }
  return context;
};

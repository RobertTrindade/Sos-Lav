"use client";
import React, { createContext, useContext, useState } from "react";

// Interface para representar os dados do usuário
interface IUser {
  step1: {
    userType: string;
  };

  step2: {
    cep: string;
    endereco: string;
    numero: string;
    complemento: string;
    bairro: string;
    estado: string;
    cidade: string;
  };
}

// Interface para o contexto de registro
interface IRegisterContext {
  user: IUser;
  handleChangeContext: (step: number, target: string, value: string) => void;
  hasPendency: (step: number) => boolean;
}

// Crie o contexto de registro
const RegisterContext = createContext<IRegisterContext | undefined>(undefined);

// Provedor de registro que mantém o estado dos usuários
export const RegisterProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [user, setUser] = useState<IUser>({
    step1: {
      userType: "pf",
    },
    step2: {
      cep: "",
      endereco: "",
      numero: "",
      complemento: "",
      bairro: "",
      estado: "",
      cidade: "",
    },
  });

  const hasPendency = (step: number) => {
    const stepKey = `step${step}`;
    const stepFields = user[stepKey as keyof IUser];

    if (typeof stepFields === "object" && stepFields !== null) {
      const values = Object.values(stepFields);

      for (const value of values) {
        if (value === undefined || value === null || value === "") {
          return true; // Há pelo menos um campo sem valor
        }
      }
    }
    return false; // Todos os campos têm valores
  };

  const handleChangeContext = (step: number, target: string, value: string) => {
    const stepKey = `step${step}`;
    
    setUser((prevValue) => ({
      ...prevValue,
      [stepKey]: {
        ...prevValue[stepKey as keyof IUser ],
        [target]: value,
      },
    }));
  };

  return (
    <RegisterContext.Provider
      value={{ user, handleChangeContext, hasPendency }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

export const useRegister = (): IRegisterContext => {
  const context = useContext(RegisterContext);
  if (!context) {
    throw new Error("useRegister deve ser usado dentro de um RegisterProvider");
  }
  return context;
};

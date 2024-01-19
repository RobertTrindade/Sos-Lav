"use client";
import React, { createContext, useContext } from "react";

interface IChamadosContext {}

const initial = {};
// Crie o contexto de registro
const PatiosContext = createContext<IChamadosContext | undefined>(undefined);

// Provedor de registro que mantém o estado dos patios
export const PatiosProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <PatiosContext.Provider value={{}}>{children}</PatiosContext.Provider>
  );
};

export const useChamados = (): any => {
  const context = useContext(PatiosContext);
  if (!context) {
    throw new Error("useChamados deve ser usado dentro de um RegisterProvider");
  }
  return context;
};
